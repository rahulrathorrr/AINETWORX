import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, BarChart3, Zap, Target, CheckCircle2 } from 'lucide-react';

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

const Products = () => {
  return (
    <div className="bg-[#0f1115] text-gray-300 min-h-screen pb-20">
      
      {/* SECTION 1: Page Header (Hero Section) */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden border-b border-gray-800">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#ec4899]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="text-[#ec4899] font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Products
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
              Four AI Tools. Each One Built to Solve Exactly One Problem.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We didn't try to build one massive platform that promised to do everything. We've seen what happens to those - they become too complicated to use, too expensive to maintain, and too generic to actually help anyone. Instead, we built four focused tools. Each one targets a specific, painful problem that we heard from real Indian business owners during our research phase. Pick the one that matches your biggest headache right now.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT 1: NexBot */}
      <section className="py-24 relative overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Customer Support" 
                className="w-full h-auto object-cover opacity-80"
              />
              <div className="absolute top-4 left-4 bg-[#0f1115]/90 backdrop-blur border border-gray-700 p-3 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-900/50 rounded-lg flex items-center justify-center">
                  <MessageSquare className="text-[#ec4899]" size={20} />
                </div>
                <span className="text-white font-bold">NexBot</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Product 1: NexBot - Your Always-On Customer Support Agent</h2>
              <p className="text-[#ec4899] text-xl font-medium mb-8">Tagline: Stop Answering the Same Questions. Start Doing the Work That Grows Your Business.</p>
              
              <div className="space-y-6 text-gray-400">
                <p><strong className="text-white">The Problem It Solves:</strong> Most small businesses in India get the majority of their customer communication through WhatsApp. And most of those messages are the same 15–20 questions asked over and over - what are your prices, do you have this in stock, when will my order arrive, do you deliver to my area. A business owner or team member spends hours every day typing the same replies. Every hour spent on that is an hour not spent on something that actually moves the business forward.</p>
                <p><strong className="text-white">What NexBot Does:</strong> NexBot is an AI-powered conversational agent that connects to your WhatsApp Business account and your website. You provide information about your business - products, services, pricing, policies, FAQ - and NexBot uses that information to respond to customer queries instantly, at any time of day or night, in Hindi or English, depending on how the customer is writing. It doesn't replace your team for complex conversations. When a query requires human judgement - a complaint, a large custom order, an unusual situation - NexBot recognises this and hands the conversation over to a real person, along with a full summary of what was already discussed. No customer ever has to repeat themselves.</p>
                <p><strong className="text-white">Who Uses It:</strong> Retail businesses with high query volumes. E-commerce stores with order status questions. Service providers who get a lot of "how much does it cost" messages. Anyone who finds themselves replying to WhatsApp messages at 11 PM because customers are asking during non-working hours.</p>
                <p><strong className="text-white">Key Features:</strong> Handles up to 2,000 customer interactions per month on the Growth plan. Responds in Hindi and English without needing separate setup for each. Escalates to a human agent with full conversation context when needed. Sends a daily digest of all conversations to your email or WhatsApp. Learns from new questions over time to improve response accuracy. Installable on any website in under 15 minutes. WhatsApp Business API integration included.</p>
                <div className="bg-[#16191e] border border-gray-700 p-4 rounded-xl inline-block mt-4">
                  <strong className="text-white">Current Status:</strong> Live and in active use by 60+ businesses in early access.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT 2: DataLens */}
      <section className="py-24 relative overflow-hidden bg-[#16191e] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Product 2: DataLens - Business Intelligence Without the Complexity</h2>
              <p className="text-blue-400 text-xl font-medium mb-8">Tagline: Your Business Tells a Story Every Day. DataLens Helps You Read It.</p>
              
              <div className="space-y-6 text-gray-400">
                <p><strong className="text-white">The Problem It Solves:</strong> Most small business owners know their business is doing well or badly based on feeling - end-of-day gut check, comparing this month to last month from memory, noticing that the shelf looks emptier or fuller than usual. This works to a point. But it means you're always operating in retrospect. You find out something was wrong two weeks after it started going wrong. You find out what's working too late to double down on it.</p>
                <p><strong className="text-white">What DataLens Does:</strong> DataLens connects to your existing data - whether that's a Google Sheet you update daily, an Excel file your accountant sends you monthly, or sales records exported from your billing software - and automatically generates a clear, visual business dashboard. No setup expertise required. You connect your file once, and from that point forward, DataLens keeps it updated and sends you a report every morning. The reports don't just show you numbers. They tell you what the numbers mean. "Your Tuesday sales are 40% lower than any other weekday. Your top five products account for 68% of revenue. Your average customer order value dropped 12% this month compared to last." Plain language. Specific. Actionable.</p>
                <p><strong className="text-white">Who Uses It:</strong> Any business that tracks sales, inventory, or customer activity and wants to understand what the data is actually saying. Especially useful for retail, distribution, food businesses, and service businesses that want to track revenue per client or service type.</p>
                <p><strong className="text-white">Key Features:</strong> Connects to Google Sheets, Excel, CSV files, and Tally exports. Auto-generates daily morning reports delivered to your email. Visual charts and summaries optimised for mobile viewing. Smart alerts when sales, orders, or other key metrics drop below a customised threshold. Monthly trend analysis showing patterns across the last 3, 6, or 12 months. Exportable PDF reports for sharing with your CA, co-founder, or business partner.</p>
                <div className="bg-[#0f1115] border border-blue-500/30 p-4 rounded-xl inline-block mt-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">MOST USED</div>
                  <strong className="text-white">Current Status:</strong> Most used product in our early access cohort. Live with 75+ businesses.
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Data Analytics" 
                className="w-full h-auto object-cover opacity-80"
              />
              <div className="absolute top-4 right-4 bg-[#0f1115]/90 backdrop-blur border border-gray-700 p-3 rounded-xl flex items-center gap-3">
                <span className="text-white font-bold">DataLens</span>
                <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <BarChart3 className="text-blue-400" size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT 3: FlowIQ */}
      <section className="py-24 relative overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Workflow Automation" 
                className="w-full h-auto object-cover opacity-80"
              />
              <div className="absolute top-4 left-4 bg-[#0f1115]/90 backdrop-blur border border-gray-700 p-3 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-green-900/50 rounded-lg flex items-center justify-center">
                  <Zap className="text-green-400" size={20} />
                </div>
                <span className="text-white font-bold">FlowIQ</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Product 3: FlowIQ - Automate What Drains Your Time Every Single Day</h2>
              <p className="text-green-400 text-xl font-medium mb-8">Tagline: The Work Doesn't Disappear. It Just Stops Needing You to Do It.</p>
              
              <div className="space-y-6 text-gray-400">
                <p><strong className="text-white">The Problem It Solves:</strong> In any business, there are tasks that happen every single day, in exactly the same sequence, triggered by exactly the same event. A new order comes in - someone has to create an invoice, send a confirmation message, and log the order in a spreadsheet. A payment is coming due - someone has to check the outstanding list and send a reminder. A week passes without a response from a lead - someone has to follow up. These tasks are important but not intellectually demanding. They just eat time, and if they get missed - because someone forgot, or was busy with something else - they create problems.</p>
                <p><strong className="text-white">What FlowIQ Does:</strong> FlowIQ is a business automation tool built around a library of pre-designed workflows created specifically for the tasks Indian SMEs repeat most often. You select the workflows that match your operations, connect them to your existing tools, and they run automatically from that point forward - triggered by the right events, at the right times, without human involvement. Unlike complex automation platforms that require technical knowledge to configure, FlowIQ's workflows are designed to be set up in plain language. You describe what you want to happen and when, and FlowIQ maps that to the technical implementation behind the scenes.</p>
                <p><strong className="text-white">Who Uses It:</strong> Businesses that issue invoices regularly. Businesses that follow up with leads or customers on a cycle. E-commerce businesses managing order notifications. Any business where important tasks regularly slip through the cracks because they depend entirely on someone remembering to do them.</p>
                <p><strong className="text-white">Key Features:</strong> Library of 10+ pre-built workflow templates for Indian business contexts including GST-compliant invoice generation, payment reminders, order confirmations, and lead follow-up sequences. Custom workflow builder for businesses with specific processes. Triggers can be based on time, events (new order, form submission), or conditions (payment overdue by X days). Integration with WhatsApp, email, Google Sheets, and standard billing tools. Weekly automation log showing every action the system took and when. Alert notifications if an automation fails so nothing falls through unnoticed.</p>
                <div className="bg-[#16191e] border border-gray-700 p-4 rounded-xl inline-block mt-4">
                  <strong className="text-white">Current Status:</strong> Live and actively used by businesses in early access. Integration with Tally in active development.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT 4: LeadMind */}
      <section className="py-24 relative overflow-hidden bg-[#16191e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Product 4: LeadMind - Stop Chasing the Wrong Prospects</h2>
              <p className="text-purple-400 text-xl font-medium mb-8">Tagline: Your Next Customer Is Already in Your Inbox. LeadMind Finds Them First.</p>
              
              <div className="space-y-6 text-gray-400">
                <p><strong className="text-white">The Problem It Solves:</strong> Any business that sells to other businesses, or sells high-consideration products or services to consumers, has a lead management problem. Enquiries come in from multiple sources - website forms, WhatsApp, referrals, events - and the sales team either has to manually evaluate each one or work through them in the order they arrived, regardless of quality. The result is time wasted on leads that were never going to convert, and hot leads going cold because they weren't prioritised.</p>
                <p><strong className="text-white">What LeadMind Does:</strong> LeadMind automatically analyses every new lead your business receives and assigns it a score from 1 to 10, based on a set of signals that our AI has learned to associate with high conversion likelihood. The score is based on factors like the source of the lead, the information provided, the business type, the query content, and - over time - patterns from your own historical conversion data. Every morning, your sales team receives a prioritised list of leads ranked by conversion probability, with a recommended next action for each one. They start their day knowing exactly who to call first and why.</p>
                <p><strong className="text-white">Who Uses It:</strong> B2B businesses with longer sales cycles. Real estate and services companies with large inquiry volumes. Any business where the quality of leads varies significantly and sales team time is a limited resource.</p>
                <p><strong className="text-white">Key Features:</strong> Automated scoring for every new lead from all connected sources. Daily "hot leads" digest sent to the team by 9 AM. Recommended next action per lead - call, WhatsApp, email, wait. Lead source tracking to identify which channels produce the best-converting enquiries. Over time, model improvement based on your actual conversion outcomes. Works standalone or alongside any existing CRM. Connection to website contact forms and WhatsApp Business included.</p>
                <div className="bg-[#0f1115] border border-gray-700 p-4 rounded-xl inline-block mt-4">
                  <strong className="text-white">Current Status:</strong> In active early access with service businesses and B2B companies in Delhi-NCR.
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Lead Management" 
                className="w-full h-auto object-cover opacity-80"
              />
              <div className="absolute top-4 right-4 bg-[#0f1115]/90 backdrop-blur border border-gray-700 p-3 rounded-xl flex items-center gap-3">
                <span className="text-white font-bold">LeadMind</span>
                <div className="w-10 h-10 bg-purple-900/50 rounded-lg flex items-center justify-center">
                  <Target className="text-purple-400" size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Products;