import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQ = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: faqsRef, isVisible: faqsVisible } = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation({ threshold: 0.3, delay: 400 });

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How long does the audit take?",
      answer: "Most audits are completed within 24-48 hours. I prioritize quick turnaround because I know founders need to move fast. You'll get an email as soon as your audit is ready."
    },
    {
      question: "What if I'm not happy with the audit?",
      answer: "I offer a 7-day money-back guarantee, no questions asked. If you don't find the audit valuable or actionable, I'll refund your payment immediately."
    },
    {
      question: "Do you work with all types of products?",
      answer: "I specialize in SaaS products, web apps, and digital services. If you have a physical product or brick-and-mortar business, this audit might not be the best fit. When in doubt, shoot me an email first."
    },
    {
      question: "What's included in the audit?",
      answer: "Every audit includes a detailed analysis of your user experience, conversion funnel, design patterns, and messaging. You'll get specific recommendations prioritized by impact and effort, plus implementation guidance."
    },
    {
      question: "Can my team implement the recommendations?",
      answer: "Absolutely! All recommendations come with clear implementation steps. I focus on practical fixes that any developer or designer can implement, not theoretical concepts that require a UX team."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "The audit is a one-time service, but Founder+ plan includes a follow-up call and I'm always available via email for quick questions. For ongoing support, we can discuss a retainer arrangement."
    },
    {
      question: "How is this different from other UX reviews?",
      answer: "Most UX consultants charge enterprise prices and take weeks to deliver academic reports. I'm a founder who understands startup constraints and delivers fast, actionable insights at fair prices."
    },
    {
      question: "What information do you need from me?",
      answer: "Just your product URL, target users, and main conversion goals. The intake form takes 2 minutes to fill out. I do all the heavy lifting from there."
    }
  ];

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-all duration-1000 ${
        sectionVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className={`text-4xl sm:text-5xl font-black text-black dark:text-gray-100 mb-6 transition-all duration-800 delay-200 ${
            titleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-xl font-bold text-black dark:text-gray-200 transition-all duration-800 delay-400 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Everything you need to know about UX audits and how they work.
          </p>
        </div>

        <div 
          ref={faqsRef}
          className={`space-y-6 transition-all duration-1000 ${
            faqsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 dark:bg-gray-800 border-4 border-black dark:border-gray-100 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6] hover:shadow-[8px_8px_0px_0px_#000] dark:hover:shadow-[8px_8px_0px_0px_#f3f4f6] transition-all duration-500 transform hover:-translate-x-1 hover:-translate-y-1 hover:scale-105 ${
                faqsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-yellow-300 dark:hover:bg-gray-700 transition-all duration-300 font-black text-black dark:text-gray-100 group"
              >
                <span className="text-lg">{faq.question}</span>
                <div className={`bg-blue-400 border-2 border-black dark:border-gray-100 p-2 transform ${openItems.includes(index) ? 'rotate-180' : ''} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-black" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-black" />
                  )}
                </div>
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4 border-t-4 border-black dark:border-gray-100 animate-fade-in">
                  <p className="text-black dark:text-gray-200 font-bold leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div 
          ref={contactRef}
          className={`mt-12 bg-yellow-400 border-4 border-black dark:border-gray-100 p-8 text-center shadow-[12px_12px_0px_0px_#000] dark:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-1000 transform ${
            contactVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <h3 className="text-3xl font-black text-black mb-4">
            Still Have Questions?
          </h3>
          <p className="text-black font-bold mb-6">
            I'm here to help! Shoot me an email or book a quick 15-minute call to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@uxboost.site" 
              className={`bg-white border-4 border-black text-black px-6 py-3 font-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 hover:scale-105 ${
                contactVisible ? 'scale-100' : 'scale-95'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              EMAIL ME
            </a>
            <a 
              href="https://cal.com/positronx"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-blue-400 border-4 border-black text-black px-6 py-3 font-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 hover:scale-105 ${
                contactVisible ? 'scale-100' : 'scale-95'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              BOOK A CALL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;