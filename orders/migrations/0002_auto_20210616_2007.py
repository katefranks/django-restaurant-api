# Generated by Django 3.2.4 on 2021-06-16 20:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='title',
            new_name='lastName',
        ),
        migrations.RemoveField(
            model_name='order',
            name='isComplete',
        ),
    ]
