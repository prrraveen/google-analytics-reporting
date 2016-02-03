## How page like works

You can view all the users on user list page.(top right button on navigation bar).
current logged in user can like any profile but can not like own profile.

each users like data is queried by the below
```
#!python

def get_counts(username,start_datetime,end_datetime):
    user_likes = Likes.objects.filter(Q(user__username = username),
                                 Q(time__gte = start_datetime) &
                                 Q(time__lte = end_datetime)
                                ).count()
    all_users_likes = Likes.objects.filter(Q(time__gte = start_datetime) &
                                           Q(time__lte = end_datetime)).count()

    all_distinct_user = Likes.objects.all().values('user').annotate(dcount= Count('user')).count()

    if all_distinct_user != 0:
        avg_user_likes =  all_users_likes/float(all_distinct_user)
    else:
        avg_user_likes = 0
    return [user_likes,avg_user_likes]

```

It return an array of user likes, and average user like in an interval of time.
