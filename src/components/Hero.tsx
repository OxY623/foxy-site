import React from 'react';

interface HeroProps {
  darkMode?: boolean;
}

const Hero: React.FC<HeroProps> = ({darkMode}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? ' from-gray-900 via-gray-800 to-gray-900':'from-white via-gray-50 to-orange-50'}`}></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-(--color-fox-orange) rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-(--color-fox-red) rounded-full animate-pulse- delay-1000"></div>
        <div className="absolute top-1/3 right-8 w-1 h-1 bg-(--color-fox-orange) rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-(--color-fox-red) rounded-full animate-pulse delay-3000"></div>
        {/* Additional decorative elements */}
        <div className="absolute top-10 right-24 w-2 h-2 bg-(--color-fox-orange) rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-16 left-20 w-3 h-3 bg-(--color-fox-red) rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-1/4 left-1/2 w-1.5 h-1.5 bg-(--color-fox-orange) rounded-full animate-pulse delay-2500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-(--color-fox-red) rounded-full animate-pulse delay-3500"></div>
        <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-(--color-fox-orange) rounded-full animate-pulse delay-1800"></div>
        <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-(--color-fox-orange) rounded-full animate-pulse delay-2200"></div>
      </div>
      
      {/* Animated fox logo */}
      <div className={`relative z-10 text-center ${'float-animation'}`}>
        <div className="mb-8 animate-float sm:mb-4 lg:mb-6">
          <img 
            src={darkMode ? '/PNG/3@5x-8.png':'/PNG/2@5x-8.png'} 
            alt="Foxy&OxY Kitsune Fox" 
            className="h-120 w-auto mx-auto filter drop-shadow-2xl object-cover"
          />
        </div>
        
        {/* <h1 className={`text-6xl md:text-8xl font-bold ${!darkMode ? 'text-gray-900' : 'text-white'} mb-4 tracking-tight`}>
          Foxy<span className="text-(--color-fox-orange)">&</span>OxY
        </h1> */}
        
        <p className={`text-xl md:text-2xl ${!darkMode ? 'text-gray-600' : 'text-gray-300'} mb-8 font-light`}>
          狐の精神 • Fox Spirit
        </p>
        
        <div className="space-y-4">
          <div className={`inline-block px-6 py-3 ${!darkMode ? 'bg-(--color-fox-orange)/10' : 'bg-(--color-fox-orange)/20'} rounded-full`}>
            <span className="text-(--color-fox-orange) font-semibold text-lg">
              Limited Drop #001
            </span>
          </div>
          
          <div className={`${!darkMode ? 'text-gray-600' : 'text-gray-400'} text-lg`}>
            Кицуне Collection • 白狐
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;