import React from 'react';
import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  const scrollToGetStarted = () => {
    document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 sm:opacity-30">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-blue-400 border-2 sm:border-4 border-black dark:border-gray-100 transform rotate-45"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-10 sm:w-20 h-10 sm:h-20 bg-pink-400 border-2 sm:border-4 border-black dark:border-gray-100"></div>
        <div className="absolute top-1/2 left-1/4 w-8 sm:w-16 h-8 sm:h-16 bg-green-400 border-2 sm:border-4 border-black dark:border-gray-100 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative pt-8 sm:pt-12">
        {/* Info Banner */}
        <div className="mb-8 sm:mb-12">
          <CountdownTimer />
        </div>

        <div className="text-center mb-8 sm:mb-16">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 bg-yellow-400 border-2 sm:border-4 border-black dark:border-gray-100 px-3 sm:px-6 py-2 sm:py-3 shadow-[3px_3px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#f3f4f6] sm:dark:shadow-[6px_6px_0px_0px_#f3f4f6] transform -rotate-1">
              <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-black" />
              <span className="font-black text-black text-xs sm:text-base">UX AUDITS THAT CONVERT</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black dark:text-gray-100 mb-6 sm:mb-8 leading-tight px-2">
            Turn Your{' '}
            <span className="bg-red-400 border-2 sm:border-4 border-black dark:border-gray-100 px-2 sm:px-4 py-1 sm:py-2 shadow-[3px_3px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#f3f4f6] sm:dark:shadow-[6px_6px_0px_0px_#f3f4f6] inline-block transform rotate-1">
              CONVERSION KILLERS
            </span>
            <br />
            Into{' '}
            <span className="bg-green-400 border-2 sm:border-4 border-black dark:border-gray-100 px-2 sm:px-4 py-1 sm:py-2 shadow-[3px_3px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#f3f4f6] sm:dark:shadow-[6px_6px_0px_0px_#f3f4f6] inline-block transform -rotate-1">
              REVENUE BOOSTERS
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl font-bold text-black dark:text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Get personalized UX audits and conversion strategies that turn your visitors into customers. 
            Built for founders who need results, not reports.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
            <button 
              onClick={scrollToGetStarted}
              className="w-full sm:w-auto bg-blue-400 border-2 sm:border-4 border-black dark:border-gray-100 text-black px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg lg:text-xl shadow-[4px_4px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] sm:dark:shadow-[8px_8px_0px_0px_#f3f4f6] hover:shadow-[6px_6px_0px_0px_#000] sm:hover:shadow-[12px_12px_0px_0px_#000] dark:hover:shadow-[6px_6px_0px_0px_#f3f4f6] sm:dark:hover:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 flex items-center justify-center space-x-2 sm:space-x-3 group"
            >
              <span>GET MY UX AUDIT</span>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              <span className="font-bold text-black dark:text-gray-200 text-sm sm:text-base">
                Starting at $49 • 48hr delivery
              </span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="bg-blue-400 border-2 sm:border-4 border-black dark:border-gray-100 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-[3px_3px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#f3f4f6] sm:dark:shadow-[6px_6px_0px_0px_#f3f4f6] group-hover:shadow-[5px_5px_0px_0px_#000] sm:group-hover:shadow-[8px_8px_0px_0px_#000] dark:group-hover:shadow-[5px_5px_0px_0px_#f3f4f6] sm:dark:group-hover:shadow-[8px_8px_0px_0px_#f3f4f6] transition-all duration-300 transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl font-black text-black">1</div>
            </div>
            <h3 className="font-black text-black dark:text-gray-100 mb-2 text-base sm:text-lg">SUBMIT YOUR SITE</h3>
            <p className="text-black dark:text-gray-200 font-bold text-sm sm:text-base">Share your product URL and conversion goals</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-purple-400 border-2 sm:border-4 border-black dark:border-gray-100 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-[3px_3px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#f3f4f6] sm:dark:shadow-[6px_6px_0px_0px_#f3f4f6] group-hover:shadow-[5px_5px_0px_0px_#000] sm:group-hover:shadow-[8px_8px_0px_0px_#000] dark:group-hover:shadow-[5px_5px_0px_0px_#f3f4f6] sm:dark:group-hover:shadow-[8px_8px_0px_0px_#f3f4f6] transition-all duration-300 transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl font-black text-black">2</div>
            </div>
            <h3 className="font-black text-black dark:text-gray-100 mb-2 text-base sm:text-lg">GET EXPERT AUDIT</h3>
            <p className="text-black dark:text-gray-200 font-bold text-sm sm:text-base">Detailed UX analysis with actionable fixes</p>
          </div>
          
          <div className="text-center group sm:col-span-2 lg:col-span-1">
            <div className="bg-green-400 border-2 sm:border-4 border-black dark:border-gray-100 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-[3px_3px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#f3f4f6] sm:dark:shadow-[6px_6px_0px_0px_#f3f4f6] group-hover:shadow-[5px_5px_0px_0px_#000] sm:group-hover:shadow-[8px_8px_0px_0px_#000] dark:group-hover:shadow-[5px_5px_0px_0px_#f3f4f6] sm:dark:group-hover:shadow-[8px_8px_0px_0px_#f3f4f6] transition-all duration-300 transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl font-black text-black">3</div>
            </div>
            <h3 className="font-black text-black dark:text-gray-100 mb-2 text-base sm:text-lg">BOOST CONVERSIONS</h3>
            <p className="text-black dark:text-gray-200 font-bold text-sm sm:text-base">Implement changes and watch growth happen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;