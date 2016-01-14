define([
        'marionette',
],
function(
        Mn
) {
    return Mn.ItemView.extend({
        template: JST['signup'],
        ui: {
            name : '#name',
            email: '#email',
            password: '#password',
            confirm_password: '#confirm-password',
            submit: '#signup',
        },
        events: {
            'click @ui.submit': 'submit',
        },

        submit: function(e){
            if(this.ui.name.val() == ''
                || this.ui.email.val() == ''
                || this.ui.password.val() == '')
            {
                alert('Please fill all the details')
                return
            }

            if(this.ui.password.val() != this.ui.confirm_password.val()){
                alert('password Doesn\'t match')
                return;
            }

            $.post('/user/signup/',
            {
                name : this.ui.name.val(),
                email: this.ui.email.val(),
                password: this.ui.password.val()
            })
            .done(function(){
                alert('Added')
                app.router.navigate('signin', { trigger : true})
            })
            .fail(function(response){
                if(response.status == 503)
                {
                    alert('user already exists')
                }
                else if (response.status == 500)
                {
                    alert('something went wrong')
                }
            })
        }
    })
});
