from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.dash, name='dash'),
    path('mus', views.app, name='app'),
]
