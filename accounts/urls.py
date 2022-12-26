from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login_view, name='login'),
    path('signup', views.signup, name='signup'),
    path('test_user', views.test, name='test'),
    path('dash', views.dash, name='dash'),
    path('logout', views.logoutview, name='logout'),
    path('room', views.main_view, name='room'),
]
