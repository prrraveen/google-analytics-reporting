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
    try:
        user = User.objects.get(username=username)
        like = Likes(user=user).save()
        return HttpResponse(status=200)
    except ObjectDoesNotExist:
        return HttpResponse(status=503)

def like_graph(request,username,type):
    '''
    make query on the like with le ge.
    get the count
    '''
    data = []
    if type == 'hourly':
        for hour in xrange(3,0,-1):
            start_datetime = timezone.now() - timedelta(hours=hour)
            end_datetime = timezone.now() - timedelta(hours=hour-1)
            user_likes , avg_user_likes = get_counts(username,start_datetime,end_datetime)
            data.append([end_datetime.hour, user_likes , avg_user_likes])

    elif type == 'day':
        for day in xrange(3,0,-1):
            start_datetime = timezone.now() - timedelta(days=day)
            end_datetime = timezone.now() - timedelta(days=day-1)
            user_likes , avg_user_likes = get_counts(username,start_datetime,end_datetime)
            data.append([end_datetime.day, user_likes , avg_user_likes])

    elif type == 'week':
        start_datetime = datetime.now() - timedelta(weeks=3)
        for week in xrange(3,0,-1):
            start_datetime = timezone.now() - timedelta(weeks=week)
            end_datetime = timezone.now() - timedelta(weeks=week-1)
            user_likes , avg_user_likes = get_counts(username,start_datetime,end_datetime)
            data.append([end_datetime.day, user_likes , avg_user_likes])

    elif type == 'month':
        for month in xrange(3,0,-1):
            start_datetime = timezone.now() - timedelta(month*365/12)
            end_datetime = timezone.now() - timedelta(month*365/12-30)
            user_likes , avg_user_likes = get_counts(username,start_datetime,end_datetime)
            data.append([end_datetime.month, user_likes , avg_user_likes])
    else:
        return HttpResponse(status=500)

    data = simplejson.dumps(data)
    return HttpResponse(data)


def get_counts(username,start_datetime,end_datetime):
    user_likes = Likes.objects.filter(Q(user__username = username),
                                 Q(time__gte = start_datetime) &
                                 Q(time__lte = end_datetime)
                                ).count()
    all_users_likes = Likes.objects.filter(Q(time__gte = start_datetime) &
                                           Q(time__lte = end_datetime)).count()

    all_distinct_user = Likes.objects.all().values('user').annotate(dcount= Count('user')).count()
    avg_user_likes =  all_users_likes/float(all_distinct_user)
    return [user_likes,avg_user_likes]
