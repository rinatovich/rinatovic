from django.http import HttpResponse
from django.shortcuts import render

from .models import *

# Create your views here.
menu = [
]


def index(request):
    skills = Skill.objects.all()
    pages = Webpages.objects.all()
    stars = range(5)
    context = {'menu': menu, 'skills': skills, 'stars': stars, 'pages': pages}
    return render(request, 'landing/index.html', context)


def pageNotFound(request, exception):
    return HttpResponse("there is no page here -___-")
