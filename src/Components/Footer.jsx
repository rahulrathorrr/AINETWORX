import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Network, Cpu, ArrowUpRight, Sparkles } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top fix
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-[#090a0f] text-gray-300 pt-24 pb-8 border-t border-[#ec4899]/20 overflow-hidden font-sans selection:bg-[#ec4899] selection:text-white">
      
      {/* Background Deep AI Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ec4899] opacity-[0.08] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          
          {/* Left Section: Brand & AI Mission (Takes 5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" onClick={scrollToTop} className="flex items-center gap-4 mb-6 group w-fit">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#ec4899] blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                  <img
                    src={logo}
                    alt="AINETWORX Logo"
                    className="h-16 md:h-20 w-auto object-contain relative z-10 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    AINETWORX
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[#ec4899] uppercase mt-1">
                    Private Limited
                  </span>
                </div>
              </Link>

              <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl mb-8 shadow-inner backdrop-blur-sm">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-widest">
                  <Cpu size={16} className="text-[#ec4899]" /> Core Mission
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We build affordable, easy-to-use artificial intelligence tools for Indian small and mid-sized businesses - empowering them to automate tasks, understand data, and scale without burning out.
                </p>
              </div>
            </div>
          </div>

          {/* Spacer Column */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Right Section: Network Links & Contact (Takes 6 columns) */}
          <div className="lg:col-span-6 flex flex-col gap-12">
            
            {/* AI Modules (Quick Links transformed into floating pills) */}
            <div>
              <h3 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
                <Network size={16} className="text-[#ec4899]" /> System Modules
              </h3>
              <div className="flex flex-wrap gap-3">
                {quickLinks.map((link, index) => (
                  <Link 
                    key={index}
                    to={link.path}
                    onClick={scrollToTop}
                    className="group relative px-5 py-2.5 rounded-full border border-gray-800 bg-[#16191e]/50 hover:bg-[#ec4899]/10 hover:border-[#ec4899]/50 transition-all duration-300 flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white"
                  >
                    <Sparkles size={14} className="text-[#ec4899] opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-3" />
                    <span className="group-hover:translate-x-4 transition-transform duration-300">
                      {link.name}
                    </span>
                    <ArrowUpRight size={14} className="text-gray-600 group-hover:text-[#ec4899] transition-colors duration-300 ml-1 group-hover:translate-x-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Data Points */}
            <div>
              <h3 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
                <MapPin size={16} className="text-[#ec4899]" /> Datacenter / Contact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="bg-[#16191e]/50 border border-gray-800 p-4 rounded-xl hover:border-[#ec4899]/30 transition-colors duration-300">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    A-21 Pandav Nagar,<br />
                    East Delhi,<br />
                    Delhi – 110092, India
                  </p>
                </div>

                <div className="bg-[#16191e]/50 border border-gray-800 p-4 rounded-xl hover:border-[#ec4899]/30 transition-colors duration-300 flex flex-col justify-center">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Support Ping</p>
                  <a
                    href="mailto:hello@ainetworxhub.in"
                    className="text-sm font-medium text-white hover:text-[#ec4899] transition-colors flex items-center gap-2"
                  >
                    <Mail size={14} className="text-[#ec4899]" /> hello@ainetworxhub.in
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium tracking-wide">
          <p>&copy; {currentYear} AINETWORX PRIVATE LIMITED. All rights reserved.</p>
          
          <div className="flex gap-6">
             <Link to="/privacy-policy" onClick={scrollToTop} className="hover:text-[#ec4899] transition-colors">Privacy Protocol</Link>
             <Link to="/terms-conditions" onClick={scrollToTop} className="hover:text-[#ec4899] transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;