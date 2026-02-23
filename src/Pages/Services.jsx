import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, BarChart, Zap, Lightbulb, Blocks, Users, CheckCircle2, XCircle, Clock } from 'lucide-react';

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

const Services = () => {
  return (
    <div className="bg-[#0f1115] text-gray-300 min-h-screen pb-20">
      
      {/* SECTION 1: Page Header (Hero Section) */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden border-b border-gray-800">
        {/* Glow Effects */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#ec4899]/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="text-[#ec4899] font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Services
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
              We Don't Just Give You a Tool. We Help You Actually Use It.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Beyond our four software products, we offer a set of hands-on services for businesses that want more than a login and a help centre. Every service we offer is designed to be fast, practical, and specific to your situation - not a generic consulting package dressed up with AI buzzwords.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: The Services */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Service 1 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-pink-900/30 rounded-xl flex items-center justify-center border border-pink-500/20">
                  <MessageSquare className="text-[#ec4899]" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-white">Service 1: AI Chatbot Setup & Deployment</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p><strong className="text-white">Who It's For:</strong> Businesses getting 20+ repetitive customer messages per day on WhatsApp or their website.</p>
                <p><strong className="text-white">What We Do:</strong> We configure a conversational AI assistant tailored to your specific business - your products, your FAQs, your pricing structure, your tone of communication. We connect it to your WhatsApp Business account or your website (or both), test it thoroughly with real sample queries, and hand it over to you fully operational. You don't write a single line of code. You don't spend hours configuring a system. You describe your business, we build it, we test it, and we show you how to monitor it in 15 minutes.</p>
                <p><strong className="text-white">What's Included:</strong> Hindi and English language support built-in. A set of 50 pre-loaded FAQ responses based on your business. Integration with WhatsApp Business API. A simple web-based control panel to update responses yourself. A weekly summary report showing what customers asked and how the bot responded. One round of refinements after the first two weeks of live usage.</p>
                <p className="flex items-center gap-2 text-[#ec4899] font-medium mt-4"><Clock size={18}/> <strong className="text-white">Timeline:</strong> 3–5 business days from sign-up to live deployment.</p>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center border border-blue-500/20">
                  <BarChart className="text-blue-400" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-white">Service 2: Business Data Analytics & Dashboard Setup</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p><strong className="text-white">Who It's For:</strong> Business owners making decisions based on gut feeling or outdated reports because their data is scattered across too many places.</p>
                <p><strong className="text-white">What We Do:</strong> We connect to your existing data sources - Google Sheets, Excel files, Tally exports, or manual entry - and build you a clean, functional business dashboard that updates automatically. You open it each morning and immediately know what happened yesterday, what's trending this week, and where your attention needs to go. We don't build a complicated BI tool that requires a dedicated analyst to interpret. We build something you can glance at for five minutes and walk away with three clear decisions.</p>
                <p><strong className="text-white">What's Included:</strong> Connection to up to 3 data sources. A visual dashboard with daily and weekly views. Automated report delivered to your email every morning. Smart alerts when key metrics like daily sales or order volumes drop below a set threshold. A monthly review call to discuss what the data is telling you.</p>
                <p className="flex items-center gap-2 text-blue-400 font-medium mt-4"><Clock size={18}/> <strong className="text-white">Timeline:</strong> Initial dashboard live within 5 business days. Full setup including alert configuration within 10 business days.</p>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-900/30 rounded-xl flex items-center justify-center border border-green-500/20">
                  <Zap className="text-green-400" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-white">Service 3: Workflow Automation Implementation</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p><strong className="text-white">Who It's For:</strong> Business owners and their teams who are spending hours every week on tasks that happen the exact same way every single time.</p>
                <p><strong className="text-white">What We Do:</strong> We map your most time-consuming repetitive processes - invoicing, payment follow-ups, order status notifications, lead logging, appointment confirmations - and automate them using pre-built and custom AI workflows. The automation runs silently in the background, triggering the right action at the right time without anyone needing to manage it. Most of our automation clients save between 8 and 15 hours per week within the first month. The tasks don't disappear - they just stop needing a human to do them.</p>
                <p><strong className="text-white">What's Included:</strong> A workflow audit session where we identify the 3–5 best automation candidates in your business. Implementation of up to 5 automated workflows. GST-compliant invoice generation if applicable. WhatsApp or email-based notification flows. A weekly automation summary showing every action the system took on your behalf. 30-day post-launch monitoring and adjustments.</p>
                <p className="flex items-center gap-2 text-green-400 font-medium mt-4"><Clock size={18}/> <strong className="text-white">Timeline:</strong> First workflow live within 2 business days. Full automation suite within 7 business days.</p>
              </div>
            </motion.div>

            {/* Service 4 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-yellow-900/30 rounded-xl flex items-center justify-center border border-yellow-500/20">
                  <Lightbulb className="text-yellow-400" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-white">Service 4: AI Readiness Consulting</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p><strong className="text-white">Who It's For:</strong> Business owners who know they should be using AI but have no idea where to start - and want an honest, no-nonsense second opinion.</p>
                <p><strong className="text-white">What We Do:</strong> We sit down with you - in person in Delhi or via video call - and spend 60–90 minutes understanding how your business actually works. We then give you a written, plain-language AI roadmap: what you should automate first, what technology would help you most right now, what you should absolutely not waste money on, and a realistic estimate of what results you could expect in the first 90 days. This is not a sales pitch disguised as consulting. We will tell you if AI isn't the right answer for a particular part of your business. We'd rather you trust us than buy something you don't need.</p>
                <p><strong className="text-white">What's Included:</strong> One 60–90 minute discovery session. A written AI roadmap document in Hindi or English. Tool recommendations with honest assessments of cost and complexity. A 30-minute follow-up call two weeks later to answer any questions that came up.</p>
                <p className="flex items-center gap-2 text-yellow-400 font-medium mt-4"><Clock size={18}/> <strong className="text-white">Timeline:</strong> Report delivered within 48 hours of the discovery session.</p>
              </div>
            </motion.div>

            {/* Service 5 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-900/30 rounded-xl flex items-center justify-center border border-purple-500/20">
                  <Blocks className="text-purple-400" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-white">Service 5: Custom AI Integration</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p><strong className="text-white">Who It's For:</strong> Businesses already using accounting software, CRMs, or custom-built tools that need to be connected to AI without disrupting existing operations.</p>
                <p><strong className="text-white">What We Do:</strong> We integrate our AI tools with your existing software stack - whether that's Tally for accounting, Zoho CRM, a custom-built internal system, or a third-party platform with an open API. The goal is to make AI work inside the tools your team already knows and uses, rather than forcing everyone to learn something new.</p>
                <p><strong className="text-white">What's Included:</strong> Technical integration scoping and documentation. API-level integration with your existing tools. Data sync testing and quality assurance. A dedicated integration support contact for 60 days post-launch. Full handover documentation for your team.</p>
                <p className="flex items-center gap-2 text-purple-400 font-medium mt-4"><Clock size={18}/> <strong className="text-white">Timeline:</strong> Scoped individually based on complexity. Most integrations completed in 7–14 business days.</p>
              </div>
            </motion.div>

            {/* Service 6 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-orange-900/30 rounded-xl flex items-center justify-center border border-orange-500/20">
                  <Users className="text-orange-400" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-white">Service 6: Team Training & AI Onboarding</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p><strong className="text-white">Who It's For:</strong> Businesses that have adopted AI tools but whose teams aren't using them confidently or consistently.</p>
                <p><strong className="text-white">What We Do:</strong> We run structured onboarding and training sessions for your team - in person in Delhi or remotely - designed specifically for non-technical staff. Sessions are practical, not theoretical. We show people exactly what to do, answer questions as they come up, and leave behind written guides that act as a permanent reference. Sessions are available in Hindi and English. We have trained teams ranging from 2 to 20 people across retail, logistics, and services businesses.</p>
                <p><strong className="text-white">What's Included:</strong> One group training session (up to 10 participants). Recorded session video for future reference. Written step-by-step usage guides in Hindi and/or English. A 30-day post-training support channel via WhatsApp. One follow-up session if required.</p>
                <p className="flex items-center gap-2 text-orange-400 font-medium mt-4"><Clock size={18}/> <strong className="text-white">Timeline:</strong> Session scheduled within 5 business days of booking.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Who We Work Best With */}
      <section className="py-24 bg-[#16191e] border-y border-gray-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">We're the Right Fit for You If...</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-gray-400">
                    You run a business with between 1 and 50 people. You're based in India. You're not looking for a massive enterprise transformation - you're looking for two or three specific things that will make your day meaningfully easier within the next 30 days. You're willing to invest a little time upfront to save a lot of time ongoing. And you prefer working with a team that will tell you the truth, even if the truth is "you don't need this right now."
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <XCircle className="text-red-500 mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-gray-400">
                    We're probably not the right fit if you need something built overnight, have no flexibility for a short setup period, or are looking for a fully managed IT department. We're a small team, and we're honest about what we can take on.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Business colleagues in discussion" 
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#16191e] via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Process Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">What Working With Us Looks Like</h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          >
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-gray-800 z-0"></div>

            <motion.div variants={fadeInUp} className="relative z-10 bg-[#0f1115] p-6 rounded-2xl border border-gray-800 h-full">
              <div className="w-16 h-16 bg-[#16191e] border-2 border-[#ec4899] rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 mx-auto">1</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Step 1 - Free Discovery Call (30 minutes)</h3>
              <p className="text-gray-400 text-center text-sm">We learn about your business and your biggest operational pain points. You ask us anything you want about our work, our team, and whether we're actually able to help.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative z-10 bg-[#0f1115] p-6 rounded-2xl border border-gray-800 h-full">
              <div className="w-16 h-16 bg-[#16191e] border-2 border-[#ec4899] rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 mx-auto">2</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Step 2 - A Clear, Honest Proposal (within 48 hours)</h3>
              <p className="text-gray-400 text-center text-sm">We send you a simple document: what we'll do, how long it will take, what it will cost, and what you can realistically expect as a result. No hidden fees. No scope creep.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative z-10 bg-[#0f1115] p-6 rounded-2xl border border-gray-800 h-full">
              <div className="w-16 h-16 bg-[#16191e] border-2 border-[#ec4899] rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 mx-auto">3</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Step 3 - Build, Configure, and Deploy</h3>
              <p className="text-gray-400 text-center text-sm">We do the technical work. You approve the output before anything goes live. We don't launch anything you haven't seen and agreed to.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative z-10 bg-[#0f1115] p-6 rounded-2xl border border-gray-800 h-full">
              <div className="w-16 h-16 bg-[#16191e] border-2 border-[#ec4899] rounded-full flex items-center justify-center text-xl font-bold text-white mb-6 mx-auto">4</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Step 4 - Monitor, Measure, and Improve</h3>
              <p className="text-gray-400 text-center text-sm">After launch, we share weekly performance summaries and stay available for questions. If something isn't working the way we expected, we fix it - not charge extra for the fix.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Services;