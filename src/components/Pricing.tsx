import React from 'react';
import { Check, Star, Zap, Flame, TrendingUp } from 'lucide-react';

const Pricing = () => {
  const scrollToGetStarted = () => {
    document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: "Starter",
      originalPrice: 49,
      price: 24.50,
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
      originalPrice: 149,
      price: 74.50,
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
      originalPrice: 249,
      price: 124.50,
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
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Launch Day Special Banner */}
        <div className="mb-12 bg-gradient-to-r from-red-500 to-orange-500 border-4 border-black dark:border-gray-100 p-6 text-center shadow-[12px_12px_0px_0px_#000] dark:shadow-[12px_12px_0px_0px_#f3f4f6] animate-pulse">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Flame className="h-8 w-8 text-white animate-bounce" />
            <h3 className="text-3xl font-black text-white">🚀 LAUNCH DAY SPECIAL!</h3>
            <Flame className="h-8 w-8 text-white animate-bounce" />
          </div>
          <p className="text-white font-bold text-xl mb-2">50% OFF ALL PLANS - TODAY ONLY!</p>
          <div className="flex items-center justify-center space-x-2">
            <TrendingUp className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Save hundreds on your UX audit</span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-black dark:text-gray-100 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl font-bold text-black dark:text-gray-200 max-w-2xl mx-auto">
            No hidden fees, no recurring subscriptions. Pay once, get results forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-100 p-8 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#f3f4f6] hover:shadow-[12px_12px_0px_0px_#000] dark:hover:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 group ${
                plan.popular ? 'scale-105' : ''
              } flex flex-col h-full`}
            >
              {/* Launch Day Badge */}
              <div className="absolute -top-4 -right-4 bg-red-500 border-2 border-black dark:border-gray-100 text-white px-3 py-1 font-black text-sm shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] transform rotate-12 animate-pulse">
                50% OFF!
              </div>

              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-400 border-4 border-black dark:border-gray-100 text-black px-4 py-2 font-black shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] flex items-center space-x-1">
                    <Star className="h-5 w-5" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`${plan.bgColor} border-4 border-black dark:border-gray-100 p-4 mb-4`}>
                  <h3 className="text-2xl font-black text-black">{plan.name}</h3>
                </div>
                <p className="text-black dark:text-gray-200 font-bold mb-4">{plan.description}</p>
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-2xl font-bold text-gray-500 line-through">${plan.originalPrice}</span>
                    <span className="text-5xl font-black text-black dark:text-gray-100">${plan.price}</span>
                  </div>
                  <div className="text-black dark:text-gray-200 font-bold">ONE-TIME PAYMENT</div>
                  <div className="text-red-600 font-black text-sm mt-1">SAVE ${(plan.originalPrice - plan.price).toFixed(2)}!</div>
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
                  className={`w-full py-4 px-6 font-black text-lg transition-all duration-300 border-4 border-black dark:border-gray-100 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6] hover:shadow-[8px_8px_0px_0px_#000] dark:hover:shadow-[8px_8px_0px_0px_#f3f4f6] transform hover:-translate-x-1 hover:-translate-y-1 ${
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

        {/* Simplified Money-Back Guarantee */}
        <div className="mt-16 bg-yellow-400 border-4 border-black dark:border-gray-100 p-8 text-center shadow-[12px_12px_0px_0px_#000] dark:shadow-[12px_12px_0px_0px_#f3f4f6]">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Zap className="h-8 w-8 text-black" />
            <h3 className="text-3xl font-black text-black">7-Day Money-Back Guarantee</h3>
            <Zap className="h-8 w-8 text-black" />
          </div>
          <p className="text-black font-bold max-w-2xl mx-auto text-lg">
            Not happy with your audit? Get a full refund within 7 days, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;