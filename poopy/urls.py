from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("poops/", include("poopy.poops.urls")),
    path("feedings/", include("poopy.feedings.urls")),
    path("admin/", admin.site.urls),
]
