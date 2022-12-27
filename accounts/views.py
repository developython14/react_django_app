from django.shortcuts import render,redirect
from django.contrib.auth.forms import AuthenticationForm  ,UserCreationForm,UserChangeForm
from .forms import CustomUserCreationForm,basecreate
from django.core.mail import send_mail
from django.template.loader import render_to_string
from twilio.rest import Client
from .models import Person
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login ,logout
from django.contrib.auth.decorators import login_required
from django.contrib.sites.shortcuts import get_current_site  
from django.utils.encoding import force_bytes, force_text  
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode  
from django.template.loader import render_to_string  
from .tokens import account_activation_token  
from django.contrib.auth.models import User  
from django.core.mail import EmailMessage  


# Create your views here.

@login_required
def dash(request):
    return render(request, 'test.html')


def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        print(form)
        if form.is_valid():
            print('data valid')
            print(request.POST)
            user = form.get_user()
            login(request, user)
            return redirect('dash')
    return render(request, 'login.html' , {'form':AuthenticationForm})



def logoutview(request):
    logout(request)
    return redirect('login')

def signup(request):
    if request.method == 'POST' :
        username = request.POST['username']
        email = request.POST['email']
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        password = request.POST['password1']
        user = User.objects.create_user(username=username , email = email ,first_name = first_name ,last_name =last_name )
        print('hadi password' , password)
        user.set_password(password)
        user.save()
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
        current_site = get_current_site(request)  
        mail_subject = 'Activation link has been sent to your email id'  
        message = render_to_string('acc_active_email.html', {  
                'user': user,  
                'domain': current_site.domain,  
                'uid':urlsafe_base64_encode(force_bytes(user.pk)),  
                'token':account_activation_token.make_token(user),  
            })  
        mail = EmailMessage(  
                        mail_subject, message, to=[email]  
            )  
        mail.send()  
        university = request.POST['university']
        person = Person(user = user , university = university)
        person.save()
        print('succes')
    return render(request, 'test.html' , {'form':CustomUserCreationForm ,'form1':basecreate})




def main_view(request):
    context = {}
    return render(request, 'room.html', context=context)