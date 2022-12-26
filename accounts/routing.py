from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path('accounts/room', consumers.chatconsumer.as_asgi())
]