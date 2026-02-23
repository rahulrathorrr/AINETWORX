import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Calendar, Clock, Mail } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0f1115] text-gray-300 min-h-screen pb-20">
      
      {/* SECTION 1: Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-gray-800">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ec4899]/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="text-[#ec4899] font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Blog
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8">
              We Write About What We're Learning as We Build This.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              This blog is not a content marketing machine. We're not publishing SEO articles about topics we don't understand. Every post here is written by someone on our team based on something we actually observed, tested, or learned while building AINETWORX or working with the businesses that use it. If it's not something we could defend in a real conversation, we don't publish it.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Featured Article */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-[#16191e] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row group"
          >
            <div className="lg:w-1/2 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Business Interview" 
                className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#ec4899] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Featured Article
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-[#ec4899] transition-colors">
                We Interviewed 80 Small Business Owners Across Delhi-NCR Before Writing a Single Line of Code. Here's Everything They Told Us.
              </h2>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6 pb-6 border-b border-gray-800">
                <span className="flex items-center gap-1.5"><User size={16} className="text-[#ec4899]"/> Neha Joshi, Co-founder & Head of Product</span>
                <span className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></span>
                <span className="flex items-center gap-1.5"><Calendar size={16} className="text-[#ec4899]"/> November 2024</span>
                <span className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></span>
                <span className="flex items-center gap-1.5"><Clock size={16} className="text-[#ec4899]"/> 10 minutes</span>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Before we built anything at AINETWORX, we spent three months having real conversations with small business owners across East Delhi, Noida, Ghaziabad, and Gurugram. We talked to textile traders, food startups, logistics operators, tutoring centres, and freelance service providers. We asked them what their biggest daily headaches were, what technology they were already using, what they'd tried and given up on, and what they wished existed. This post is a full write-up of what we heard - unfiltered, honest, and uncomfortable in places. It's also the document that determined what AINETWORX would build first.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Articles Grid */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Article 2 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 rounded-2xl overflow-hidden group flex flex-col">
              <div className="h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Automation" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ec4899] transition-colors leading-tight">
                  The Three Business Tasks You Should Automate First - And the Two You Should Never Touch
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-6">
                  <span className="flex items-center gap-1.5"><User size={14} className="text-[#ec4899]"/> Aarav Verma</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#ec4899]"/> October 2024</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#ec4899]"/> 7 minutes</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  Automation is often discussed as if every task should be automated as soon as technically possible. In our experience working with small businesses, that approach creates more problems than it solves. This post makes a specific, argued case for which tasks deliver the fastest and most reliable results when automated, and which tasks - particularly in sales and client relationships - should stay firmly in human hands. Includes real examples from businesses in our early access cohort.
                </p>
              </div>
            </motion.div>

            {/* Article 3 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 rounded-2xl overflow-hidden group flex flex-col">
              <div className="h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="WhatsApp Business" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ec4899] transition-colors leading-tight">
                  Why WhatsApp Is the Most Underestimated Business Intelligence Tool in India - And How AI Changes What You Can Do With It
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-6">
                  <span className="flex items-center gap-1.5"><User size={14} className="text-[#ec4899]"/> Rohan Sinha</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#ec4899]"/> October 2024</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#ec4899]"/> 6 minutes</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  WhatsApp isn't just a messaging app for Indian businesses - it's where sales happen, customer service happens, supplier relationships are managed, and orders are placed and tracked. That makes it an extraordinarily rich data source that almost no small business is actually mining. This post looks at what AI can extract from WhatsApp conversations - patterns, intent, sentiment, frequency - and what practical decisions that data can support.
                </p>
              </div>
            </motion.div>

            {/* Article 4 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 rounded-2xl overflow-hidden group flex flex-col">
              <div className="h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Textile Shop" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ec4899] transition-colors leading-tight">
                  A Textile Business in Laxmi Nagar Cut Its Customer Response Time From 4 Hours to 3 Minutes. Here's Exactly What We Did.
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-6">
                  <span className="flex items-center gap-1.5"><User size={14} className="text-[#ec4899]"/> Priya Malik</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#ec4899]"/> September 2024</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#ec4899]"/> 8 minutes</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  This is a detailed account of one of our earliest NexBot deployments - a family-run textile wholesale business in Laxmi Nagar that was getting around 60 WhatsApp messages per day, mostly asking about stock availability and pricing. We walk through the full setup process, what didn't work in the first week and why, what we changed, and what the numbers looked like at the end of 30 days. We share this not because it was a perfect deployment, but because the imperfect parts are where the real learning is.
                </p>
              </div>
            </motion.div>

            {/* Article 5 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 rounded-2xl overflow-hidden group flex flex-col">
              <div className="h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Finance Calculator" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ec4899] transition-colors leading-tight">
                  Is AI Useful for a Business Making Under ₹50 Lakh a Year? An Honest Answer With Actual Numbers.
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-6">
                  <span className="flex items-center gap-1.5"><User size={14} className="text-[#ec4899]"/> Aarav Verma</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#ec4899]"/> September 2024</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#ec4899]"/> 6 minutes</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  The most common question we hear from small business owners considering AI is some version of: "Is this actually for me, or is this for bigger companies?" We answer it directly in this post - not with general encouragement, but with specific ROI calculations based on real data from our early users. What does a ₹1,499 monthly subscription need to do for a business earning ₹30 lakh per year to make financial sense? We do the math.
                </p>
              </div>
            </motion.div>

            {/* Article 6 (Spans full width on desktop) */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 rounded-2xl overflow-hidden group flex flex-col md:col-span-2 md:flex-row">
              <div className="md:w-2/5 h-60 md:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Coding Break Session" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ec4899] transition-colors leading-tight">
                  We Tried to Break Our Own Product. Here's What We Found and What We're Fixing.
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-6">
                  <span className="flex items-center gap-1.5"><User size={14} className="text-[#ec4899]"/> Rohan Sinha</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#ec4899]"/> August 2024</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#ec4899]"/> 5 minutes</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every few weeks, we run what we call a "break session" - where our team spends a day trying to make our products fail, give wrong answers, or behave in ways that would embarrass us in front of a real user. This post documents the most recent session for DataLens: what edge cases we found, what happened when we fed it badly formatted data, and what we've changed as a result. We publish this because we believe users should know that the people building their tools are actively trying to find and fix the problems before they do.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Newsletter Section (Modified to single button) */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-[#16191e] to-[#0f1115] border border-gray-700 rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ec4899]/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <Mail className="mx-auto text-[#ec4899] mb-6" size={48} />
            <h2 className="text-3xl font-bold text-white mb-6">Get New Posts as Soon as We Publish Them</h2>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg max-w-2xl mx-auto">
              We publish two to three posts per month. No newsletters, no promotional emails, no "we thought you'd find this interesting" content that you didn't ask for. You'll only ever receive an email from us when we've published something new. One email, one post, a link to read it. That's it.
            </p>
            
            <button 
              onClick={() => navigate('/contact')}
              className="bg-[#ec4899] hover:bg-[#d9468c] text-white font-bold px-12 py-4 rounded-lg transition-colors shadow-[0_0_20px_rgba(236,72,153,0.3)] mx-auto flex items-center justify-center text-lg"
            >
              I'm in
            </button>
            
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Blog;