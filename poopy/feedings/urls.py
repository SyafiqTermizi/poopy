from django.urls import path

from .views import ListCreateFeedings

app_name = "feedings"
urlpatterns = [
    path("", ListCreateFeedings.as_view(), name="list-create"),
]
