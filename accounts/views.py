from django.shortcuts import render
from django.contrib.auth.forms import AuthenticationForm  ,UserCreationForm,UserChangeForm
from .forms import CustomUserCreationForm,basecreate
from django.core.mail import send_mail
from django.template.loader import render_to_string
from twilio.rest import Client

# Create your views here.


def dash(request):
    return render(request, 'index.html')


def login(request):
    data = {'username' : 'Belkassam Mustapha' , 'link' : 'https://mustapha.up.railway.app/' , 'message':'feel free'}
    send_mail(
    'Email confirmation',
    'Here is the message. salam mustapha from django',
    'from@example.com',
    ['khasarou@gmail.com'],
    html_message = render_to_string('test.html' ,data),
    fail_silently=False,
    )
    account_sid = 'AC5429cafece758cdb12fc1119fb74b7d6'
    auth_token = '2f982e0e703de72f674a79d9c3aa70a2'
    client = Client(account_sid, auth_token)

    message = client.messages \
                .create(
                     body="Join Earth's mightiest heroes. Like Kevin Bacon.",
                     from_='+13854692429',
                     to='+213674901699'
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
    return render(request, 'test.html' , {'form':CustomUserCreationForm ,'form1':basecreate})