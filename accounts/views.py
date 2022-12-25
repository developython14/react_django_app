from django.shortcuts import render
from django.contrib.auth.forms import AuthenticationForm  
from .admin import UserCreationForm,UserChangeForm
# Create your views here.
from django.views.decorators.csrf import csrf_protect


def dash(request):
    return render(request, 'index.html')


def login(request):
    return render(request, 'login.html' , {'form':AuthenticationForm})


def signup(request):
    return render(request, 'signup.html')

@csrf_protect
def test(request):
    return render(request, 'test.html' , {'form':UserCreationForm})