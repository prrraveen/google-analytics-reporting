define([
        'marionette',
        'apps/user/models/user',
        'bootstrap',
],
function(
        Mn,
        User,
        Bootstrap
) {
    var Navigation = Mn.ItemView.extend({
        model: new User(),
        template: JST['navigation'],
        templateHelpers: function() {
            return { user : this.model};
        },
    })
    return Navigation;
});
