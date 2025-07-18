import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Pricing = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: plansRef, isVisible: plansVisible } = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const { ref: guaranteeRef, isVisible: guaranteeVisible } = useScrollAnimation({ threshold: 0.3, delay: 400 });

  const scrollToGetStarted = () => {
    document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: "Starter",
      price: 49,
      description: "Perfect for early-stage startups",
      features: [
        "Basic UX audit PDF",
        "Key conversion issues identified",
        "Quick wins highlighted",
        "48-hour delivery",
        "Email support"
      ],
      cta: "Get Started",
      popular: false,
      bgColor: "bg-blue-400",
      planValue: "starter"
    },
    {
      name: "Growth",
      price: 149,
      description: "Most popular for growing startups",
      features: [
        "Everything in Starter",
        "Detailed strategy deck",
        "Competitor UX analysis",
        "Before/after mockups",
        "Implementation roadmap",
        "Priority support"
      ],
      cta: "Choose Growth",
      popular: true,
      bgColor: "bg-purple-400",
      planValue: "growth"
    },
    {
      name: "Founder+",
      price: 249,
      description: "Complete solution with personal guidance",
      features: [
        "Everything in Growth",
        "1:1 strategy call (30 min)",
        "Custom implementation guide",
        "Follow-up recommendations",
        "Direct access to founder",
        "Success guarantee"
      ],
      cta: "Go Premium",
      popular: false,
      bgColor: "bg-pink-400",
      planValue: "founder"
    }
  ];

  const handlePlanSelect = (planValue: string) => {
    // Set the selected plan in the form
    const event = new CustomEvent('selectPlan', { detail: planValue });
    window.dispatchEvent(event);
    
    // Scroll to the form
    scrollToGetStarted();
  };

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-all duration-1000 ${
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
            Simple, Transparent Pricing
          </h2>
          <p className={`text-xl font-bold text-black dark:text-gray-200 max-w-2xl mx-auto transition-all duration-800 delay-400 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            No hidden fees, no recurring subscriptions. Pay once, get results forever.
          </p>
        </div>

        <div 
          ref={plansRef}
          className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-1000 ${
            plansVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-100 p-8 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#f3f4f6] hover:shadow-[12px_12px_0px_0px_#000] dark:hover:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-500 transform hover:-translate-x-1 hover:-translate-y-1 hover:scale-105 group flex flex-col h-full ${
                plan.popular ? 'scale-105' : ''
              } ${
                plansVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: plan.popular && plansVisible ? 'scale(1.05)' : undefined
              }}
            >
              {plan.popular && (
                <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 transition-all duration-800 ${
                  plansVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-2 rotate-12'
                }`} style={{ transitionDelay: '300ms' }}>
                  <div className="bg-red-400 border-4 border-black dark:border-gray-100 text-black px-4 py-2 font-black shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] flex items-center space-x-1 group-hover:rotate-3 transition-transform duration-300">
                    <Star className="h-5 w-5" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`${plan.bgColor} border-4 border-black dark:border-gray-100 p-4 mb-4 group-hover:rotate-3 group-hover:scale-110 transition-all duration-300`}>
                  <h3 className="text-2xl font-black text-black">{plan.name}</h3>
                </div>
                <p className="text-black dark:text-gray-200 font-bold mb-4">{plan.description}</p>
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-5xl font-black text-black dark:text-gray-100">${plan.price}</span>
                  </div>
                  <div className="text-black dark:text-gray-200 font-bold">ONE-TIME PAYMENT</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-black dark:text-gray-200 font-bold">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  onClick={() => handlePlanSelect(plan.planValue)}
                  className={`w-full py-4 px-6 font-black text-lg transition-all duration-300 border-4 border-black dark:border-gray-100 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6] hover:shadow-[8px_8px_0px_0px_#000] dark:hover:shadow-[8px_8px_0px_0px_#f3f4f6] transform hover:-translate-x-1 hover:-translate-y-1 hover:scale-105 ${
                    plan.popular
                      ? 'bg-red-400 text-black'
                      : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-100'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Money-Back Guarantee */}
        <div 
          ref={guaranteeRef}
          className={`mt-12 bg-yellow-400 border-4 border-black dark:border-gray-100 p-8 text-center shadow-[12px_12px_0px_0px_#000] dark:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-1000 transform ${
            guaranteeVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Zap className={`h-8 w-8 text-black transition-all duration-800 ${
              guaranteeVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'
            }`} style={{ transitionDelay: '200ms' }} />
            <h3 className={`text-3xl font-black text-black transition-all duration-800 delay-300 ${
              guaranteeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>7-Day Money-Back Guarantee</h3>
            <Zap className={`h-8 w-8 text-black transition-all duration-800 ${
              guaranteeVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-45 scale-75'
            }`} style={{ transitionDelay: '200ms' }} />
          </div>
          <p className={`text-black font-bold max-w-2xl mx-auto text-lg transition-all duration-800 delay-500 ${
            guaranteeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Not happy with your audit? Get a full refund within 7 days, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;