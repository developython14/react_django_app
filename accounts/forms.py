# accounts/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Person
from django.contrib.auth.models import User

class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = Person
        fields = ("saroukh",)


class basecreate(forms.ModelForm):

    class Meta:
        model = User
        fields = ('first_name' , 'last_name' , 'email' , 'username')