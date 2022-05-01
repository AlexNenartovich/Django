##from django.conf.urls import url
from django.urls import path
from EmployeeApp import views

urlpatterns = [
    path(r'hello/', views.employeeApi),

    path('hello/<int:id>/', views.employeeApi),
    path('hello/<slug:name>/', views.searchApi)
]