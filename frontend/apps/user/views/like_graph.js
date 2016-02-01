define([
        'marionette',
        'apps/user/collections/like_collection',
],
function(
        Mn,
        Like_collection
) {
    return Mn.ItemView.extend({
        template: JST['like_graph'],
        graph_type: 'day', //setting up defaul graph type

        initialize: function(options){
            // Immediately add a pageview event to the queue.
            _.extend(this,options);
        },

        ui: {
            x_axis_duration: '.x-axis-duration a',
        },

        events:{
            'click @ui.x_axis_duration': 'change_x_axis_scale', //change the graph type  day , month etc
        },

        onRender: function(){
            //after redering the el , create a Like_collection
            this.collection = new Like_collection({username :this.username});
            //get_graph_data will fetch google analytics data from server
            this.get_graph_data()
        },

        get_graph_data: function(){
            /* this method fetch user like data from server.
                on success it calls method make_graph which prepares data for graph
            */
            var _this = this;
            this.collection.change_graph_type(graph_type = this.graph_type);
            this.collection.fetch({
                success: function(collection, response, options){
                    _this.make_graph(data= response)
                },
                error: function(collection, response, options){
                    alert('Something went wrong while gathering data');
                },
            })
        },

        make_graph: function(data){
            /* make_date prepares data and data format required for google graph
            */

            this.make_data(data); //prepare data
            this.render_graph();  //render google graph with prepared data
        },

        make_data: function(data){
            /*
                prepares data format require for google graph
            */

            var _this = this;
            this.data = new google.visualization.DataTable(); //instace of DataTable. Datatable is two cross two matrix in this case
            this.data.addColumn('string', this.graph_type);
            this.data.addColumn('number', 'Likes');
            this.data.addColumn('number', 'Avg Likes');
            data.forEach(function(row){
                _this.data.addRow([String(row[0]) , row[1] , row[2]])
            })
        },

        render_graph: function(){
            /* preparing graph
                some option are created
            */

            var options = {
            //   title: 'Page Views',
              width: 850,
              height: 300,
              legend: { position: 'bottom'   },
              hAxis: { format: ''},
              vAxis: { format: ''}
            };

            var container = $(this.el).find('#like-chart')[0]; //DOM element to insert graph
            var chart = new google.visualization.ColumnChart(container); //we are using LINEChart graph
            chart.draw(this.data,options); //passing data and option.
        },

        change_x_axis_scale: function(e){
            /*
                method to change the x axis scale type i.e hourly , day , week , month
            */

            this.switch_active_class(e)
            this.graph_type = e.target.id; //get type of id
            this.get_graph_data()
        },

        switch_active_class: function(e){
            /*
                this method highligts current graph type
            */

            //remove active classs form li element
            this.ui.x_axis_duration.parent().removeClass('active');

            //add active class to current li element
            $(e.target.parentElement).addClass('active')
        }

    })
});
