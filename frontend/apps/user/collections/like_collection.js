define([
        'backbone',
],
function(
        Backbone
) {
    return Backbone.Collection.extend({
        initialize: function(options){
            _.extend(this,options);
            this.url = `/likes/${this.username}/day`;
        },

        change_graph_type: function(graph_type){

            /*
                This method is called before fetch call.
                It sets the graph type needed to fetch.
            */
            this.url = `/likes/${this.username}/${graph_type}`;
        },
    });
});
