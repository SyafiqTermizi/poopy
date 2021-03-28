from django.utils import timezone
from rest_framework.generics import ListCreateAPIView

from .serializers import PoopSerializer
from .models import Poop


class ListCreatePoopView(ListCreateAPIView):
    serializer_class = PoopSerializer
    queryset = Poop.objects.all()
