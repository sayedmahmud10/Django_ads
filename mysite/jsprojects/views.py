from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
# Create your views here.

def JsprojectsListView(request):
    return render(request,'jsprojects/index.html',{})




def JsprojectsListView1(request):
    return render(request,'jsprojects/quiz.html',{})


def JsprojectsListView2(request):
    return render(request,'jsprojects/recipe.html',{})



def JsprojectsListView3(request):
    return render(request,'jsprojects/note.html',{})

def JsprojectsListView4(request):
    return render(request,'jsprojects/movie.html',{})


