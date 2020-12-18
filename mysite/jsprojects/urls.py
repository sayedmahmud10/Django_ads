from django.urls import path, reverse_lazy
from . import views
from django.views.generic import TemplateView

app_name='jsprojects'
urlpatterns = [

    path('', views.JsprojectsListView),
    path('quiz', views.JsprojectsListView1),
    path('recipe', views.JsprojectsListView2),
    path('note', views.JsprojectsListView3),
    path('movie', views.JsprojectsListView4),


]