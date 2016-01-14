from django.conf.urls import patterns,url
from .views import *

urlpatterns = patterns('',
    url(r'^$',  main),
    url(r'^user/signup/$',  signup), #user signup
    url(r'^user/signin/$',  signin),
    url(r'^logout/$',  logout),    
    )