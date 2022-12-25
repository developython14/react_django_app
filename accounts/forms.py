# accounts/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Person

class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = Person
        fields = ("saroukh",)