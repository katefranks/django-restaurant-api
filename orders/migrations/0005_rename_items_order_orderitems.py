# Generated by Django 3.2.4 on 2021-06-16 21:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_auto_20210616_2141'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='items',
            new_name='orderItems',
        ),
    ]
