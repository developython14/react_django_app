from django.shortcuts import render
from django.contrib.auth.forms import AuthenticationForm  

# Create your views here.


def dash(request):
    return render(request, 'index.html')


def login(request):
    return render(request, 'login.html' , {'form':AuthenticationForm})


def signup(request):
    return render(request, 'signup.html')