from django.shortcuts import render

# Create your views here.


def dash(request):
    return render(request, 'inr/build/index.html')