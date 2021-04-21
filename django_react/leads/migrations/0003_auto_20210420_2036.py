# Generated by Django 3.1.7 on 2021-04-21 00:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0002_auto_20210416_2134'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='research_goals',
        ),
        migrations.AddField(
            model_name='profile',
            name='day',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='goalOne',
            field=models.TextField(null=True, verbose_name='Please List One of Your Research Goals?'),
        ),
        migrations.AddField(
            model_name='profile',
            name='goalThree',
            field=models.TextField(null=True, verbose_name='Please List One of Your Research Goals?'),
        ),
        migrations.AddField(
            model_name='profile',
            name='goalThreeDesc',
            field=models.TextField(null=True, verbose_name='Describe your first research goal'),
        ),
        migrations.AddField(
            model_name='profile',
            name='goalTwo',
            field=models.TextField(null=True, verbose_name='Please List One of Your Research Goals?'),
        ),
        migrations.AddField(
            model_name='profile',
            name='goalTwoDesc',
            field=models.TextField(null=True, verbose_name='Describe your first research goal'),
        ),
        migrations.AddField(
            model_name='profile',
            name='skillFive',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='skillFour',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='skillOne',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='skillThree',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='skillTwo',
            field=models.CharField(max_length=30, null=True),
        ),
    ]