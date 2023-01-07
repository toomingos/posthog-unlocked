# Generated by Django 3.2.5 on 2021-12-07 21:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0188_person_distinct_id_version"),
    ]

    operations = [
        migrations.AlterField(
            model_name="annotation",
            name="scope",
            field=models.CharField(
                choices=[("dashboard_item", "insight"), ("project", "project"), ("organization", "organization")],
                default="dashboard_item",
                max_length=24,
            ),
        ),
    ]