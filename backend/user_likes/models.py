from django.db import models
from django.contrib.auth.models import User

class Likes(models.Model):
    '''
        this model stores like count of users
        it can be queryed against datetime to get like count.
    '''
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    time= models.DateTimeField(auto_now=True)
