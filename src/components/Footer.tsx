import React from 'react';
import { Mail, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-t-4 border-white dark:border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-black bg-yellow-400 border-4 border-white dark:border-gray-100 text-black px-4 py-2 shadow-[4px_4px_0px_0px_#fff] dark:shadow-[4px_4px_0px_0px_#f3f4f6] mb-6 inline-block">
              UXBOOST
            </div>
            <p className="text-white dark:text-gray-200 font-bold mb-6 max-w-md">
              Personalized UX audits and conversion strategies for startup founders. 
              Fix your UX, boost your revenue, grow your business.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:hello@uxboost.site" className="text-white hover:text-yellow-400 transition-colors p-3 bg-blue-400 border-2 border-white dark:border-gray-100 shadow-[4px_4px_0px_0px_#fff] dark:shadow-[4px_4px_0px_0px_#f3f4f6] hover:shadow-[6px_6px_0px_0px_#fff] dark:hover:shadow-[6px_6px_0px_0px_#f3f4f6] transform hover:-translate-x-1 hover:-translate-y-1">
                <Mail className="h-6 w-6 text-black" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors p-3 bg-purple-400 border-2 border-white dark:border-gray-100 shadow-[4px_4px_0px_0px_#fff] dark:shadow-[4px_4px_0px_0px_#f3f4f6] hover:shadow-[6px_6px_0px_0px_#fff] dark:hover:shadow-[6px_6px_0px_0px_#f3f4f6] transform hover:-translate-x-1 hover:-translate-y-1">
                <Twitter className="h-6 w-6 text-black" />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors p-3 bg-pink-400 border-2 border-white dark:border-gray-100 shadow-[4px_4px_0px_0px_#fff] dark:shadow-[4px_4px_0px_0px_#f3f4f6] hover:shadow-[6px_6px_0px_0px_#fff] dark:hover:shadow-[6px_6px_0px_0px_#f3f4f6] transform hover:-translate-x-1 hover:-translate-y-1">
                <Linkedin className="h-6 w-6 text-black" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-black text-white dark:text-gray-100 mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollTo('how-it-works')} className="text-white dark:text-gray-200 hover:text-yellow-400 transition-colors font-bold">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="text-white dark:text-gray-200 hover:text-yellow-400 transition-colors font-bold">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('faq')} className="text-white dark:text-gray-200 hover:text-yellow-400 transition-colors font-bold">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-white dark:text-gray-100 mb-4">SUPPORT</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@uxboost.site" className="text-white dark:text-gray-200 hover:text-yellow-400 transition-colors font-bold">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white dark:text-gray-200 hover:text-yellow-400 transition-colors font-bold">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white dark:text-gray-200 hover:text-yellow-400 transition-colors font-bold">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white dark:text-gray-200 hover:text-yellow-400 transition-colors font-bold">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-4 border-white dark:border-gray-100 mt-12 pt-8 text-center">
          <p className="text-white dark:text-gray-200 font-bold">
            © 2025 UXBoost. All rights reserved. Made with ❤️ for founders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;