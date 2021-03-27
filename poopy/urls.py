from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path, include

urlpatterns = [
    path("", TemplateView.as_view(template_name="index.html")),
    path("poops/", include("poopy.poops.urls")),
    path("feedings/", include("poopy.feedings.urls")),
    path("admin/", admin.site.urls),
]
