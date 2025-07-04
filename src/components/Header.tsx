import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b-4 border-black dark:border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-gray-900 bg-yellow-400 border-2 sm:border-4 border-black dark:border-gray-100 px-2 sm:px-4 py-1 sm:py-2 shadow-[2px_2px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#f3f4f6] sm:dark:shadow-[4px_4px_0px_0px_#f3f4f6] transform -rotate-1">
              UXBOOST
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <button onClick={() => scrollTo('how-it-works')} className="text-black dark:text-gray-100 font-bold text-sm lg:text-base hover:bg-blue-400 hover:border-2 hover:border-black dark:hover:border-gray-100 px-2 lg:px-3 py-2 transition-all duration-300 transform hover:-rotate-1">
              HOW IT WORKS
            </button>
            <button onClick={() => scrollTo('pricing')} className="text-black dark:text-gray-100 font-bold text-sm lg:text-base hover:bg-purple-400 hover:border-2 hover:border-black dark:hover:border-gray-100 px-2 lg:px-3 py-2 transition-all duration-300 transform hover:rotate-1">
              PRICING
            </button>
            <button onClick={() => scrollTo('faq')} className="text-black dark:text-gray-100 font-bold text-sm lg:text-base hover:bg-green-400 hover:border-2 hover:border-black dark:hover:border-gray-100 px-2 lg:px-3 py-2 transition-all duration-300 transform hover:rotate-1">
              FAQ
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 lg:p-3 bg-gray-200 dark:bg-gray-700 border-2 lg:border-4 border-black dark:border-gray-100 text-black dark:text-gray-100 shadow-[2px_2px_0px_0px_#000] lg:shadow-[4px_4px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#f3f4f6] lg:dark:shadow-[4px_4px_0px_0px_#f3f4f6] hover:shadow-[4px_4px_0px_0px_#000] lg:hover:shadow-[6px_6px_0px_0px_#000] dark:hover:shadow-[4px_4px_0px_0px_#f3f4f6] lg:dark:hover:shadow-[6px_6px_0px_0px_#f3f4f6] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1"
            >
              {theme === 'light' ? <Moon className="h-4 w-4 lg:h-5 lg:w-5" /> : <Sun className="h-4 w-4 lg:h-5 lg:w-5" />}
            </button>
            <button 
              onClick={() => scrollTo('get-started')}
              className="bg-red-400 border-2 lg:border-4 border-black dark:border-gray-100 text-black dark:text-gray-900 px-3 lg:px-6 py-2 lg:py-3 font-bold text-sm lg:text-base shadow-[3px_3px_0px_0px_#000] lg:shadow-[6px_6px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#f3f4f6] lg:dark:shadow-[6px_6px_0px_0px_#f3f4f6] hover:shadow-[5px_5px_0px_0px_#000] lg:hover:shadow-[8px_8px_0px_0px_#000] dark:hover:shadow-[5px_5px_0px_0px_#f3f4f6] lg:dark:hover:shadow-[8px_8px_0px_0px_#f3f4f6] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1"
            >
              GET AUDIT
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200 dark:bg-gray-700 border-2 border-black dark:border-gray-100 text-black dark:text-gray-100"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button
              className="p-2 bg-yellow-400 border-2 border-black dark:border-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5 text-black" /> : <Menu className="h-5 w-5 text-black" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t-4 border-black dark:border-gray-100 bg-yellow-300 dark:bg-gray-800">
            <button onClick={() => scrollTo('how-it-works')} className="block w-full text-left text-black dark:text-gray-100 font-bold hover:bg-blue-400 px-4 py-2 border-2 border-black dark:border-gray-100 text-sm">
              HOW IT WORKS
            </button>
            <button onClick={() => scrollTo('pricing')} className="block w-full text-left text-black dark:text-gray-100 font-bold hover:bg-purple-400 px-4 py-2 border-2 border-black dark:border-gray-100 text-sm">
              PRICING
            </button>
            <button onClick={() => scrollTo('faq')} className="block w-full text-left text-black dark:text-gray-100 font-bold hover:bg-green-400 px-4 py-2 border-2 border-black dark:border-gray-100 text-sm">
              FAQ
            </button>
            <button 
              onClick={() => scrollTo('get-started')}
              className="block w-full bg-red-400 border-4 border-black dark:border-gray-100 text-black font-bold px-4 py-3 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] text-sm"
            >
              GET MY UX AUDIT
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;