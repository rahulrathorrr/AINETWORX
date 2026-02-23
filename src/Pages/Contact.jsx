import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2, HelpCircle } from 'lucide-react';

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

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap apna backend logic (EmailJS, API etc) laga sakte ho
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#0f1115] text-gray-300 min-h-screen pb-20">
      
      {/* SECTION 1: Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-gray-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ec4899]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="text-[#ec4899] font-bold tracking-widest uppercase text-sm mb-4 block">
              Contact Us
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8">
              We're a Small Team. When You Message Us, You're Talking to the People Who Built This.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              We don't have a support department. We don't have an outsourced call centre. When you send us a message, it goes to one of four people - the same people who designed the product, wrote the code, or set up the dashboard you're using. We think that's a feature. We're reachable by email, WhatsApp, and the form below. We respond to everything within 24 hours on working days.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Contact Details & Form Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Details Block */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-[#ec4899]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-400">
                      <a href="mailto:hello@ainetworxhub.in" className="text-[#ec4899] hover:underline font-medium">hello@ainetworxhub.in</a> - for general enquiries, product questions, and getting started
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-green-500">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                    <p className="text-gray-400">
                      Message us directly on WhatsApp for faster back-and-forth. Available Monday through Saturday, 10 AM to 7 PM. We also read messages sent outside these hours and respond the following morning.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Office Address</h3>
                    <p className="text-gray-400 mb-4">
                      AINETWORX PRIVATE LIMITED<br />
                      A-21 Pandav Nagar, East Delhi<br />
                      Delhi – 110092, India
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      If you're local to Delhi-NCR and want to meet in person, we're open to that. Just send us a message first to arrange a time.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-gradient-to-r from-[#16191e] to-[#0f1115] border border-gray-800 p-8 rounded-2xl border-l-4 border-l-[#ec4899]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-[#ec4899]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Response Commitment</h3>
                    <p className="text-gray-400 text-sm">
                      We aim to respond to every message within 24 hours on Monday through Friday. If you write on a Saturday, expect a reply by Monday morning. We don't have an auto-responder that sends empty acknowledgements - if you haven't heard from us, send a follow-up and we'll apologise genuinely.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-[#16191e] border border-gray-700 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">First Name <span className="text-[#ec4899]">*</span></label>
                        <input type="text" required className="w-full bg-[#0f1115] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ec4899] transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Last Name</label>
                        <input type="text" className="w-full bg-[#0f1115] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ec4899] transition-colors" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Email Address <span className="text-[#ec4899]">*</span></label>
                        <input type="email" required className="w-full bg-[#0f1115] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ec4899] transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">WhatsApp or Phone Number</label>
                        <input type="tel" className="w-full bg-[#0f1115] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ec4899] transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">What type of business do you run?</label>
                      <input type="text" className="w-full bg-[#0f1115] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ec4899] transition-colors" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Which product or service are you most interested in?</label>
                      <select className="w-full bg-[#0f1115] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ec4899] transition-colors appearance-none cursor-pointer">
                        <option value="" disabled selected>Select an option</option>
                        <option value="NexBot">NexBot</option>
                        <option value="DataLens">DataLens</option>
                        <option value="FlowIQ">FlowIQ</option>
                        <option value="LeadMind">LeadMind</option>
                        <option value="AI Consulting">AI Consulting</option>
                        <option value="Custom Integration">Custom Integration</option>
                        <option value="Team Training">Team Training</option>
                        <option value="I'm not sure yet">I'm not sure yet</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">What's your question or what do you want to tell us? <span className="text-[#ec4899]">*</span></label>
                      <textarea required rows="5" className="w-full bg-[#0f1115] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ec4899] transition-colors resize-none"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-[#ec4899] hover:bg-[#d9468c] text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-[0_0_20px_rgba(236,72,153,0.3)] flex items-center justify-center gap-2 text-lg"
                    >
                      <Send size={20} />
                      Send Message
                    </button>
                  </motion.form>
                ) : (
                  /* Post-submission message */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center h-full min-h-[400px] py-10"
                  >
                    <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message received.</h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto">
                      We'll get back to you at the email address you provided within 24 hours. If your question is urgent, send us a WhatsApp message as well and reference your email.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: What to Write to Us About */}
      <section className="py-24 bg-[#16191e] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Not Sure What to Say? Here Are the Messages We Get Most Often - and Welcome.</h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2 text-[#ec4899]">Type 1 - Trying to Understand If We're Right for You</h3>
              <blockquote className="text-gray-300 italic mb-4 border-l-2 border-gray-700 pl-4 py-2">"I run a [type of business] in [city] and I'm wondering if your tools could help with [specific problem]. Can you tell me more?"</blockquote>
              <p className="text-gray-400 text-sm">This is the most common message we receive and one of the most useful. The more specific you are about your business and your problem, the faster we can give you a useful answer.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2 text-blue-400">Type 2 - Wanting to See the Product Before Signing Up</h3>
              <blockquote className="text-gray-300 italic mb-4 border-l-2 border-gray-700 pl-4 py-2">"Can I see a demo before I decide anything?"</blockquote>
              <p className="text-gray-400 text-sm">Yes. Send us a message with a brief description of your business and we'll schedule a 30-minute walkthrough where we show you the product working with your type of business in mind.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2 text-green-400">Type 3 - Already a User With a Problem or Suggestion</h3>
              <blockquote className="text-gray-300 italic mb-4 border-l-2 border-gray-700 pl-4 py-2">"I'm on the Growth plan and I've noticed that [thing] isn't working the way I expected."</blockquote>
              <p className="text-gray-400 text-sm">Please write to us directly rather than waiting. We track and fix issues quickly, and user feedback is how most of our best improvements have happened.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2 text-yellow-400">Type 4 - Curious About the Company or the Team</h3>
              <blockquote className="text-gray-300 italic mb-4 border-l-2 border-gray-700 pl-4 py-2">"I'm writing a piece about AI startups in India" or "I'm a student researching the startup ecosystem in Delhi"</blockquote>
              <p className="text-gray-400 text-sm">We're happy to talk. Reach out and we'll do our best to make time.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Location Note */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="text-[#ec4899] font-semibold tracking-wide uppercase text-sm mb-2 block">Location Note</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">We're Based in Pandav Nagar, East Delhi</h2>
              <div className="space-y-4 text-gray-400 text-lg">
                <p>
                  Our registered office is at A-21 Pandav Nagar, East Delhi, Delhi – 110092. Pandav Nagar is in the eastern part of Delhi, and like most of the areas around it - Laxmi Nagar, Shahdara, Mayur Vihar - it's home to a dense, active small business community. Being here means we walk past our users' shops, eat at restaurants that use similar tools, and understand the context we're building for in a way that's hard to replicate from a co-working space in Gurugram.
                </p>
                <p className="font-medium text-white">
                  The nearest metro station is Pandav Nagar on the Pink Line.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 h-64 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Delhi Streets" 
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Final CTA */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-white mb-6">There's No Pressure. Just a Conversation.</h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              We're not going to follow up aggressively if you fill out our form. We won't put you in a drip campaign. We'll respond once, honestly, and let you decide what happens next. If the timing isn't right or our tools aren't the right fit for where your business is right now, we'll tell you that too.
            </p>
            <a 
              href="mailto:hello@ainetworxhub.in" 
              className="inline-flex items-center gap-2 text-[#ec4899] font-bold hover:text-white transition-colors text-xl"
            >
              <Mail size={24} />
              hello@ainetworxhub.in
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;