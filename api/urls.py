from django.urls import path
from . import views

urlpatterns = [
    path("api/",views.api_view, name="api-views")
]
