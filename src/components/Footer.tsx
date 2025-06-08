import React from 'react';
import { Instagram, Mail, MapPin, Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/header/logo_drk.png" 
                alt="Foxy&OxY Logo" 
                title='Foxy&OxY Logo'
                className="h-10 w-auto filter"
              />
              {/* <span className="text-2xl font-bold">Foxy&OxY</span> */}
            </div>
            <p className="text-gray-400 leading-relaxed">
              Уличная одежда с духом кицуне. Ловкость, огонь и хитрость 
              в каждом элементе дизайна.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-(--color-fox-orange)" />
                <span className="text-gray-300">hello@foxyoxy.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-(--color-fox-orange)" />
                <span className="text-gray-300">@foxy_oxy_brand</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-(--color-fox-orange)" />
                <span className="text-gray-300">Москва, Россия</span>
              </div>
            </div>
          </div>
          
          {/* Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Информация</h3>
            <div className="space-y-3">
              <p className="text-gray-400">
                <span className="text-(--color-fox-orange) font-semibold">Drop #001:</span> Kitsune Collection
              </p>
              <p className="text-gray-400">
                <span className="text-(--color-fox-orange) font-semibold">Материал:</span> 100% хлопок, 180г/м²
              </p>
              <p className="text-gray-400">
                <span className="text-(--color-fox-orange) font-semibold">Производство:</span> Россия
              </p>
            </div>
          </div>

          {/* Charity */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <Heart className="h-5 w-5 text-green-400 fill-current" />
              <span>Благотворительность</span>
            </h3>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-green-400 font-semibold">10% от продаж</span> направляется 
                на помощь диким животным
              </p>
              <a 
                href="https://sirin-fond.ru/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors group"
              >
                <span className="text-sm font-semibold">Фонд "Сирин"</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-gray-500 text-xs italic">
                "Спасите диких животных, пострадавших от рук человека!"
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
            {'\u00A9'} {new Date().getFullYear()} Foxy&OxY. Все права защищены. Лисий дух
            </p>
          <p className="text-gray-500 text-sm mt-2">
            Покупая наши товары, вы помогаете диким животным
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;