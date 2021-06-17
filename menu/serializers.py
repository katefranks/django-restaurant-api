from rest_framework import serializers

from .models import Menu
    #meta: means data about data
class MenuSerializer(serializers.ModelSerializer):
    class Meta:
            model = Menu
            #fields = '__all__'
            fields = ('id', 'category', 'price', 'name', 'description')
