from django.shortcuts import render

# Create your views here.


def dash(request):
    return render(request, 'home.html')

def app(request):
    return render(request, 'index.html')