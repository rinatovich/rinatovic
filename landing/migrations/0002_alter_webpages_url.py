# Generated by Django 4.0.3 on 2022-05-03 13:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='webpages',
            name='url',
            field=models.CharField(max_length=300),
        ),
    ]
