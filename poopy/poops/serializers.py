from rest_framework import serializers

from .models import Poop


class PoopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poop
        fields = "__all__"