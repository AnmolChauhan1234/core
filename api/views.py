from django.http import JsonResponse
# Create your views here.

def api_view(request):
    return JsonResponse({"message": "Hello, world!"})
