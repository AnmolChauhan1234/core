from django.urls import path
from .import views

urlpatterns = [
    path('',views.dashboard,name="dashboard"),
    path('filter_dashboard/',views.filter_dashboard,name="filter_dashboard")
]