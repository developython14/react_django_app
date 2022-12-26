from django.db import models
from django.contrib.auth.models import User



class Person(models.Model):
    university = models.CharField(max_length=30)
    accept_contrat = models.BooleanField()
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    USERNAME_FIELD = 'username'
    
    