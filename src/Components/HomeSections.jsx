import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, BarChart3, Zap, Target } from 'lucide-react';

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

const HomeSections = () => {
  return (
    <div className="bg-[#0f1115] text-gray-300">
      
      {/* SECTION 1: The Problem We're Solving */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="text-[#ec4899] font-semibold tracking-wide uppercase text-sm">Why We Exist</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Most AI Tools Are Built for Companies With 500 Employees and ₹50 Crore Budgets. We Built Ours for Everyone Else.
              </h2>
              <div className="space-y-4 text-lg text-gray-400">
                <p>
                  Walk into any small business in Delhi-NCR today and you'll find the same picture: a shop owner juggling WhatsApp messages, a notebook of orders, a half-filled spreadsheet, and three browser tabs open. Meanwhile, large companies are using sophisticated AI systems to answer customer queries instantly, predict demand before it happens, and automate invoicing without lifting a finger.
                </p>
                <p>
                  The gap isn't about intelligence or ambition. It's about access.
                </p>
                <p>
                  We started AINETWORX because we believe that a kirana shop owner in Pandav Nagar deserves the same competitive advantage as a funded startup in Gurugram. The difference shouldn't be budget or technical knowledge - it should just be whether or not the right tool exists.
                </p>
                <p className="font-medium text-white">
                  We're building that tool. Actually, we're building four of them.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Small business owner" 
                className="w-full h-auto object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: A Snapshot of What We've Made */}
      <section className="py-24 bg-[#16191e] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#ec4899] font-semibold tracking-wide uppercase text-sm">Our Products at a Glance</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
              Four Focused Tools. Each One Fixes a Real Problem.
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Product 1 */}
            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
              <div className="w-14 h-14 bg-pink-900/30 rounded-xl flex items-center justify-center mb-6 border border-pink-500/20">
                <MessageCircle className="text-[#ec4899]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Product 1 - NexBot</h3>
              <p className="text-gray-400">An AI chat agent for your website and WhatsApp. It answers customer questions around the clock - in Hindi or English - without your team needing to be online. Customers stop waiting. Your inbox stops overflowing.</p>
            </motion.div>

            {/* Product 2 */}
            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#ec4899] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Most Used</div>
              <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20">
                <BarChart3 className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Product 2 - DataLens</h3>
              <p className="text-gray-400">Connects to your sales data - Google Sheets, Excel, manual records - and converts it into a clean visual dashboard. Tells you what's selling, what's tanking, and what you should do about it. Plain language, no jargon.</p>
            </motion.div>

            {/* Product 3 */}
            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
              <div className="w-14 h-14 bg-green-900/30 rounded-xl flex items-center justify-center mb-6 border border-green-500/20">
                <Zap className="text-green-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Product 3 - FlowIQ</h3>
              <p className="text-gray-400">Automates the tasks that eat your working day: generating GST-compliant invoices, sending payment follow-ups, notifying customers about their orders. Set it once. It runs quietly in the background forever.</p>
            </motion.div>

            {/* Product 4 */}
            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
              <div className="w-14 h-14 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20">
                <Target className="text-purple-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Product 4 - LeadMind</h3>
              <p className="text-gray-400">Scores every incoming lead based on how likely they are to actually buy - so your sales team stops wasting time on the wrong people and starts closing the right ones faster.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: How Getting Started Actually Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#ec4899] font-semibold tracking-wide uppercase text-sm">The Process</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
              You Don't Need a Tech Team. You Need 30 Minutes.
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 relative"
          >
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-gray-800 z-0"></div>

            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#16191e] border-2 border-[#ec4899] rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6">1</div>
              <h3 className="text-xl font-bold text-white mb-3">Step 1 - Pick Your Problem</h3>
              <p className="text-gray-400">Tell us the one thing that wastes the most time in your business right now. Customer replies? Manual reporting? Chasing payments? Each of our tools is built around one specific pain point.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#16191e] border-2 border-gray-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6">2</div>
              <h3 className="text-xl font-bold text-white mb-3">Step 2 - Connect What You Already Have</h3>
              <p className="text-gray-400">We don't ask you to change how you work. We connect to the tools you already use - WhatsApp, Google Sheets, your website, even a simple Excel file - and build on top of them.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#16191e] border-2 border-gray-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6">3</div>
              <h3 className="text-xl font-bold text-white mb-3">Step 3 - Go Live and Watch What Changes</h3>
              <p className="text-gray-400">Most setups are done in under a day. After that, you'll see automated reports in your inbox, instant customer replies going out, and saved hours showing up on your calendar.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: What Early Users Have Said */}
      <section className="py-24 bg-[#16191e] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#ec4899] font-semibold tracking-wide uppercase text-sm">Early Feedback</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
              Honest Words from Our First Batch of Users
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800">
              <p className="text-gray-300 italic mb-6">"I used to spend the first two hours of every morning just replying to the same WhatsApp messages - stock availability, pricing, delivery time. NexBot now handles all of that. I use those two hours to actually visit suppliers. That alone was worth it."</p>
              <div className="font-medium text-white">- Rakesh Kapoor, Owner, Kapoor Textile House, Laxmi Nagar, Delhi</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800">
              <p className="text-gray-300 italic mb-6">"DataLens showed me that three of my fifteen product categories were generating 70% of my profit. I had no idea. I restructured my entire shelf based on that one report. Margins went up 22% the next month."</p>
              <div className="font-medium text-white">- Priya Sharma, Co-founder, Snackify Foods, Noida</div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800">
              <p className="text-gray-300 italic mb-6">"My team was manually creating invoices and then following up on payments by hand. FlowIQ automated both. In the first month it saved us roughly 14 working hours and we stopped missing follow-up windows entirely."</p>
              <div className="font-medium text-white">- Arjun Mehta, Founder, QuickFix Logistics, Shahdara, Delhi</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Numbers That Tell Our Story */}
      <section className="py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={fadeInUp} className="p-6">
              <div className="text-4xl font-extrabold text-white mb-2">120+</div>
              <div className="text-gray-400 text-sm">businesses currently using our tools in early access</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <div className="text-4xl font-extrabold text-white mb-2">4</div>
              <div className="text-gray-400 text-sm">AI products built and actively used</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <div className="text-4xl font-extrabold text-white mb-2">2024</div>
              <div className="text-gray-400 text-sm">Founded in, headquartered in Pandav Nagar, East Delhi</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6">
              <div className="text-4xl font-extrabold text-white mb-2">11 hours</div>
              <div className="text-gray-400 text-sm">Average saved per week reported by Growth plan users</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: Final CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-[#ec4899]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#16191e] border border-gray-700 rounded-3xl p-10 md:p-16 shadow-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              We're Still Early. Which Means You Get In at the Best Possible Time.
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Early access users get the lowest pricing we'll ever offer, direct access to our founding team, and the chance to shape the features we build next. We're not a faceless platform - we're four people in Delhi who will actually answer your messages.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold text-white bg-[#ec4899] hover:bg-[#d9468c] rounded-lg transition-colors shadow-[0_0_20px_rgba(236,72,153,0.3)] w-full sm:w-auto"
            >
              Join Early Access - It's Free to Start
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HomeSections;