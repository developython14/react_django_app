from django.shortcuts import render
from django.contrib.auth.forms import AuthenticationForm  ,UserCreationForm,UserChangeForm
from .forms import CustomUserCreationForm,basecreate
from django.core.mail import send_mail
from django.template.loader import render_to_string
from twilio.rest import Client
from .models import Person
from django.contrib.auth.models import User

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
    if request.method == 'POST' :
        username = request.POST['username']
        email = request.POST['email']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        password = request.POST['password1']
        user = User.objects.create_user(username=username , email = email ,first_name = first_name ,last_name =last_name )
        user.set_password(password)
        university = request.POST['university']
        person = Person(user = user , university = university)
        person.save()
        print('succes')
    return render(request, 'signup.html' , {'form':CustomUserCreationForm ,'form1':basecreate})

def test(request):
    if request.method == 'POST' :
        username = request.POST['username']
        email = request.POST['email']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        password = request.POST['password1']
        user = User.objects.create_user(username=username , email = email ,first_name = first_name ,last_name =last_name )
        user.set_password(password)
        university = request.POST['university']
        person = Person(user = user , university = university)
        person.save()
        print('succes')
    return render(request, 'test.html' , {'form':CustomUserCreationForm ,'form1':basecreate})