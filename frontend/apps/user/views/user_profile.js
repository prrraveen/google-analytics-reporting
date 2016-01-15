define([
        'marionette',
        'apps/user/models/user',
        'apps/user/collections/page_views',
        'bootstrap',
        'google_analytics',
        'goog!visualization,1,packages:[corechart,geochart]',
],
function(
        Mn,
        User,
        Page_views
) {
    return Mn.ItemView.extend({
        model: new User(),
        template: JST['user_profile'],

        templateHelpers: function() {
            return { user : this.model};
        },

        onRender: function(){
            var _this = this;
            this.collection = new Page_views();
            this.collection.fetch({
                success: function(collection, response, options){
                    _this.make_graph(data=response);
                },
                error: function(collection, response, options){
                    alert('Something went wrong while gathering data');
                },
            })


        },

        make_graph: function(data){
            this.make_data(data);
            this.render_graph();
        },

        make_data: function(data){
            this.data = new google.visualization.DataTable();
            this.data.addColumn('number', 'PageViews');
            this.data.addColumn('number', 'Day');
            var _this = this;
            data.rows.forEach(function(row){
                _this.data.addRow([+row[0] , +row[1]])
            })
        },

        render_graph: function(){
            var options = {
              title: 'Page Views',
              width: 850,
              height: 300,
              legend: { position: 'bottom'   },
              hAxis: { format: ''},
              vAxis: { format: ''}
            };

            var container = $(this.el).find('#gchart')[0];
            var chart = new google.visualization.LineChart(container);
            chart.draw(this.data,options);
        },
    })
});
