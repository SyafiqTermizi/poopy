from rest_framework.generics import ListCreateAPIView

from .serializers import PoopSerializer
from .models import Poop


class ListCreatePoopView(ListCreateAPIView):
    queryset = Poop.objects.all()
    serializer_class = PoopSerializer
