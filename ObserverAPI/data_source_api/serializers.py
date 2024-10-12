from rest_framework import serializers

class DataSourceSerializer(serializers.Serializer):
    """serializes data source"""

    sourceName = serializers.CharField(max_length=30)