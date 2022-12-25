from django.shortcuts import render
from django.contrib.auth.forms import AuthenticationForm  ,UserCreationForm,UserChangeForm
from .forms import CustomUserCreationForm
from django.core.mail import send_mail
from django.template.loader import render_to_string

# Create your views here.


def dash(request):
    return render(request, 'index.html')


def login(request):
    send_mail(
    'Email confirmation',
    'Here is the message. salam mustapha from django',
    'from@example.com',
    ['khasarou@gmail.com'],
    html_message = render_to_string('test.html'),
    fail_silently=False,
    )
    return render(request, 'login.html' , {'form':AuthenticationForm})


def signup(request):
    return render(request, 'signup.html')

def test(request):
    if request.method == 'POST' :
        data_form = CustomUserCreationForm(request.POST)
        if data_form.is_valid():
            print('data rahi  validated')
            data_form.save()
    return render(request, 'test.html' , {'form':CustomUserCreationForm})