/*
    vefify signin redirect works
*/
define(['apps/user/views/signup',
        'jasmine-jquery',
        'mock-ajax',

],
function (Signup
) {
    describe('View :: Signup', function () {
        beforeEach(function () {
            jasmine.Ajax.install();
            signup = new Signup();
            signup.render();
            spyOn(signup, 'submit');
            spyOn(window, 'alert');
        });
        afterEach(function () {
            jasmine.Ajax.uninstall();
        });
        it('name is require field', function () {
            //set value for all the field
            for(var field in signup.ui){
                signup.ui[field].val('something');
            }
            //empty name field to test if raise exception
            signup.ui.name.val('');

            signup.$el.find('#signup').trigger('click');
            expect(window.alert).toHaveBeenCalledWith('name is required.');
        })

        it('email is require field', function () {
            //set value for all the field
            for(var field in signup.ui){
                signup.ui[field].val('something');
            }
            //empty name field to test if raise exception
            signup.ui.email.val('');

            signup.$el.find('#signup').trigger('click');
            expect(window.alert).toHaveBeenCalledWith('email is required.');
        })

        it('password is require field', function () {
            //set value for all the field
            for(var field in signup.ui){
                signup.ui[field].val('something');
            }
            //empty name field to test if raise exception
            signup.ui.password.val('');

            signup.$el.find('#signup').trigger('click');
            expect(window.alert).toHaveBeenCalledWith('password is required.');
        })

        it('confirm password is require field', function () {
            //set value for all the field
            for(var field in signup.ui){
                signup.ui[field].val('something');
            }
            //empty name field to test if raise exception
            signup.ui.confirm_password.val('');

            signup.$el.find('#signup').trigger('click');
            expect(window.alert).toHaveBeenCalledWith('confirm password is required.');
        })

        it('Don\'t submit if confirm password is not the same', function () {
            //set value for all the field
            for(var field in signup.ui){
                signup.ui[field].val('something');
            }
            //empty name field to test if raise exception
            signup.ui.confirm_password.val('something_else');

            signup.$el.find('#signup').trigger('click');
            expect(window.alert).toHaveBeenCalledWith('password Doesn\'t match');
        })

        it('should make an AJAX request to the correct URL',function(){

            //preparing data for fake ajax class
            for(var field in signup.ui){
                signup.ui[field].val('something');
            }

            spyOn($, "ajax").and.callThrough();

            signup.$el.find('#signup').trigger('click'); //triggering submit form event

            expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual("/user/signup/");
        })

        it('On success, redirect to login', function () {
            spyOn($, "ajax").and.callThrough();
            spyOn(this, 'done');
            signup.$el.find('#signup').trigger('click'); //triggering submit form event
        })

    })
})//define
