import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="min-h-screen bg-[#0f1115] flex items-center justify-center pt-20 overflow-hidden relative">
      
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            We're Teaching Small Businesses to Think Smarter - With AI Built Right Here in Delhi
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed"
          >
            AINETWORX is an early-stage AI startup from East Delhi. We build affordable, easy-to-use artificial intelligence tools for Indian small and mid-sized businesses — so they can automate the boring stuff, understand their numbers, and grow without burning out.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link 
              to="/contact" 
              className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-[#ec4899] hover:bg-[#d9468c] rounded-lg transition-colors shadow-[0_0_20px_rgba(236,72,153,0.3)]"
            >
              Try It Free - No Card Needed
            </Link>
            
            <Link 
              to="/about" 
              className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-bold text-white bg-transparent border border-gray-600 hover:border-gray-400 hover:bg-gray-800/50 rounded-lg transition-all"
            >
              See What We've Built
              <ArrowRight size={18} />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;