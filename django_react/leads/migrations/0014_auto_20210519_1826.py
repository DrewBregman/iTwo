# Generated by Django 3.1.7 on 2021-05-19 22:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0013_merge_20210519_1823'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='dateFounded',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
