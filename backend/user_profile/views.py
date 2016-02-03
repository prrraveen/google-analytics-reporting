import json

from django.shortcuts import render_to_response
from django.http import HttpResponse

from django.contrib.auth.models import User, AnonymousUser

from django.contrib.auth import authenticate, login, logout

from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import UserSerializer

def main(request):
    '''
        This is the entry point of app.
    '''
    return render_to_response('index.html')

def test(request):
    '''
        test.html is to render frontend test cases.
    '''
    return render_to_response('test.html')

@csrf_exempt
@require_http_methods(["POST"])
def signup(request):
    '''
        A simple user registration.
        It creates a new user if it does not exists already.
        It throw status code 503 if user alredy exists
    '''
    try:
        user = User.objects.get(email = request.POST['email'])
        return HttpResponse(status=503)
    except ObjectDoesNotExist:
        user = User.objects.create_user(first_name= request.POST['name'],
                                        username = request.POST['email'],
                                        email = request.POST['email'],
                                        password = request.POST['password']).save()
        return HttpResponse(status=200)


@csrf_exempt
@require_http_methods(["POST"])
def signin(request):
    '''
        user is authenticated using django.auth
        if authenticated succeed, User is logedin. User is added to session.
        User instance is serialized using django REST serializer.
        In response, serialized user object and session key is sent.
        503 status code is raise if authenticated fails
    '''
    try:
        user = authenticate(username=request.POST['email'], password = request.POST['password'])
        login(request, user)
        payload = UserSerializer(user)
        return HttpResponse(json.dumps({ 'profile' : payload.data , 'access_token' : request.session.session_key }), status=200)
    except Exception,e:
        print '@sigin {}'.format(e)
        return HttpResponse(status=503)

def user_logout(request):
    '''
        session key and session.user is destroyed
    '''
    logout(request)
    return HttpResponse(status=200)

@api_view(['GET'])
def get_all_users(request):
    '''
        this method return all the users list.
        UserSerializer is django REST serializer.
        many=True is used to serialize more than one object
    '''
    users = User.objects.all()
    payload = UserSerializer(users, many=True)
    return Response(payload.data)
