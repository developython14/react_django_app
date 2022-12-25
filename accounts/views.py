from django.shortcuts import render
from django.contrib.auth.forms import AuthenticationForm  
from .admin import UserCreationForm,UserChangeForm
# Create your views here.


def dash(request):
    return render(request, 'index.html')


def login(request):
    return render(request, 'login.html' , {'form':AuthenticationForm})


def signup(request):
    return render(request, 'signup.html')

def test(request):
    if request.method == 'POST' :
        form = UserCreationForm(request.POST)
        print('hadi  recived data')
        print(form.cleaned_data)
    return render(request, 'test.html' , {'form':UserCreationForm})