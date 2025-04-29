# serializers.py
from rest_framework import serializers
from trek.models import TrekPackage

class TrekPackageListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrekPackage
        fields = [
            'id',
            'name',
            'description',
            'price_per_person',
            'duration_days',
            'difficulty',
            'image',
            'available_from',
            'available_to',
            'max_people'
        ]
        read_only_fields = ['id']
        extra_kwargs = {  # Fixed typo: was 'extra_krawgs'
            'image': {'required': False},
            'description': {'trim_whitespace': False}
        }

class TrekPackageDetailSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = TrekPackage
        fields = '__all__'

    def get_image_url(self, obj):
        if obj.image:
            return self.context['request'].build_absolute_uri(obj.image.url)
        return None

class TrekPackageCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrekPackage
        fields = '__all__'
        extra_kwargs = {
            'image': {'required': False},
            'price_per_person': {'min_value': 0}  # Fixed typo: was 'price_per_persin'
        }