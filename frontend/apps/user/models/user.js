define([
        'backbone',
        'apps/user/models/session',
],
function(
        Backbone,
        Session
) {
    var User = Backbone.Model.extend({
        initialize: function () {
            this.session = new Session();
        },

        logged_in: function () {
            if (this.get_profile() !== undefined) {
                return true;
            } else {
                return false;
            }
        },

        get_profile: function () {
            var profile =  JSON.parse(window.localStorage.getItem('profile'));
            if(profile)
                return profile
        },

        set_profile: function (profile) {
            return window.localStorage.setItem('profile', JSON.stringify(profile));
        },

        get_name: function () {
            var profile = JSON.parse(window.localStorage.getItem('profile'));
            if(profile)
                return profile.first_name;
        },

        get_email: function () {
            var profile = JSON.parse(window.localStorage.getItem('profile'));
            if(profile)
                return profile.email;
        },

        get_id: function () {
            var profile = JSON.parse(window.localStorage.getItem('profile'));
            if(profile)
                return profile.id;
        },

        logout: function () {
            var _this = this;
            $.ajax({
                url: '/logout/',
                type: 'GET',
                async: false,
                success: function () {
                    _this.session.clean();
                    _this.clean_localstorage();
                },
            });
        },

        clean_localstorage: function () {
            window.localStorage.removeItem('profile');
        },

    })
    return User;
});
