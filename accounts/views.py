from django.shortcuts import render
from django.contrib.auth.forms import AuthenticationForm  ,UserCreationForm,UserChangeForm
from .forms import CustomUserCreationForm
# Create your views here.


def dash(request):
    return render(request, 'index.html')


def login(request):
    return render(request, 'login.html' , {'form':AuthenticationForm})


def signup(request):
    return render(request, 'signup.html')

def test(request):
    if request.method == 'POST' :
        data_form = UserCreationForm(request.POST)
        if data_form.is_valid():
            print('data rahi  validated')
            data_form.save()
    return render(request, 'test.html' , {'form':UserCreationForm})