import React from 'react';
import { FileText, Search, Target, Phone } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Intake",
      description: "Fill out a quick form with your product URL, target users, and conversion goals. Takes 2 minutes.",
      details: "Tell me about your product, current challenges, and what success looks like for you.",
      color: "bg-blue-400"
    },
    {
      icon: Search,
      title: "Audit",
      description: "I'll conduct a comprehensive UX analysis of your product, identifying conversion killers and opportunities.",
      details: "Deep dive into user flows, design patterns, messaging, and technical UX issues.",
      color: "bg-purple-400"
    },
    {
      icon: Target,
      title: "Strategy Deck",
      description: "Get a detailed report with prioritized recommendations, before/after mockups, and implementation guides.",
      details: "Actionable insights ranked by impact and effort, with clear next steps for your team.",
      color: "bg-pink-400"
    },
    {
      icon: Phone,
      title: "Optional Call",
      description: "Book a 1:1 strategy call to walk through findings and answer questions (Founder+ plan only).",
      details: "30-minute call to discuss implementation, prioritization, and answer any questions.",
      color: "bg-green-400"
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-gray-100 mb-4 sm:mb-6">
            How It Works
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-800 dark:text-gray-200 max-w-2xl mx-auto">
            Simple, founder-friendly process. No meetings, no fluff—just actionable insights that drive results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white dark:bg-gray-900 border-2 sm:border-4 border-black dark:border-gray-100 p-4 sm:p-6 shadow-[4px_4px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] sm:dark:shadow-[8px_8px_0px_0px_#f3f4f6] hover:shadow-[6px_6px_0px_0px_#000] sm:hover:shadow-[12px_12px_0px_0px_#000] dark:hover:shadow-[6px_6px_0px_0px_#f3f4f6] sm:dark:hover:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1">
                <div className={`${step.color} w-12 h-12 sm:w-16 sm:h-16 border-2 sm:border-4 border-black dark:border-gray-100 flex items-center justify-center mb-3 sm:mb-4 shadow-[2px_2px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#f3f4f6] sm:dark:shadow-[4px_4px_0px_0px_#f3f4f6]`}>
                  <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-black font-bold" />
                </div>
                <div className="bg-yellow-300 dark:bg-yellow-400 border-2 border-black dark:border-gray-100 p-2 mb-3 sm:mb-4">
                  <span className="text-sm sm:text-base font-bold text-black">STEP {index + 1}</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-gray-100 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-gray-800 dark:text-gray-200 font-medium mb-2 sm:mb-3 text-sm sm:text-base">{step.description}</p>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">{step.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-yellow-400 border-2 sm:border-4 border-black dark:border-gray-100 p-6 sm:p-8 text-center shadow-[6px_6px_0px_0px_#000] sm:shadow-[12px_12px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6] sm:dark:shadow-[12px_12px_0px_0px_#f3f4f6]">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">
            Turnaround Time: 24-48 Hours
          </h3>
          <p className="text-black font-medium max-w-2xl mx-auto text-sm sm:text-base">
            Unlike agencies that take weeks, I deliver fast. Submit today, get your audit by tomorrow.
            Perfect for founders who need to move quickly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;