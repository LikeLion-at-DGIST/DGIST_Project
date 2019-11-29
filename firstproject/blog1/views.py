from django.shortcuts import render
from .models import Blog

# Create your views here.
def first(request):
    blogs = Blog.objects
    return render(request, 'first.html',{'blogs':blogs})
