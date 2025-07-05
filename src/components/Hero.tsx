import React from 'react';
import { ArrowRight, TrendingUp, Sparkles, Zap, Star, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToGetStarted = () => {
    document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Launch Day Banner */}
      <div className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-red-500 border-b-4 border-black dark:border-gray-100 py-2 px-4 animate-pulse">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 text-white font-black text-sm sm:text-base">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce" />
            <span>🚀 LAUNCH DAY SPECIAL: 50% OFF ALL PLANS - LIMITED TIME!</span>
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Creative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 sm:opacity-20">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 bg-blue-400 border-4 border-black dark:border-gray-100 transform rotate-45 animate-float"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-10 sm:left-20 w-12 sm:w-24 h-12 sm:h-24 bg-pink-400 border-4 border-black dark:border-gray-100 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-10 sm:w-20 h-10 sm:h-20 bg-green-400 border-4 border-black dark:border-gray-100 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-8 sm:w-16 h-8 sm:h-16 bg-yellow-400 border-4 border-black dark:border-gray-100 transform rotate-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative pt-12 sm:pt-16">
        {/* Hero Content */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 bg-yellow-400 border-4 border-black dark:border-gray-100 px-4 sm:px-6 py-2 sm:py-3 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
              <span className="font-black text-black text-sm sm:text-base">UX AUDITS THAT CONVERT</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black dark:text-gray-100 mb-6 sm:mb-8 leading-tight px-2">
            Turn Your{' '}
            <span className="bg-red-400 border-4 border-black dark:border-gray-100 px-3 sm:px-4 py-1 sm:py-2 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6] inline-block transform rotate-2 hover:rotate-0 transition-transform duration-300">
              CONVERSION KILLERS
            </span>
            <br />
            Into{' '}
            <span className="bg-green-400 border-4 border-black dark:border-gray-100 px-3 sm:px-4 py-1 sm:py-2 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6] inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              REVENUE BOOSTERS
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-gray-200 mb-8 sm:mb-10 max-w-4xl mx-auto px-4">
            Get personalized UX audits and conversion strategies that turn your visitors into customers. 
            Built for founders who need results, not reports.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-12 sm:mb-16 px-4">
            <button 
              onClick={scrollToGetStarted}
              className="w-full sm:w-auto bg-blue-400 border-4 border-black dark:border-gray-100 text-black px-8 sm:px-10 py-4 sm:py-5 font-black text-lg sm:text-xl lg:text-2xl shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#f3f4f6] hover:shadow-[12px_12px_0px_0px_#000] dark:hover:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-300 transform hover:-translate-x-2 hover:-translate-y-2 flex items-center justify-center space-x-3 group"
            >
              <span>GET MY UX AUDIT</span>
              <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-green-600" />
              <div className="text-left">
                <div className="font-black text-black dark:text-gray-200 text-base sm:text-lg">
                  <span className="line-through text-gray-500">Starting at $49</span> 
                  <span className="text-red-600 ml-2">NOW $24.50!</span>
                </div>
                <div className="text-sm font-bold text-gray-600 dark:text-gray-400">48hr delivery guaranteed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Creative Process Steps with Spatial Design */}
        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="relative group">
              <div className="bg-white dark:bg-gray-800 border-4 border-black dark:border-gray-100 p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#f3f4f6] group-hover:shadow-[12px_12px_0px_0px_#000] dark:group-hover:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-300 transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="bg-blue-400 border-4 border-black dark:border-gray-100 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <div className="text-2xl sm:text-3xl font-black text-black">1</div>
                </div>
                <h3 className="font-black text-black dark:text-gray-100 mb-3 text-lg sm:text-xl text-center">SUBMIT YOUR SITE</h3>
                <p className="text-black dark:text-gray-200 font-bold text-sm sm:text-base text-center">Share your product URL and conversion goals in 2 minutes</p>
              </div>
              
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-purple-600 animate-pulse" />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative group lg:mt-8">
              <div className="bg-white dark:bg-gray-800 border-4 border-black dark:border-gray-100 p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#f3f4f6] group-hover:shadow-[12px_12px_0px_0px_#000] dark:group-hover:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-300 transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="bg-purple-400 border-4 border-black dark:border-gray-100 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <div className="text-2xl sm:text-3xl font-black text-black">2</div>
                </div>
                <h3 className="font-black text-black dark:text-gray-100 mb-3 text-lg sm:text-xl text-center">GET EXPERT AUDIT</h3>
                <p className="text-black dark:text-gray-200 font-bold text-sm sm:text-base text-center">Detailed UX analysis with actionable fixes within 48 hours</p>
              </div>
              
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                <ArrowRight className="h-8 w-8 text-green-600 animate-pulse" />
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative group">
              <div className="bg-white dark:bg-gray-800 border-4 border-black dark:border-gray-100 p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#f3f4f6] group-hover:shadow-[12px_12px_0px_0px_#000] dark:group-hover:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-300 transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="bg-green-400 border-4 border-black dark:border-gray-100 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <div className="text-2xl sm:text-3xl font-black text-black">3</div>
                </div>
                <h3 className="font-black text-black dark:text-gray-100 mb-3 text-lg sm:text-xl text-center">BOOST CONVERSIONS</h3>
                <p className="text-black dark:text-gray-200 font-bold text-sm sm:text-base text-center">Implement changes and watch your revenue grow</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-yellow-400 border-4 border-black dark:border-gray-100 p-6 sm:p-8 shadow-[12px_12px_0px_0px_#000] dark:shadow-[12px_12px_0px_0px_#f3f4f6] transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 border-2 border-black rounded-full flex items-center justify-center font-black text-black text-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-black text-black" />
                    ))}
                  </div>
                  <p className="font-black text-black text-sm sm:text-base">Trusted by 50+ founders</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                <span className="font-black text-black text-sm sm:text-base">Average 40% conversion boost</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;