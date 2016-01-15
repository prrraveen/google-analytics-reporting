define([
        'backbone',
        'apps/user/models/page_view'
],
function(
        Backbone,
        Page_view
) {
    return Backbone.Collection.extend({
        url: '/analytics/default',
        model: Page_view,
    });
});
