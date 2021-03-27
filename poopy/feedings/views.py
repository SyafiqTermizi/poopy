from django.utils import timezone
from rest_framework.generics import ListCreateAPIView

from .models import Feeding
from .serializers import FeedingSerializer


class ListCreateFeedings(ListCreateAPIView):
    serializer_class = FeedingSerializer
    queryset = Feeding.objects.filter(created_at__gte=timezone.now().date())

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)