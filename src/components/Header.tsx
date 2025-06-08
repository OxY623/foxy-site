import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900/80 border-gray-700':'bg-white/80 border-gray-200'}  backdrop-blur-md border-b `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              title='Foxy&OxY Logo'
              src={darkMode ? "/header/logo_drk.png" : "/header/logo_lght.png"}
              alt="Foxy&OxY Logo" 
              className="h-10 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>
          
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg  ${darkMode ? 'bg-gray-800 hover:bg-gray-700' :  'hover:bg-gray-200 bg-gray-100'}   transition-colors`}
            aria-label="Переключить тему"
            title={darkMode ? 'Переключиться на светлую тему' : 'Переключиться на темную тему'}>
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};