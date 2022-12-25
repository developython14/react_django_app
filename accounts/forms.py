# accounts/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .forms import Person
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = Person
        fields = ("username", "email")