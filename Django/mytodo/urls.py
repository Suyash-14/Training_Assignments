from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.todo_form, name='activity_insert'), # get and post req. for insert operation
    path('update?P<str:title>/', views.todo_update,name='activity_update'), # get and post req. for update operation
    path('delete?P<str:title>/',views.todo_delete,name='activity_delete'),
    path('todo_list/',views.todo_list,name='todo_list')
       
]