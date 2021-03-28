from django.utils import timezone
from rest_framework.generics import ListCreateAPIView

from .models import Feeding
from .serializers import FeedingSerializer


class ListCreateFeedings(ListCreateAPIView):
    serializer_class = FeedingSerializer
    queryset = Feeding.objects.all()