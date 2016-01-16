from django.conf.urls import patterns,url
from .views import *

urlpatterns = patterns('',
    url(r'^likes/increment/(?P<username>[^/]+)$',  increment),
    url(r'^likes/(?P<username>[^/]+)/(?P<type>\w+)$',  like_graph),

    )
