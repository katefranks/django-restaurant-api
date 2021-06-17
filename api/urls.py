from django.urls import path, include

urlpatterns = [
    path('menu/', include('menu.urls', namespace='menu')),
    path('orders/', include('orders.urls', namespace='orders')),
]
