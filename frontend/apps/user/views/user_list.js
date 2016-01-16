define([
        'marionette',
        'apps/user/views/user_detail_itemview',
        'apps/user/views/no_user',
        'apps/user/collections/users',

],
function(
        Mn,
        User_detail_itemview,
        No_user,
        Users
) {
    return Mn.CompositeView.extend({
        initialize: function(){
            this.collection = new Users();
            var _this = this
            this.collection.fetch().then(function() {
               _this.render();
            });

        },

        childView: User_detail_itemview,
        emptyView: No_user,
        template: JST['user_list'],
        childViewContainer: 'tbody',
    })
});
