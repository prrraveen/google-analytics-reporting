from datetime import datetime, timedelta
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q
from django.utils import timezone
from .models import Likes

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
            likes = Likes.objects.filter(Q(user__username = username),
                                         Q(time__gte = start_datetime) &
                                         Q(time__lte = end_datetime)
                                        ).count()
            data.append([end_datetime.hour, likes])
    elif type == 'day':
        for day in xrange(3,0,-1):
            start_datetime = timezone.now() - timedelta(days=day)
            end_datetime = timezone.now() - timedelta(days=day-1)
            likes = Likes.objects.filter(Q(user__username = username),
                                         Q(time__gte = start_datetime) &
                                         Q(time__lte = end_datetime)
                                        ).count()
            data.append([end_datetime.day, likes])
    elif type == 'week':
        start_datetime = datetime.now() - timedelta(weeks=3)
        for week in xrange(3,0,-1):
            start_datetime = timezone.now() - timedelta(weeks=week)
            end_datetime = timezone.now() - timedelta(weeks=week-1)
            likes = Likes.objects.filter(Q(user__username = username),
                                         Q(time__gte = start_datetime) &
                                         Q(time__lte = end_datetime)
                                        ).count()
            data.append([end_datetime.day, likes])

    elif type == 'month':
        for month in xrange(3,0,-1):
            start_datetime = timezone.now() - timedelta(month*365/12)
            end_datetime = timezone.now() - timedelta(month*365/12-30)
            likes = Likes.objects.filter(Q(user__username = username),
                                         Q(time__gte = start_datetime) &
                                         Q(time__lte = end_datetime)
                                        ).count()
            data.append([end_datetime.month, likes])
    else:
        return HttpResponse(status=500)

    return HttpResponse(data)
