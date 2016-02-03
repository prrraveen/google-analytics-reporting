from django.test import TestCase, Client
from django.core.urlresolvers import reverse
from django.core.exceptions import ObjectDoesNotExist

from .views import user_logout
from django.contrib.auth.models import User

class TemplateCheking(TestCase):
    def setUp(self):
        """
            A django.test class member function called before running each test case.
        """
        self.client = Client()

    '''
        ::IMPORTANT::
        Make sure your function names start with test_,
        which is not only a common convention but also so that django-discover-runner can locate the test.
    '''
    def test_index_template_is_rendered(self):
        """
            verify main view should render index.html
        """
        response = self.client.get('/')
        self.assertTemplateUsed(response, 'index.html')

    def test_frontend_test_template_is_rendered(self):
        """
            verify test view should render test.html
        """
        response = self.client.get('/test')
        self.assertTemplateUsed(response, 'test.html')

    def test_503_raised_if_user_already_exists(self):
        """
            verify test view should render test.html
        """
        response = self.client.get('/test')
        self.assertTemplateUsed(response, 'test.html')

class SignupTest(TestCase):
    def setUp(self):
        """
            A django.test class member function called before running each test case.
        """
        self.client = Client()
        # create a user
        self.user = User.objects.create_user(first_name= 'foo',
                                        username = 'foo@gmail.com',
                                        email = 'foo@gmail.com',
                                        password = 'password')
        self.user.save()

    def tearDown(self):
        '''
            run after this test suite to remove self.user
        '''
        self.user.delete() #this will remove the created user. So we can create it agin in other suites

    def test_503_raised_if_user_already_exists(self):
        """
            verify test view should render test.html
        """
        response = self.client.post('/user/signup/',{'name': self.user.first_name,
                                                    'email': self.user.email,
                                                    'password': 'password'}) #trying to create a user that already exists
        self.assertEqual(response.status_code, 503) #503 is raised when user already existing

    def test_user_isRegistered_ifNew(self):
        """
            when username doesn't exists(i.e a new user is registering) exception ObjectDoesNotExist is raised.
        """
        response = self.client.post('/user/signup/',{'name': 'bar',
                                                    'email': 'bar@gmail.com',
                                                    'password': 'password'}) #trying to create a user that already exists
        self.assertEqual(response.status_code, 200) #200 if user is created


class LoginTest(TestCase):
    ''' Test suite to test login view
    '''
    def setUp(self):
        self.client = Client()
        # create a user
        self.user = User.objects.create_user(first_name= 'foo',
                                        username = 'foo@gmail.com',
                                        email = 'foo@gmail.com',
                                        password = 'password')
        self.user.save()

    def tearDown(self):
        '''
            run after this test suite to remove self.user
        '''
        self.user.delete() #this will remove the created user. So we can create it agin in other suites

    def test_503_raised_if_user_doesnot_exists(self):
        """
            verify test view should render test.html
        """
        response = self.client.post('/user/signin/',{'email': 'stanger@gmail.com',
                                                     'password': 'password'})
        self.assertEqual(response.status_code, 503) #503 is raised when user already existing

    def test_200_isRaised_onSuccessful_login(self):
        """
            verify request.session and request.user is set when user login succefully
        """
        response = self.client.post('/user/signin/',{'email': self.user.email,
                                                     'password': 'password'}) #need to use plain password, since self.user.password is salted after save
        self.assertEqual(response.status_code, 200) #503 is raised when user already existing
