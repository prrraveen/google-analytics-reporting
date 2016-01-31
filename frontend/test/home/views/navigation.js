/*
    Make sure logout works
*/

define(['apps/home/views/navigation',
        'apps/user/models/user',
        'apps/user/models/session',
        'jasmine-jquery',
        'mock-ajax',
],

function (Navigation,
          User,
          Session
) {
    describe('View :: Navigation Bar', function () {
        beforeEach(function(){
            jasmine.Ajax.install();
            user = new User(); //create user instace
            user.set_profile(profile = {"id":1,"first_name":"foo Singh","email":"foo@gmail.com"} ) //adding mock data
            session = new Session().set_token(access_token = '123444343') //adding mock session id
            navigation = new Navigation(); //create instace of Navigation
        })

        afterEach(function () {
            jasmine.Ajax.uninstall();

        });

        describe('', function () {
            beforeEach(function () {
                navigation.render()
                logout = spyOn(user, "logout").and.callThrough();
            });

            afterEach(function () {
            });

            it('ensue logout works',function(){
                signup.$el.find('#logout').trigger('click');
                expect(logout).toHaveBeenCalled(); //check if window.ga(send) call is made
            })
        })
    })
})//define
