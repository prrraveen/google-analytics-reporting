define(['apps/user/views/signin',
        'jasmine-jquery',
        'mock-ajax',

],
function (Signin
) {
    describe('View :: signin', function () {
        beforeEach(function () {
            jasmine.Ajax.install();
            signup = new Signin();
            signup.render();
            spyOn(signup, 'submit');
            spyOn(window, 'alert');
        });
        afterEach(function () {
            jasmine.Ajax.uninstall();
        });
        it('email is require field', function () {

            //set value for all the field
            for(var field in signup.ui){
                signup.ui[field].val('something');
            }

            //empty name field to test if raise exception
            signup.ui.email.val('');

            signup.$el.find('#submit').trigger('click');
            expect(window.alert).toHaveBeenCalledWith('Email is required.');
        })

        it('Password is require field', function () {

            //set value for all the field
            for(var field in signup.ui){
                signup.ui[field].val('something');
            }

            //empty name field to test if raise exception
            signup.ui.password.val('');

            signup.$el.find('#submit').trigger('click');
            expect(window.alert).toHaveBeenCalledWith('Password is required.');
        })

        it('should make an AJAX request to the correct URL',function(){

            //preparing data for fake ajax class
            for(var field in signup.ui){
                signup.ui[field].val('something');
            }

            spyOn($, "ajax").and.callThrough();

            signup.$el.find('#submit').trigger('click'); //triggering submit form event

            expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual("/user/signin/");
        })
    })
})//define
