# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-20 23:39
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('loginreg', '0001_initial'),
        ('postcomment', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='comments',
            name='user_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='loginreg.Users'),
            preserve_default=False,
        ),
    ]
