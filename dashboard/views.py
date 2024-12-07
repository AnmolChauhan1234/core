from django.http import JsonResponse
from django.shortcuts import render
from .models import Insight
from django.core.serializers import serialize
import json
# Create your views here.
from django.shortcuts import render
from .models import Insight

def dashboard(request):
    # Get distinct filter values
    end_years = Insight.objects.values_list('end_year', flat=True).distinct()
    topics = Insight.objects.values_list('topic', flat=True).distinct()
    sectors = Insight.objects.values_list('sector', flat=True).distinct()
    regions = Insight.objects.values_list('region', flat=True).distinct()
    pestles = Insight.objects.values_list('pestle', flat=True).distinct()
    sources = Insight.objects.values_list('source', flat=True).distinct()
    countries = Insight.objects.values_list('country', flat=True).distinct()

    # Pass them to the template
    context = {
        'end_years': end_years,
        'topics': topics,
        'sectors': sectors,
        'regions': regions,
        'pestles': pestles,
        'sources': sources,
        'countries': countries,
    }
    # print(context)
    return render(request, 'dashboard.html', context)

from django.shortcuts import render
from .models import Insight
import json

def filter_dashboard(request):
    # Fetch filter parameters from the request
    end_year = request.GET.get('end_year')
    topics = request.GET.getlist('topics')
    sector = request.GET.get('sector')
    region = request.GET.get('region')
    pestle = request.GET.get('pestle')
    source = request.GET.get('source')
    country = request.GET.get('country')

    # Query the database
    data = Insight.objects.all()
    if end_year:
        data = data.filter(end_year=end_year)
    if topics:
        data = data.filter(topic__in=topics)
    if sector:
        data = data.filter(sector=sector)
    if region:
        data = data.filter(region=region)
    if pestle:
        data = data.filter(pestle=pestle)
    if source:
        data = data.filter(source=source)
    if country:
        data = data.filter(country=country)

    # Serialize the data for charts
    serialized_data = list(data.values('topic', 'intensity', 'relevance', 'likelihood', 'country', 'region'))
    
    # Return the data as a JSON response for easier access on the frontend
    return JsonResponse({'data': serialized_data})







# Filters in the dashboard
# ● Add end year filter in the dashboard
# ● Add topics filters in the dashboard
# ● Add sector filter in the dashboard
# ● Add region filter in the dashboard
# ● Add PEST filter in the dashboard
# ● Add Source filter in the dashboard
# ● Add SWOT filter in the dashboard
# ● Country
# ● City
# ● Any other control or filters that you can add from the data, best of your knowledge 
