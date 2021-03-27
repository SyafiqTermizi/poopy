from django.urls import path
from .views import ListCreatePoopView

urlpatterns = [
    path("", ListCreatePoopView.as_view(), name="list-create"),
]
