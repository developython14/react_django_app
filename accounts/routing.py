from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path('chat/room', consumers.chatconsumer.as_asgi())
]