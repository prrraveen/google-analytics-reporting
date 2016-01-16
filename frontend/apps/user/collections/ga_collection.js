define([
        'backbone',
        'apps/user/models/page_view'
],
function(
        Backbone,
        Page_view
) {
    return Backbone.Collection.extend({
        initialize: function(options){
            _.extend(this,options);
            this.url = `/analytics/${this.username}/day`;
        },
        change_graph_type: function(graph_type){

            /*
                This method is called before fetch call.
                It sets the graph type needed to fetch.
            */
            this.url = `/analytics/${this.username}/${graph_type}`;
        },

        // parse: function(response, options){
        //     var data = [];
        //     response.rows.forEach(function(row){
        //         data.push([ +row[0] , +row[1] ])
        //     })
        //     return data
        // }
    });
});
