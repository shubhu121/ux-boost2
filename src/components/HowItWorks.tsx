import React from 'react';
import { FileText, Search, Target, Phone, ArrowDown, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Quick Intake",
      description: "Fill out a simple form with your product URL, target users, and conversion goals.",
      details: "Takes just 2 minutes. Tell us about your product, current challenges, and what success looks like.",
      color: "bg-blue-400",
      position: "left"
    },
    {
      icon: Search,
      title: "Expert Analysis",
      description: "Our UX experts conduct a comprehensive audit of your product, identifying conversion killers.",
      details: "Deep dive into user flows, design patterns, messaging, and technical UX issues that hurt conversions.",
      color: "bg-purple-400",
      position: "right"
    },
    {
      icon: Target,
      title: "Strategy Delivery",
      description: "Get a detailed report with prioritized recommendations and implementation guides.",
      details: "Actionable insights ranked by impact and effort, with clear next steps for your team.",
      color: "bg-pink-400",
      position: "left"
    },
    {
      icon: Phone,
      title: "Implementation Support",
      description: "Optional 1:1 strategy call to walk through findings and answer questions.",
      details: "30-minute call to discuss implementation, prioritization, and answer any questions you have.",
      color: "bg-green-400",
      position: "right"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 border-4 border-black transform rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 border-4 border-black rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-400 border-4 border-black"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 border-4 border-black dark:border-gray-100 px-6 py-3 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6] mb-6 transform -rotate-1">
            <Zap className="h-5 w-5 text-black" />
            <span className="font-black text-black">SIMPLE PROCESS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black dark:text-gray-100 mb-6">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
            Simple, founder-friendly process. No meetings, no fluff—just actionable insights that drive results.
          </p>
        </div>

        {/* Creative Step Layout */}
        <div className="space-y-16 sm:space-y-24">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                step.position === 'right' ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${step.position === 'right' ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`${step.color} border-4 border-black dark:border-gray-100 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6] transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                      <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-black font-bold" />
                    </div>
                    <div className="bg-black dark:bg-gray-100 text-white dark:text-black px-4 py-2 font-black text-lg sm:text-xl">
                      STEP {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black dark:text-gray-100 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-black dark:text-gray-200 font-bold mb-4">
                    {step.description}
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">
                    {step.details}
                  </p>
                </div>

                {/* Visual Element */}
                <div className={`${step.position === 'right' ? 'lg:col-start-1' : ''}`}>
                  <div className="relative group">
                    <div className={`${step.color} border-4 border-black dark:border-gray-100 p-8 sm:p-12 shadow-[12px_12px_0px_0px_#000] dark:shadow-[12px_12px_0px_0px_#f3f4f6] group-hover:shadow-[16px_16px_0px_0px_#000] dark:group-hover:shadow-[16px_16px_0px_0px_#f3f4f6] transition-all duration-300 transform group-hover:-translate-x-2 group-hover:-translate-y-2`}>
                      <div className="text-center">
                        <step.icon className="h-16 w-16 sm:h-20 sm:w-20 text-black mx-auto mb-4" />
                        <div className="text-4xl sm:text-6xl font-black text-black">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 border-2 border-black transform rotate-45"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 border-2 border-black rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-12 sm:mt-16">
                  <div className="bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-100 p-4 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6] transform rotate-45">
                    <ArrowDown className="h-6 w-6 text-black dark:text-gray-100 transform -rotate-45" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Turnaround Time Highlight */}
        <div className="mt-20 sm:mt-24">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 border-4 border-black dark:border-gray-100 p-8 sm:p-12 text-center shadow-[12px_12px_0px_0px_#000] dark:shadow-[12px_12px_0px_0px_#f3f4f6] transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Zap className="h-8 w-8 sm:h-12 sm:w-12 text-black animate-pulse" />
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black">
                48-HOUR DELIVERY
              </h3>
              <Zap className="h-8 w-8 sm:h-12 sm:w-12 text-black animate-pulse" />
            </div>
            <p className="text-lg sm:text-xl font-bold text-black max-w-3xl mx-auto">
              Unlike agencies that take weeks, we deliver fast. Submit today, get your audit by tomorrow.
              Perfect for founders who need to move quickly and see results.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="bg-white border-2 border-black px-4 py-2 font-black text-black text-sm">
                ⚡ FAST DELIVERY
              </div>
              <div className="bg-white border-2 border-black px-4 py-2 font-black text-black text-sm">
                🎯 ACTIONABLE INSIGHTS
              </div>
              <div className="bg-white border-2 border-black px-4 py-2 font-black text-black text-sm">
                📈 PROVEN RESULTS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;