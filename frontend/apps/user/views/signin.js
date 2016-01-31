define([
        'marionette',
        'apps/user/models/session',
        'apps/user/models/user',
],
function(
        Mn,
        Session,
        User
) {
    return Mn.ItemView.extend({
        template: JST['signin'],
        model: new User(),
        ui: {
            email: '#email',
            password: '#password',
            submit: '#submit',
        },
        events: {
            'click @ui.submit': 'submit',
        },

        submit: function(e){
            try{
                if(this.ui.email.val() == '') throw 'Email is required.'
                if(this.ui.password.val() == '') throw 'Password is required.'
            }
            catch(err){
                alert(err)
                return
            }

            var _this = this;
            $.post('/user/signin/',
            {
                email: this.ui.email.val(),
                password: this.ui.password.val()
            })
            .done(function(response){
                response = JSON.parse(response)
                var session = new Session().set_token(access_token = response.access_token )
                _this.model.set_profile(profile = response.profile)
                var fragment = `/user/${response.profile.id}/${response.profile.email}`
                app.router.navigate(fragment, { trigger : true})
            })
            .fail(function(response){
                if(response.status == 503)
                {
                    alert('signup if not yet or try login again')
                }
                else if (response.status == 500)
                {
                    alert('something went wrong')
                }
            })
        }

    })
});
