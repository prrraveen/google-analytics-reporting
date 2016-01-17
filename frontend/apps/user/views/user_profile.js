define([
        'marionette',
        'apps/user/models/user',
        'apps/user/views/view_graph',
        'apps/user/views/like_graph',
        'bootstrap',
        'goog!visualization,1,packages:[corechart,geochart]',
        'google_analytics',
],
function(
        Mn,
        User,
        View_graph,
        Like_graph
) {
    return Mn.LayoutView.extend({
        initialize: function(options){
            _.extend(this,options);
            // Immediately add a pageview event to the queue.
            window.ga("create", "UA-72362575-1", "none");

            ga('set', 'dimension1', this.userid);

            window.ga("send", "pageview");
        },

        template: JST['user_profile'],
        model: new User(),

        regions: {
            page_views: "#page-views", //region to render subview page_view
            page_likes: "#page-likes" //region to render subview page_like
        },

        ui: {
            tabs: '.nav-tabs a',
            hit_like: '#hit-like',
        },

        events:{
            'click @ui.tabs': 'show_region', //change the current view displayed
            'click @ui.hit_like': 'increment_like', //event to increment user like count
        },

        templateHelpers: function() {
            return { user : this.model};
        },

        show_region: function(e){
            if(e.target.id=='page-views-a'){
                if(this.page_views.hasView()==false)
                    this.page_views.show(new View_graph({username : this.username}));
            }else{
                if(this.page_likes.hasView()==false)
                    this.page_likes.show(new Like_graph({username : this.username}));
            }
        },

        onRender: function(){
            /* A marionette method, called when el is rendered.
            */
            if(this.page_views.hasView()==false)
                this.page_views.show(new View_graph({username : this.username}));

            //disable like button if the profile belongs to signin user
            if(this.username == this.model.get_email())
            {
                this.ui.hit_like.attr('disabled','disabled')
            }
        },

        increment_like: function(){
            /*
                increment user like count
            */
            var _this = this;
            $.get(`/likes/increment/${_this.username}`)
            .done(function(){
                _this.ui.hit_like.attr('disabled','disabled')
                alert('Liked')
            })
        }
    })
});
