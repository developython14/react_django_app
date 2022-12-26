from django.shortcuts import render,redirect
from django.contrib.auth.forms import AuthenticationForm  ,UserCreationForm,UserChangeForm
from .forms import CustomUserCreationForm,basecreate
from django.core.mail import send_mail
from django.template.loader import render_to_string
from twilio.rest import Client
from .models import Person
from django.contrib.auth.models import User

# Create your views here.


def dash(request):
    return render(request, 'test.html')


def login(request):
    if request.method == 'POST':
        print('post work')
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            print(request.POST)
            user = form.get_user()
            login(request, user)
            return redirect('dash')
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
        accept_contrat = True
        print('hadi hya la valeur dyale' ,accept_contrat )
        person = Person(user = user , university = university ,accept_contrat =accept_contrat )
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