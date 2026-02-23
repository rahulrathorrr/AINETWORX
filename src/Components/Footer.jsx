import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#16191e] border-t border-gray-800 text-gray-300 pt-20 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">
          
          {/* Left Section: Logo + Address */}
          <div>
            
            {/* Logo + Company Name */}
            <Link to="/" className="flex items-center gap-5 mb-8">
              <img
                src={logo}
                alt="AINETWORX Logo"
                className="h-20 md:h-24 w-auto object-contain drop-shadow-xl"
              />
              <span className="text-3xl md:text-4xl font-bold text-white tracking-wide leading-none">
                AINETWORX
              </span>
            </Link>

            <div className="space-y-4 text-sm text-gray-400">
              <p className="font-medium text-white">AINETWORX PRIVATE LIMITED</p>
              
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ec4899] flex-shrink-0 mt-1" />
                <p className="leading-relaxed">
                  A-21 Pandav Nagar,<br />
                  East Delhi,<br />
                  Delhi – 110092, India
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Mail size={18} className="text-[#ec4899] flex-shrink-0" />
                <a
                  href="mailto:hello@ainetworxhub.in"
                  className="hover:text-white transition-colors"
                >
                  hello@ainetworxhub.in
                </a>
              </div>
            </div>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="flex flex-col md:items-center">
            <div className="w-full md:w-auto">
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-[#ec4899] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Home</Link></li>
                <li><Link to="/about" className="hover:text-[#ec4899] transition-colors flex items-center gap-2"><ArrowRight size={14} /> About Us</Link></li>
                <li><Link to="/services" className="hover:text-[#ec4899] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Services</Link></li>
                <li><Link to="/products" className="hover:text-[#ec4899] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Products</Link></li>
                <li><Link to="/pricing" className="hover:text-[#ec4899] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Pricing</Link></li>
                <li><Link to="/blog" className="hover:text-[#ec4899] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Blog</Link></li>
                <li><Link to="/contact" className="hover:text-[#ec4899] transition-colors flex items-center gap-2"><ArrowRight size={14} /> Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Right Section: About Brief */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">About AINETWORX</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We build affordable, easy-to-use artificial intelligence tools for Indian small and mid-sized businesses — so they can automate the boring stuff, understand their numbers, and grow without burning out.
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} AINETWORX PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;