import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Ruler, Home as HomeIcon, Calculator, FileCheck, Users, Clock, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      icon: Building2,
      title: t('services.engineering'),
      description: 'Professional engineering services for residential and commercial projects.',
      features: ['Architectural Design', 'Structural Engineering', 'MEP Engineering', 'Project Management']
    },
    {
      icon: HomeIcon,
      title: t('services.realEstate'),
      description: 'Comprehensive real estate services for buyers and sellers.',
      features: ['Property Listings', 'Market Analysis', 'Property Management', 'Investment Consulting']
    },
    {
      icon: Calculator,
      title: t('services.appraisals'),
      description: 'Certified property appraisals for all types of real estate.',
      features: ['Residential Appraisals', 'Commercial Appraisals', 'Land Valuation', 'Investment Analysis']
    },
    {
      icon: Ruler,
      title: t('services.construction'),
      description: 'Full-service construction management and execution.',
      features: ['Project Planning', 'Construction Supervision', 'Quality Control', 'Timeline Management']
    }
  ];

  const benefits = [
    { icon: FileCheck, title: 'Certified Expertise', description: 'Licensed professionals with years of experience' },
    { icon: Users, title: 'Client-Focused', description: 'Personalized service tailored to your needs' },
    { icon: Clock, title: 'Timely Delivery', description: 'Projects completed on schedule and within budget' },
    { icon: Shield, title: 'Quality Assured', description: 'Highest standards in construction and service' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-gray-200">Professional Construction & Real Estate Solutions</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="h-2 w-2 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;