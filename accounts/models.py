from django.db import models
from django.contrib.auth.models import User



class Person(models.Model):
    saroukh = models.CharField(max_length=30)
    user_id = models.ForeignKey(to=User, on_delete=models.CASCADE)