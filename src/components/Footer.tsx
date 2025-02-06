import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Mavridis</span>
            </div>
            <p className="text-gray-400">{t('footer.description')}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.properties')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">{t('services.engineering')}</li>
              <li className="text-gray-400">{t('services.realEstate')}</li>
              <li className="text-gray-400">{t('services.appraisals')}</li>
              <li className="text-gray-400">{t('services.construction')}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">Komotini, Greece</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+302531027272" className="text-gray-400 hover:text-white">
                  +30 2531027272
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:info@mavridis.gr" className="text-gray-400 hover:text-white">
                  info@mavridis.gr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Mavridis Construction. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;