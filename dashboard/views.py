from django.shortcuts import render
from .models import Insight
# Create your views here.
def dashboard(request):
    all_Insights = Insight.objects.all()
    return render(request,'dashboard.html',{"all_Insights":all_Insights})