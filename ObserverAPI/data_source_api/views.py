from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response

from data_source_api.serializers import DataSourceSerializer
# Create your views here.


class DataSourceViewSet(viewsets.ViewSet):
    """manages data sources"""
    serializer_class = DataSourceSerializer

    def list(self, request):
        return Response(['not implemented!'])
    
    def create(self, request):
        ser = self.serializer_class(data=request.data)
        if ser.is_valid():
            name = ser.validated_data.get('sourceName')
            return Response({'sourceName': name})
        else:
            return Response(
                ser.errors,
                status = status.HTTP_400_BAD_REQUEST
            )
    
    def retrieve(self, request, pk=None):
        return Response({'message': 'not implemented!'})


    def update(self, request, pk=None):
        return Response({'message': 'not implemented!'})

    def partial_update(self, request, pk=None):
        return Response({'message': 'not implemented!'})
