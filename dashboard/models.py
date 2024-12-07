from django.db import models

class Insight(models.Model):
    end_year = models.CharField(max_length=10, blank=True, null=True)
    intensity = models.IntegerField()
    sector = models.CharField(max_length=255, blank=True, null=True)
    topic = models.CharField(max_length=255, blank=True, null=True)
    insight = models.TextField()
    url = models.URLField(max_length=2000, blank=True, null=True)
    region = models.CharField(max_length=255, blank=True, null=True)
    start_year = models.CharField(max_length=10, blank=True, null=True)
    impact = models.CharField(max_length=10, blank=True, null=True)
    added = models.DateTimeField()
    published = models.DateTimeField(blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    relevance = models.IntegerField()
    pestle = models.CharField(max_length=255, blank=True, null=True)
    source = models.CharField(max_length=255, blank=True, null=True)
    title = models.TextField()
    likelihood = models.IntegerField()

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = "Insight"
        verbose_name_plural = "Insights"
