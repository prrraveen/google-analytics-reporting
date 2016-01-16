define([
        'backbone',
],
function(
        Backbone
) {
    var User = Backbone.Model.extend({})
    return Backbone.Collection.extend({
        url: '/user/all/',
        model: User
    });
});
