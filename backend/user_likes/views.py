from datetime import datetime, timedelta
import simplejson

from django.http import HttpResponse
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q
from django.utils import timezone
from .models import Likes
from django.db.models import Count

def increment(request,username):
    '''
        It is called when user click like button.
        It created new entry to Likes table.
        503 is raised if something goes wrong.
    '''
    try:
        user = User.objects.get(username=username)
        like = Likes(user=user).save()
        return HttpResponse(status=200)
    except ObjectDoesNotExist:
        return HttpResponse(status=503)

def like_graph(request,username,type):
    '''
    this method returns likes count and average like count for a time duration(hourl,day,week etc).
    @data : holds the response object(payload).
    get param "type" is checked for time duration(graph type).
    @start_datetime: holds timestamp of beginning of the duration.
    @end_datetime: holds timestamp of end of the duration.
    the For loop with range itterates for every hour/day between start_datetime and end_datetime.
    get_counts return an like count and avg_user_likes.
    '''
    data = []
    if type == 'hourly':
        for hour in range(3,0,-1):
            start_datetime = timezone.now() - timedelta(hours=hour)
            end_datetime = timezone.now() - timedelta(hours=hour-1)
            user_likes , avg_user_likes = get_counts(username,start_datetime,end_datetime)
            data.append([end_datetime.hour, user_likes , avg_user_likes])

    elif type == 'day':
        for day in range(3,0,-1):
            start_datetime = timezone.now() - timedelta(days=day)
            end_datetime = timezone.now() - timedelta(days=day-1)
            user_likes , avg_user_likes = get_counts(username,start_datetime,end_datetime)
            data.append([end_datetime.day, user_likes , avg_user_likes])

    elif type == 'week':
        start_datetime = datetime.now() - timedelta(weeks=3)
        for week in range(3,0,-1):
            start_datetime = timezone.now() - timedelta(weeks=week)
            end_datetime = timezone.now() - timedelta(weeks=week-1)
            user_likes , avg_user_likes = get_counts(username,start_datetime,end_datetime)
            data.append([end_datetime.day, user_likes , avg_user_likes])

    elif type == 'month':
        for month in range(3,0,-1):
            start_datetime = timezone.now() - timedelta(month*365/12)
            end_datetime = timezone.now() - timedelta(month*365/12-30)
            user_likes , avg_user_likes = get_counts(username,start_datetime,end_datetime)
            data.append([end_datetime.month, user_likes , avg_user_likes])
    else:
        return HttpResponse(status=500)

    data = simplejson.dumps(data)
    return HttpResponse(data)


def get_counts(username,start_datetime,end_datetime):
    '''
        it returns an array of two variable [@user_likes ,@avg_user_likes].
    '''
    user_likes = Likes.objects.filter(Q(user__username = username),
                                 Q(time__gte = start_datetime) &
                                 Q(time__lte = end_datetime)
                                ).count() #returns count of user like for queried duration
    all_users_likes = Likes.objects.filter(Q(time__gte = start_datetime) &
                                           Q(time__lte = end_datetime)).count() #it return user like for all users.

    all_distinct_user = Likes.objects.all().values('user').annotate(dcount= Count('user')).count() # grouping user likes count

    # calculating avg
    if all_distinct_user != 0:
        avg_user_likes =  all_users_likes/float(all_distinct_user)
    else:
        avg_user_likes = 0
    return [user_likes,avg_user_likes]
