from django.db import models

# Create your models here.

class Order(models.Model):
    lastName = models.CharField(max_length=225)
    orderItems = models.JSONField(null=True)
    subtotal = models.IntegerField(null=True)

    # class Meta:
    #     verbose

    def __str__(self):
        return self.lastName
