define(['apps/user/views/signin',
        'jasmine-jquery',
        'mock-ajax',

],
function (Signin
) {
    describe('View :: signin', function () {
        beforeEach(function () {
            jasmine.Ajax.install();
            signin = new Signin();
            signin.render();
            spyOn(signin, 'submit');
            spyOn(window, 'alert');
        });
        afterEach(function () {
            jasmine.Ajax.uninstall();
        });
        it('email is require field', function () {

            //set value for all the field
            for(var field in signin.ui){
                signin.ui[field].val('something');
            }

            //empty name field to test if raise exception
            signin.ui.email.val('');

            signin.$el.find('#submit').trigger('click');
            expect(window.alert).toHaveBeenCalledWith('Email is required.');
        })

        it('Password is require field', function () {

            //set value for all the field
            for(var field in signin.ui){
                signin.ui[field].val('something');
            }

            //empty name field to test if raise exception
            signin.ui.password.val('');

            signin.$el.find('#submit').trigger('click');
            expect(window.alert).toHaveBeenCalledWith('Password is required.');
        })

        it('should make an AJAX request to the correct URL',function(){

            //preparing data for fake ajax class
            for(var field in signin.ui){
                signin.ui[field].val('something');
            }

            spyOn($, "ajax").and.callThrough();

            signin.$el.find('#submit').trigger('click'); //triggering submit form event

            expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual("/user/signin/");
        })
    })
})//define
