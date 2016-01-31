/*
    ~~~Future test cases~~~
    It should show correct x axis for crosponding graph type
*/
define(['apps/user/views/user_profile',
        'apps/user/models/user',
        'apps/user/models/session',
        'jasmine-jquery',
        'mock-ajax',
],

function (User_profile,
          User,
          Session
) {
    describe('View :: User Profile', function () {
        beforeEach(function(){
            user = new User(); //create user instace
            user.set_profile(profile = {"id":1,"first_name":"foo Singh","email":"foo@gmail.com"} ) //adding mock data
            session = new Session().set_token(access_token = '123444343') //adding mock session id
        })

        afterEach(function () {
        });

        describe('', function () {
            beforeEach(function () {
                var ga = spyOn(window, 'ga').and.callThrough();
                user_profile = new User_profile({userid: user.get_id(),username: user.get_email()}); //create instace of User_profile
            });

            afterEach(function () {
            });

            it('ensue google analytics is called',function(){
                expect(ga).toHaveBeenCalled(); //check if window.ga(send) call is made
            })
        })

        describe('', function () {
            beforeEach(function () {
                jasmine.Ajax.install();
                user_profile = new User_profile({userid: '2',username:'bar@gmail.com'}); //create instace of User_profile

                user_profile.render();
            });

            afterEach(function () {
                jasmine.Ajax.uninstall();
            });
            it('Like button should be enabled for user profiles other than logged in user.',function(){
                expect(user_profile.$el.find('#hit-like')[0].disabled).toBeFalsy();
            })
        })
        describe('', function () {
            beforeEach(function () {
                jasmine.Ajax.install();
                user_profile = new User_profile({userid: user.get_id(),username: user.get_email()}); //create instace of User_profile

                user_profile.render();
            });

            afterEach(function () {
                jasmine.Ajax.uninstall();
            });
            it('Like button should be disabled for user profiles of logged in user.',function(){
                expect(user_profile.$el.find('#hit-like')[0].disabled).toBeTruthy();
            })
        })

    })
})//define
