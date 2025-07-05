import React, { useState, useEffect } from 'react';
import { Users, Rocket, Award, Heart, TrendingUp, Clock, Shield } from 'lucide-react';

const WhyMe = () => {
  const [startupCount, setStartupCount] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState(0);

  useEffect(() => {
    // Counter animations
    const startupTimer = setInterval(() => {
      setStartupCount(prev => prev >= 50 ? 50 : prev + 2);
    }, 100);

    const conversionTimer = setInterval(() => {
      setConversionRate(prev => prev >= 40 ? 40 : prev + 1);
    }, 80);

    const deliveryTimer = setInterval(() => {
      setDeliveryTime(prev => prev >= 48 ? 48 : prev + 2);
    }, 60);

    return () => {
      clearInterval(startupTimer);
      clearInterval(conversionTimer);
      clearInterval(deliveryTimer);
    };
  }, []);

  const features = [
    {
      icon: Users,
      title: "Founder-First Approach",
      description: "Built by founders, for founders. I understand your constraints, timeline, and what actually matters for growth.",
      color: "bg-blue-400",
      stats: "50+ Founders Helped"
    },
    {
      icon: Rocket,
      title: "Actionable, Not Academic",
      description: "No theoretical fluff. Every recommendation comes with clear implementation steps and expected impact.",
      color: "bg-purple-400",
      stats: "100% Actionable Insights"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Helped startups improve their conversion rates by an average of 40% within 30 days of implementation.",
      color: "bg-pink-400",
      stats: "40% Avg. Conversion Boost"
    },
    {
      icon: Heart,
      title: "Indie Hacker-Friendly",
      description: "Fair pricing, fast delivery, and real talk. No enterprise bloat or unnecessary complexity.",
      color: "bg-green-400",
      stats: "48hr Delivery"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Turn visitors into customers with conversion-focused UX improvements",
      color: "bg-green-400"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Get your audit within 48 hours, not weeks like traditional agencies",
      color: "bg-blue-400"
    },
    {
      icon: Shield,
      title: "Risk-Free",
      description: "100% money-back guarantee if you're not satisfied with the audit",
      color: "bg-purple-400"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400 border-4 border-black transform rotate-12"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-400 border-4 border-black rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-400 border-4 border-black transform -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black dark:text-gray-100 mb-6">
            Why Choose UXBoost?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-gray-200 max-w-3xl mx-auto">
            I'm not just another UX consultant. I'm a founder who's been in your shoes and knows what actually moves the needle.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-50 dark:bg-gray-800 border-4 border-black dark:border-gray-100 p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#f3f4f6] group-hover:shadow-[12px_12px_0px_0px_#000] dark:group-hover:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-300 transform group-hover:-translate-x-2 group-hover:-translate-y-2 h-full flex flex-col">
                
                {/* Icon and Stats */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`${feature.color} border-4 border-black dark:border-gray-100 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] group-hover:shadow-[6px_6px_0px_0px_#000] dark:group-hover:shadow-[6px_6px_0px_0px_#f3f4f6] transition-all duration-300 transform group-hover:-translate-x-1 group-hover:-translate-y-1`}>
                    <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-black font-bold" />
                  </div>
                  <div className="bg-black dark:bg-gray-100 text-white dark:text-black px-3 py-1 font-black text-xs sm:text-sm">
                    {feature.stats}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-black dark:text-gray-100 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg text-black dark:text-gray-200 font-bold">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 border-2 border-black transform rotate-45"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 border-4 border-black dark:border-gray-100 p-8 sm:p-12 shadow-[12px_12px_0px_0px_#000] dark:shadow-[12px_12px_0px_0px_#f3f4f6] mb-16 sm:mb-20">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                {startupCount}+
              </div>
              <div className="text-black font-black text-lg sm:text-xl">STARTUPS HELPED</div>
              <div className="text-black font-bold text-sm mt-1">And growing every day</div>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                {conversionRate}%
              </div>
              <div className="text-black font-black text-lg sm:text-xl">AVG. CONVERSION BOOST</div>
              <div className="text-black font-bold text-sm mt-1">Within 30 days</div>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                {deliveryTime}hr
              </div>
              <div className="text-black font-black text-lg sm:text-xl">DELIVERY TIME</div>
              <div className="text-black font-bold text-sm mt-1">Guaranteed turnaround</div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white dark:bg-gray-800 border-4 border-black dark:border-gray-100 p-6 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6] group-hover:shadow-[8px_8px_0px_0px_#000] dark:group-hover:shadow-[8px_8px_0px_0px_#f3f4f6] transition-all duration-300 transform group-hover:-translate-x-1 group-hover:-translate-y-1 text-center h-full flex flex-col">
                <div className={`${benefit.color} border-4 border-black dark:border-gray-100 w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] transform rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                  <benefit.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-black dark:text-gray-100 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-black dark:text-gray-200 font-bold flex-grow">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;