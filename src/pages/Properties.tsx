import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Euro, Maximize2, BedDouble } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Properties = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [priceRange, setPriceRange] = useState('all');
  const [propertyType, setPropertyType] = useState('all');

  const properties = [
    {
      id: 1,
      title: 'Modern City Apartment',
      type: 'apartment',
      price: 250000,
      location: 'City Center, Komotini',
      area: 120,
      bedrooms: 3,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Luxury Villa with Pool',
      type: 'villa',
      price: 750000,
      location: 'Coastal Area',
      area: 350,
      bedrooms: 5,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Commercial Office Space',
      type: 'commercial',
      price: 450000,
      location: 'Business District',
      area: 200,
      bedrooms: 0,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Cozy Studio Apartment',
      type: 'apartment',
      price: 120000,
      location: 'University Area',
      area: 45,
      bedrooms: 1,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesType = propertyType === 'all' || property.type === propertyType;
    const matchesPrice = priceRange === 'all' ||
      (priceRange === 'low' && property.price <= 200000) ||
      (priceRange === 'medium' && property.price > 200000 && property.price <= 500000) ||
      (priceRange === 'high' && property.price > 500000);
    
    return matchesType && matchesPrice;
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Properties for Sale</h1>
            <p className="text-xl text-gray-200">Find Your Perfect Property</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="apartment">Apartments</option>
            <option value="villa">Villas</option>
            <option value="commercial">Commercial</option>
          </select>

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Prices</option>
            <option value="low">Up to €200,000</option>
            <option value="medium">€200,000 - €500,000</option>
            <option value="high">Above €500,000</option>
          </select>
        </div>

        {/* Properties Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                  €{property.price.toLocaleString()}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{property.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Maximize2 className="h-5 w-5 mr-2" />
                    <span>{property.area} m²</span>
                  </div>
                  {property.bedrooms > 0 && (
                    <div className="flex items-center text-gray-600">
                      <BedDouble className="h-5 w-5 mr-2" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                  )}
                </div>
                <button className="w-full mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;