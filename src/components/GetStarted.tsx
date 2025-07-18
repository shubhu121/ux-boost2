import React, { useState, useEffect } from 'react';
import { Send, Globe, Users, Target, CheckCircle, AlertCircle } from 'lucide-react';
import { insertAuditRequest, type AuditRequest } from '../lib/supabase';
import CountdownTimer from './CountdownTimer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GetStarted = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.1, delay: 200 });
  const { ref: callRef, isVisible: callVisible } = useScrollAnimation({ threshold: 0.3, delay: 400 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    userType: '',
    goal: '',
    plan: 'growth' as const
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Listen for plan selection from pricing section
  useEffect(() => {
    const handlePlanSelection = (event: CustomEvent) => {
      setFormData(prev => ({
        ...prev,
        plan: event.detail as 'starter' | 'growth' | 'founder'
      }));
    };

    window.addEventListener('selectPlan', handlePlanSelection as EventListener);
    
    return () => {
      window.removeEventListener('selectPlan', handlePlanSelection as EventListener);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getCheckoutUrl = (plan: string) => {
    const checkoutUrls = {
      starter: "https://checkout.dodopayments.com/buy/pdt_ripfWwLOnTtvnPlKh0oa5?quantity=1&redirect_url=https://useful-lip-610.notion.site%2F22380ebc4dab81e38c4aceddae35ac46%3Fpvs%3D105",
      growth: "https://checkout.dodopayments.com/buy/pdt_IEgt4XEp4qWVaNM4IpZ86?quantity=1&redirect_url=https://useful-lip-610.notion.site%2F22380ebc4dab81e38c4aceddae35ac46%3Fpvs%3D105",
      founder: "https://checkout.dodopayments.com/buy/pdt_BqWWNW52VBM9vOpPxL0cn?quantity=1&redirect_url=https://useful-lip-610.notion.site%2F22380ebc4dab81e38c4aceddae35ac46%3Fpvs%3D105"
    };
    return checkoutUrls[plan as keyof typeof checkoutUrls];
  };

  const getPlanPrice = (plan: string) => {
    const prices = {
      starter: 49,
      growth: 149,
      founder: 249
    };
    return prices[plan as keyof typeof prices];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Prepare data for Supabase
      const auditRequestData: Omit<AuditRequest, 'id' | 'created_at' | 'updated_at'> = {
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        website: formData.website,
        user_type: formData.userType,
        goal: formData.goal,
        plan: formData.plan
      };

      // Insert into Supabase
      const result = await insertAuditRequest(auditRequestData);
      
      console.log('Audit request submitted:', result);
      
      setSubmitStatus('success');
      
      // Get the checkout URL for the current plan
      const checkoutUrl = getCheckoutUrl(formData.plan);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        userType: '',
        goal: '',
        plan: 'growth'
      });

      // Redirect to Dodo Payments checkout immediately
      window.open(checkoutUrl, '_blank');

    } catch (error) {
      console.error('Error submitting audit request:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentPlanPrice = getPlanPrice(formData.plan);

  return (
    <section 
      id="get-started" 
      ref={sectionRef}
      className={`py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-all duration-1000 ${
        sectionVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Info Banner */}
        <div className={`mb-8 transition-all duration-800 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <CountdownTimer />
        </div>

        <div 
          ref={titleRef}
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black text-black dark:text-gray-100 mb-4 sm:mb-6 transition-all duration-800 delay-200 ${
            titleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            Ready to Fix Your UX?
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl font-bold text-black dark:text-gray-200 max-w-2xl mx-auto transition-all duration-800 delay-400 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Tell me about your product and goals. I'll get started on your audit within hours.
          </p>
        </div>

        <div 
          ref={formRef}
          className={`bg-white dark:bg-gray-900 border-2 sm:border-4 border-black dark:border-gray-100 p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] sm:shadow-[12px_12px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#f3f4f6] sm:dark:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-1000 transform ${
            formVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          {submitStatus === 'success' && (
            <div className="mb-6 bg-green-100 border-2 sm:border-4 border-green-500 p-4 flex items-center space-x-3 animate-fade-in">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              <div>
                <h3 className="font-bold text-green-800 text-sm sm:text-base">Request Submitted Successfully!</h3>
                <p className="font-medium text-green-700 text-sm">Payment window opened. Complete your payment to start the audit.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 bg-red-100 border-2 sm:border-4 border-red-500 p-4 flex items-center space-x-3 animate-fade-in">
              <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
              <div>
                <h3 className="font-bold text-red-800 text-sm sm:text-base">Submission Failed</h3>
                <p className="font-medium text-red-700 text-sm">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className={`grid sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-800 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '200ms' }}>
              <div>
                <label htmlFor="name" className="block text-base sm:text-lg font-black text-black dark:text-gray-100 mb-2">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 sm:border-4 border-black dark:border-gray-100 font-bold text-black dark:text-gray-100 bg-white dark:bg-gray-700 shadow-[2px_2px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#f3f4f6] sm:dark:shadow-[4px_4px_0px_0px_#f3f4f6] focus:shadow-[4px_4px_0px_0px_#000] sm:focus:shadow-[6px_6px_0px_0px_#000] dark:focus:shadow-[4px_4px_0px_0px_#f3f4f6] sm:dark:focus:shadow-[6px_6px_0px_0px_#f3f4f6] transition-all duration-300 disabled:opacity-50 text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-base sm:text-lg font-black text-black dark:text-gray-100 mb-2">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 sm:border-4 border-black dark:border-gray-100 font-bold text-black dark:text-gray-100 bg-white dark:bg-gray-700 shadow-[2px_2px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#f3f4f6] sm:dark:shadow-[4px_4px_0px_0px_#f3f4f6] focus:shadow-[4px_4px_0px_0px_#000] sm:focus:shadow-[6px_6px_0px_0px_#000] dark:focus:shadow-[4px_4px_0px_0px_#f3f4f6] sm:dark:focus:shadow-[6px_6px_0px_0px_#f3f4f6] transition-all duration-300 disabled:opacity-50 text-sm sm:text-base"
                  placeholder="john@startup.com"
                />
              </div>
            </div>

            <div className={`grid sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-800 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '400ms' }}>
              <div>
                <label htmlFor="company" className="block text-base sm:text-lg font-black text-black dark:text-gray-100 mb-2">
                  COMPANY/STARTUP NAME
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 sm:border-4 border-black dark:border-gray-100 font-bold text-black dark:text-gray-100 bg-white dark:bg-gray-700 shadow-[2px_2px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#f3f4f6] sm:dark:shadow-[4px_4px_0px_0px_#f3f4f6] focus:shadow-[4px_4px_0px_0px_#000] sm:focus:shadow-[6px_6px_0px_0px_#000] dark:focus:shadow-[4px_4px_0px_0px_#f3f4f6] sm:dark:focus:shadow-[6px_6px_0px_0px_#f3f4f6] transition-all duration-300 disabled:opacity-50 text-sm sm:text-base"
                  placeholder="Awesome Startup Inc."
                />
              </div>
              
              <div>
                <label htmlFor="website" className="block text-base sm:text-lg font-black text-black dark:text-gray-100 mb-2">
                  WEBSITE/PRODUCT URL *
                </label>
                <div className="relative">
                  <Globe className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-6 sm:w-6 text-gray-400" />
                  <input
                    type="url"
                    id="website"
                    name="website"
                    required
                    value={formData.website}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full pl-8 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border-2 sm:border-4 border-black dark:border-gray-100 font-bold text-black dark:text-gray-100 bg-white dark:bg-gray-700 shadow-[2px_2px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#f3f4f6] sm:dark:shadow-[4px_4px_0px_0px_#f3f4f6] focus:shadow-[4px_4px_0px_0px_#000] sm:focus:shadow-[6px_6px_0px_0px_#000] dark:focus:shadow-[4px_4px_0px_0px_#f3f4f6] sm:dark:focus:shadow-[6px_6px_0px_0px_#f3f4f6] transition-all duration-300 disabled:opacity-50 text-sm sm:text-base"
                    placeholder="https://yourapp.com"
                  />
                </div>
              </div>
            </div>

            <div className={`transition-all duration-800 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '600ms' }}>
              <label htmlFor="userType" className="block text-base sm:text-lg font-black text-black dark:text-gray-100 mb-2">
                WHO ARE YOUR PRIMARY USERS? *
              </label>
              <div className="relative">
                <Users className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-6 sm:w-6 text-gray-400" />
                <input
                  type="text"
                  id="userType"
                  name="userType"
                  required
                  value={formData.userType}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full pl-8 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border-2 sm:border-4 border-black dark:border-gray-100 font-bold text-black dark:text-gray-100 bg-white dark:bg-gray-700 shadow-[2px_2px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#f3f4f6] sm:dark:shadow-[4px_4px_0px_0px_#f3f4f6] focus:shadow-[4px_4px_0px_0px_#000] sm:focus:shadow-[6px_6px_0px_0px_#000] dark:focus:shadow-[4px_4px_0px_0px_#f3f4f6] sm:dark:focus:shadow-[6px_6px_0px_0px_#f3f4f6] transition-all duration-300 disabled:opacity-50 text-sm sm:text-base"
                  placeholder="e.g., SaaS founders, small business owners, developers"
                />
              </div>
            </div>

            <div className={`transition-all duration-800 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '800ms' }}>
              <label htmlFor="goal" className="block text-base sm:text-lg font-black text-black dark:text-gray-100 mb-2">
                WHAT'S YOUR MAIN CONVERSION GOAL? *
              </label>
              <div className="relative">
                <Target className="absolute left-2 sm:left-3 top-3 sm:top-4 h-4 w-4 sm:h-6 sm:w-6 text-gray-400" />
                <textarea
                  id="goal"
                  name="goal"
                  required
                  rows={3}
                  value={formData.goal}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full pl-8 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border-2 sm:border-4 border-black dark:border-gray-100 font-bold text-black dark:text-gray-100 bg-white dark:bg-gray-700 shadow-[2px_2px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#f3f4f6] sm:dark:shadow-[4px_4px_0px_0px_#f3f4f6] focus:shadow-[4px_4px_0px_0px_#000] sm:focus:shadow-[6px_6px_0px_0px_#000] dark:focus:shadow-[4px_4px_0px_0px_#f3f4f6] sm:dark:focus:shadow-[6px_6px_0px_0px_#f3f4f6] transition-all duration-300 disabled:opacity-50 text-sm sm:text-base"
                  placeholder="e.g., Increase signups, improve trial-to-paid conversion, reduce checkout abandonment"
                />
              </div>
            </div>

            <div className={`transition-all duration-800 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '1000ms' }}>
              <label htmlFor="plan" className="block text-base sm:text-lg font-black text-black dark:text-gray-100 mb-2">
                CHOOSE YOUR PLAN
              </label>
              <select
                id="plan"
                name="plan"
                value={formData.plan}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 sm:border-4 border-black dark:border-gray-100 font-bold text-black dark:text-gray-100 bg-white dark:bg-gray-700 shadow-[2px_2px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#f3f4f6] sm:dark:shadow-[4px_4px_0px_0px_#f3f4f6] focus:shadow-[4px_4px_0px_0px_#000] sm:focus:shadow-[6px_6px_0px_0px_#000] dark:focus:shadow-[4px_4px_0px_0px_#f3f4f6] sm:dark:focus:shadow-[6px_6px_0px_0px_#f3f4f6] transition-all duration-300 disabled:opacity-50 text-sm sm:text-base"
              >
                <option value="starter">Starter - $49</option>
                <option value="growth">Growth - $149 - Most Popular</option>
                <option value="founder">Founder+ - $249</option>
              </select>
            </div>

            <div className={`pt-4 sm:pt-6 transition-all duration-800 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '1200ms' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-400 border-2 sm:border-4 border-black dark:border-gray-100 text-black py-3 sm:py-4 px-6 sm:px-8 font-black text-base sm:text-lg lg:text-xl shadow-[4px_4px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#f3f4f6] sm:dark:shadow-[8px_8px_0px_0px_#f3f4f6] hover:shadow-[6px_6px_0px_0px_#000] sm:hover:shadow-[12px_12px_0px_0px_#000] dark:hover:shadow-[6px_6px_0px_0px_#f3f4f6] sm:dark:hover:shadow-[12px_12px_0px_0px_#f3f4f6] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-[4px_4px_0px_0px_#000] sm:disabled:shadow-[8px_8px_0px_0px_#000]"
              >
                <Send className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ${
                  isSubmitting ? 'animate-pulse' : ''
                }`} />
                <span>{isSubmitting ? 'SUBMITTING...' : 'SUBMIT & CONTINUE TO PAYMENT'}</span>
              </button>
              <p className="text-base sm:text-lg font-bold text-black dark:text-gray-200 text-center mt-3 sm:mt-4">
                Secure payment powered by Dodo Payments. Start your audit within hours.
              </p>
            </div>
          </form>
        </div>

        <div 
          ref={callRef}
          className={`mt-8 sm:mt-12 text-center transition-all duration-1000 ${
            callVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-black dark:text-gray-200 font-bold mb-3 sm:mb-4 text-sm sm:text-base">Questions? Book a quick call instead:</p>
          <a 
            href="https://cal.com/positronx"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-green-400 border-2 sm:border-4 border-black dark:border-gray-100 text-black px-4 sm:px-6 py-2 sm:py-3 font-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_#f3f4f6] sm:dark:shadow-[6px_6px_0px_0px_#f3f4f6] hover:shadow-[5px_5px_0px_0px_#000] sm:hover:shadow-[8px_8px_0px_0px_#000] dark:hover:shadow-[5px_5px_0px_0px_#f3f4f6] sm:dark:hover:shadow-[8px_8px_0px_0px_#f3f4f6] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 hover:scale-105 text-sm sm:text-base inline-block ${
              callVisible ? 'scale-100' : 'scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            SCHEDULE A CALL WITH FOUNDER
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;