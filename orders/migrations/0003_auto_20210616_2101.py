# Generated by Django 3.2.4 on 2021-06-16 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_auto_20210616_2007'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='orderItems',
            field=models.CharField(max_length=225, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='phoneNumber',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='subTotal',
            field=models.IntegerField(null=True),
        ),
    ]