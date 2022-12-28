from django.shortcuts import render
from accounts.models import *
# Create your views here.


def index(request):
    persons = Person.objects.all()
    return render(request, "chat/room.html" , {'persons' : persons})



def room(request, room_name):
    return render(request, "chat/chat.html", {"room_name": room_name})



def video(request):
    return render(request, "chat/peer.html")