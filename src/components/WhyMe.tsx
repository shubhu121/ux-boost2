import React, { useState, useEffect } from 'react';
import { Users, Rocket, Award, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhyMe = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3, delay: 400 });

  const [startupCount, setStartupCount] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState(0);

  useEffect(() => {
    if (!statsVisible) return;

    // Counter animation for startups (0 to 5)
    const startupTimer = setInterval(() => {
      setStartupCount(prev => {
        if (prev >= 5) {
          clearInterval(startupTimer);
          return 5;
        }
        return prev + 1;
      });
    }, 200);

    // Counter animation for conversion rate (0 to 40)
    const conversionTimer = setInterval(() => {
      setConversionRate(prev => {
        if (prev >= 40) {
          clearInterval(conversionTimer);
          return 40;
        }
        return prev + 2;
      });
    }, 50);

    // Counter animation for delivery time (0 to 48)
    const deliveryTimer = setInterval(() => {
      setDeliveryTime(prev => {
        if (prev >= 48) {
          clearInterval(deliveryTimer);
          return 48;
        }
        return prev + 2;
      });
    }, 40);

    return () => {
      clearInterval(startupTimer);
      clearInterval(conversionTimer);
      clearInterval(deliveryTimer);
    };
  }, [statsVisible]);

  const features = [
    {
      icon: Users,
      title: "Founder-First Approach",
      description: "Built by founders, for founders. I understand your constraints, timeline, and what actually matters for growth.",
      color: "bg-blue-400"
    },
    {
      icon: Rocket,
      title: "Actionable, Not Academic",
      description: "No theoretical fluff. Every recommendation comes with clear implementation steps and expected impact.",
      color: "bg-purple-400"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Helped startups improve their conversion rates by an average of 40% within 30 days of implementation.",
      color: "bg-pink-400"
    },
    {
      icon: Heart,
      title: "Indie Hacker-Friendly",
      description: "Fair pricing, fast delivery, and real talk. No enterprise bloat or unnecessary complexity.",
      color: "bg-green-400"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-all duration-1000 ${
        sectionVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className={`text-4xl sm:text-5xl font-black text-black dark:text-gray-100 mb-6 transition-all duration-800 delay-200 ${
            titleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            Why Choose UXBoost?
          </h2>
          <p className={`text-xl font-bold text-black dark:text-gray-200 max-w-2xl mx-auto transition-all duration-800 delay-400 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            I'm not just another UX consultant. I'm a founder who's been in your shoes and knows what actually moves the needle.
          </p>
        </div>

        <div 
          ref={featuresRef}
          className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 dark:bg-gray-800 border-4 border-black dark:border-gray-100 p-6 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#f3f4f6] hover:shadow-[12px_12px_0px_0px_#000] dark:hover:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-500 transform hover:-translate-x-1 hover:-translate-y-1 hover:scale-105 group ${
                featuresVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`${feature.color} border-4 border-black dark:border-gray-100 w-16 h-16 flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] group-hover:shadow-[6px_6px_0px_0px_#000] dark:group-hover:shadow-[6px_6px_0px_0px_#f3f4f6] transition-all duration-300 transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110`}>
                <feature.icon className="h-8 w-8 text-black font-bold" />
              </div>
              <h3 className="text-2xl font-black text-black dark:text-gray-100 mb-3">{feature.title}</h3>
              <p className="text-black dark:text-gray-200 font-bold">{feature.description}</p>
            </div>
          ))}
        </div>

        <div 
          ref={statsRef}
          className={`bg-yellow-400 border-4 border-black dark:border-gray-100 p-8 shadow-[12px_12px_0px_0px_#000] dark:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-1000 transform ${
            statsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className={`group transition-all duration-800 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="text-4xl font-black text-black mb-2 group-hover:scale-125 transition-transform duration-500">
                {startupCount}+
              </div>
              <div className="text-black font-black">STARTUPS HELPED</div>
            </div>
            <div className={`group transition-all duration-800 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="text-4xl font-black text-black mb-2 group-hover:scale-125 transition-transform duration-500">
                {conversionRate}%
              </div>
              <div className="text-black font-black">AVG. CONVERSION BOOST</div>
            </div>
            <div className={`group transition-all duration-800 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="text-4xl font-black text-black mb-2 group-hover:scale-125 transition-transform duration-500">
                {deliveryTime}hr
              </div>
              <div className="text-black font-black">DELIVERY TIME</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;