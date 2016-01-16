define([
        'marionette',
],
function(
        Mn
) {
    return Mn.ItemView.extend({
        template: JST['user_detail_itemview'],
        tagName: 'tr',
        attributes : function () {
           // Return model data
           return {
             id : this.model.get('id'),
             "data-email" : this.model.get('email'),
             class: 'pointer'
           };
       },

       ui: {
           col: 'td'
       },
       events:{
           'click @ui.col': 'navigate'
       },
       navigate: function(e){
           var row = e.target.parentElement
           var fragment = `/user/${row.id}/${row.dataset.email}`
           app.router.navigate(fragment, {trigger: true})
       }

    })
});
