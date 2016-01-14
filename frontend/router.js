define([
        'marionette',
        'apps/user/models/user',
        'assets/templates',

    ],
    function(
        Mn,
        User
    ) {
        var Router = Marionette.AppRouter.extend({
            initialize: function(){
                this.user = new User();
            },
            routes: {
                '': 'home',
                'signup': 'signup',
                'signin': 'signin',
                'logout': 'logout',
                'user/:username': 'user_profile'
            },

            home: function() {
                this.navigate('signup', {
                    trigger: true
                })
            },
            signup: function() {

                if (this.user.logged_in()) {
                    this.navigate('user/'+this.user.get_email(), {trigger: true})
                    return
                }

                require(['apps/user/views/signup', ], function(Signup) {
                    app.layout.navigation.empty();
                    app.layout.main_region.show(new Signup())
                })
            },

            signin: function() {

                if (this.user.logged_in()) {
                    this.navigate('user/'+this.user.get_email(), {trigger: true})
                    return
                }
                require(['apps/user/views/signin', ], function(Signin) {
                    app.layout.navigation.empty();
                    app.layout.main_region.show(new Signin())
                })
            },

            logout: function() {
                    this.user.logout();
                    app.router.navigate('signin', {trigger: true});
            },

            user_profile: function(username) {
                if (!this.user.logged_in()) {
                    this.navigate('signin', {trigger: true})
                    return
                }
                require(['apps/home/views/navigation',
                    'apps/user/views/user_profile',
                ], function(Navigation,
                    User_profile) {
                    app.layout.navigation.show(new Navigation());
                    app.layout.main_region.show(new User_profile())
                })
            },

        })
        return Router;
    });
