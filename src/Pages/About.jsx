import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Target, CheckCircle, MapPin, Mail, Globe } from 'lucide-react';

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

const About = () => {
  return (
    <div className="bg-[#0f1115] text-gray-300 min-h-screen pb-20">
      
      {/* SECTION 1: Page Header (Hero Section) */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden border-b border-gray-800">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="text-[#ec4899] font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Story
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
              We Started This in a Living Room in Pandav Nagar. We're Still the Same Team.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              AINETWORX PRIVATE LIMITED was incorporated in 2024. Before the company existed on paper, it existed as a frustration - four people who kept watching small business owners get left behind while AI technology was being hyped everywhere but built for no one they knew.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Where This Started */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team working together" 
                className="w-full h-auto object-cover opacity-80"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#ec4899] font-semibold tracking-wide uppercase text-sm">The Origin</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                It Didn't Start With a Business Plan. It Started With a Question.
              </h2>
              <div className="space-y-4 text-lg text-gray-400">
                <p>
                  In 2023, two of our co-founders were doing freelance digital work - helping small businesses in East Delhi set up basic websites and manage their social media. They kept noticing the same thing: every business owner was drowning in repetitive tasks. Answering the same WhatsApp queries. Re-entering the same data into spreadsheets. Manually writing invoices they had written a hundred times before.
                </p>
                <p>
                  At the same time, they were reading about AI breakthroughs every other day. Tools that could write, reason, automate, predict. And the gap between what was being built and who it was being built for became impossible to ignore.
                </p>
                <p>
                  So they called two friends - one a machine learning engineer, one a marketing strategist - and asked a simple question: could we build AI tools that actually work for a shop owner in Delhi? Tools that don't need a technical background to use, don't cost a fortune, and are designed around how Indian businesses actually operate?
                </p>
                <p className="font-medium text-white">
                  The answer, after months of talking to real business owners and building and breaking early prototypes, was yes. AINETWORX was born from that conversation. We registered the company in Delhi, named it after what we were trying to do - network AI into the fabric of everyday business - and got to work.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: What We Believe */}
      <section className="py-24 bg-[#16191e] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#ec4899] font-semibold tracking-wide uppercase text-sm">Our Thinking</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
              Three Things We Believe Deeply About AI and Business
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-pink-900/30 rounded-full flex items-center justify-center mb-6 text-[#ec4899]">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Belief 1 - Simplicity is a Feature, Not a Compromise</h3>
              <p className="text-gray-400">We refuse to build tools that require a tutorial to understand. If a 55-year-old textile trader can't figure out how to use it in 10 minutes, we haven't done our job properly. Ease of use isn't a design choice for us - it's a fundamental product requirement.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-pink-900/30 rounded-full flex items-center justify-center mb-6 text-[#ec4899]">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Belief 2 - Context Matters More Than Technology</h3>
              <p className="text-gray-400">An AI tool built for an American e-commerce company and then translated into Hindi is not an AI tool for Indian businesses. We build specifically for how business happens here - WhatsApp-first communication, GST-compliant workflows, seasonal demand patterns, the reality of mixed digital and offline operations.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-pink-900/30 rounded-full flex items-center justify-center mb-6 text-[#ec4899]">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Belief 3 - Honesty Builds Better Products</h3>
              <p className="text-gray-400">We're new. We're learning. We've built things that didn't work and thrown them out. We tell our users this openly, and in return, they give us feedback that makes our products better. We'd rather be a trustworthy early-stage company than an overconfident one.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Our Mission, Vision, and Approach */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-[#16191e] to-[#0f1115] p-8 md:p-10 rounded-2xl border border-gray-800 border-l-4 border-l-[#ec4899]">
              <h3 className="text-2xl font-bold text-white mb-3">Mission</h3>
              <p className="text-lg text-gray-400">To give every Indian small and mid-sized business access to practical AI tools that save time, reduce cost, and create a genuine competitive advantage - regardless of their technical background or budget.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-[#16191e] to-[#0f1115] p-8 md:p-10 rounded-2xl border border-gray-800 border-l-4 border-l-blue-500">
              <h3 className="text-2xl font-bold text-white mb-3">Vision</h3>
              <p className="text-lg text-gray-400">A future where the gap between a large funded company and a small family-run business isn't the technology they have access to - it's only the decisions they choose to make with it.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-[#16191e] to-[#0f1115] p-8 md:p-10 rounded-2xl border border-gray-800 border-l-4 border-l-green-500">
              <h3 className="text-2xl font-bold text-white mb-3">Our Approach</h3>
              <p className="text-lg text-gray-400">We talk to users before we build. We test everything with real businesses before we launch it publicly. We price for what a small business can actually afford, not for what the market says enterprise software should cost. And when something isn't working, we say so and fix it rather than hiding it behind marketing language.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: The Team */}
      <section className="py-24 bg-[#16191e] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#ec4899] font-semibold tracking-wide uppercase text-sm">Who We Are</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
              Four People, Four Different Backgrounds, One Shared Obsession
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Team Member 1 */}
            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-white">Aarav Verma</h3>
              <p className="text-[#ec4899] font-medium mb-3">Co-founder & CEO</p>
              <p className="text-gray-400 text-sm">Aarav spent four years building data pipelines and internal tools for a mid-sized tech company before leaving to start AINETWORX. His frustration with how inaccessible enterprise software was for smaller businesses is the reason this company exists. He leads product strategy, investor conversations, and - when the situation demands it - customer support.</p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-white">Neha Joshi</h3>
              <p className="text-[#ec4899] font-medium mb-3">Co-founder & Head of Product</p>
              <p className="text-gray-400 text-sm">Before AINETWORX, Neha worked as a UX researcher and business consultant, helping companies redesign processes that weren't working. She personally conducted over 80 interviews with small business owners across Delhi-NCR before a single line of code was written. Everything she learned in those conversations is baked into how our products are designed.</p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-white">Rohan Sinha</h3>
              <p className="text-[#ec4899] font-medium mb-3">Lead AI & Engineering</p>
              <p className="text-gray-400 text-sm">Rohan has been working with machine learning models since his post-graduation and has a specific passion for making AI practical rather than theoretical. He's the person who figures out how to make a complex AI output understandable to someone who has never used the technology before. If AINETWORX's tools feel surprisingly simple, that's largely because of Rohan.</p>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div variants={fadeInUp} className="bg-[#0f1115] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-white">Priya Malik</h3>
              <p className="text-[#ec4899] font-medium mb-3">Head of Growth</p>
              <p className="text-gray-400 text-sm">Priya came to AINETWORX from the startup marketing world, where she spent three years helping early-stage companies find their first 1,000 users. She believes deeply that a product no one knows about is a product that doesn't exist. She's building our community, our content, and our word-of-mouth - one honest conversation at a time.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: Where We Are Today */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-[#ec4899] font-semibold tracking-wide uppercase text-sm">Our Status</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white mb-8">
              We're Early. We're Honest About It. Here's Exactly Where We Stand.
            </h2>
            <div className="space-y-6 text-lg text-gray-400 text-left md:text-center mb-12">
              <p>
                AINETWORX PRIVATE LIMITED was incorporated in 2024 and is currently in active early access. We have four products live and being used by over 120 businesses, primarily in Delhi-NCR. We are pre-revenue on two products and generating early revenue on two others. We are a bootstrapped team that is funded by our own savings and initial customer payments.
              </p>
              <p>
                We are not claiming to be something we're not. We haven't been around for five years. We don't have a list of Fortune 500 clients. What we have is a clear problem, a solution that real business owners are using and finding useful, and an intense determination to keep building.
              </p>
              <p className="font-medium text-white italic">
                If you want to know more, ask us directly. We'll tell you everything.
              </p>
            </div>

            {/* Contact Info Pills */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
              <div className="flex items-center gap-2 bg-[#16191e] border border-gray-700 px-4 py-2 rounded-full text-gray-300 text-sm">
                <MapPin size={16} className="text-[#ec4899]" />
                A-21 Pandav Nagar, East Delhi, Delhi – 110092
              </div>
              <div className="flex items-center gap-2 bg-[#16191e] border border-gray-700 px-4 py-2 rounded-full text-gray-300 text-sm">
                <Globe size={16} className="text-[#ec4899]" />
                ainetworxhub.in
              </div>
              <div className="flex items-center gap-2 bg-[#16191e] border border-gray-700 px-4 py-2 rounded-full text-gray-300 text-sm">
                <Mail size={16} className="text-[#ec4899]" />
                hello@ainetworxhub.in
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;