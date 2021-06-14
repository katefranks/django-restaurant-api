from django.db import models

# Create your models here.

class Menu(models.Model):
    category = models.CharField(max_length=225)
    price = models.IntegerField()
    name = models.CharField(max_length=225)
    description = models.CharField(max_length=225)

    def __str__(self):
        return self.name
