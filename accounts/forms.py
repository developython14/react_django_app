# accounts/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Person
from crispy_forms.helper import FormHelper
from django.contrib.auth.models import User



class CustomUserCreationForm(forms.ModelForm):

    class Meta:
        model = Person
        fields = ("university",)


class basecreate(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()

    class Meta:
        model = User
        fields = ('first_name' , 'last_name' , 'email' , 'username')
    



