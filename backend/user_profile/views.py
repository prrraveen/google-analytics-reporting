import json

from django.shortcuts import render_to_response
from django.http import HttpResponse

from django.contrib.auth.models import User
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
    return render_to_response('index.html')

@csrf_exempt
@require_http_methods(["POST"])
def signup(request):
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
    try:
        user = authenticate(username=request.POST['email'], password = request.POST['password'])
        login(request, user)
        payload = UserSerializer(user)
        return HttpResponse(json.dumps({ 'profile' : payload.data , 'access_token' : 1234 }), status=200)
    except ObjectDoesNotExist:
        return HttpResponse(status=503)


def logout(request):
    try:
        logout(request) #django.contrib.auth.logout()
        return HttpResponse(status=200)
    except Exception,e:
        return HttpResponse(status=500)