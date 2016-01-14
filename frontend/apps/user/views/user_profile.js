define([
        'marionette',
        'apps/user/models/user',
        'apps/user/models/user',
        'apps/user/collections/page_views',
        'bootstrap',
        'google_analytics',
],
function(
        Mn,
        User,
        Page_views,
        Bootstrap

) {
    return Mn.ItemView.extend({
        initialize:function(){
            // this.collection = new Page_views();
            // this.collection.fetch()
        },

        model: new User(),
        template: JST['user_profile'],

        templateHelpers: function() {
            return { user : this.model};
        },
    })
});
