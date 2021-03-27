from django.utils import timezone
from rest_framework.generics import ListCreateAPIView

from .serializers import PoopSerializer
from .models import Poop


class ListCreatePoopView(ListCreateAPIView):
    queryset = Poop.objects.filter(created_at__gte=timezone.now().date())
    serializer_class = PoopSerializer
