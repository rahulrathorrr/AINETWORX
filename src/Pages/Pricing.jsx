import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Star, Zap, HelpCircle } from 'lucide-react';

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

const Pricing = () => {
  return (
    <div className="bg-[#0f1115] text-gray-300 min-h-screen pb-20">
      
      {/* SECTION 1: Page Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#ec4899]/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="text-[#ec4899] font-bold tracking-widest uppercase text-sm mb-4 block">
              Pricing
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Straightforward Pricing Built for the Businesses We Actually Serve
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 leading-relaxed">
              We set our prices by asking one question: what can a small business in India realistically afford to spend on software before it starts delivering a clear return? The answer shaped everything below. No annual lock-ins you can't get out of. No confusing add-on fees. No pricing tiers named after enterprise jargon. Three plans. Plain language. Cancel whenever you want.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Early Access Notice Banner */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-pink-900/40 to-purple-900/40 border border-[#ec4899]/30 rounded-2xl p-6 md:p-8 flex items-start gap-4 shadow-[0_0_30px_rgba(236,72,153,0.1)] relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 text-[#ec4899]/10 rotate-12 pointer-events-none">
              <Star size={120} fill="currentColor" />
            </div>
            <Info className="text-[#ec4899] flex-shrink-0 mt-1" size={24} />
            <p className="text-white md:text-lg relative z-10">
              We're currently in early access, and we're offering our first 500 users a permanently locked early-access rate - the lowest pricing we will ever offer for these products. Once you're in, your rate stays fixed even as our prices increase for new users. We expect to close the early access window by March 2025.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Pricing Cards */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          >
            {/* Plan 1: Starter */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 rounded-3xl p-8 flex flex-col h-full hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <div className="text-4xl font-extrabold text-white mb-2">₹0<span className="text-lg font-medium text-gray-500">/month</span></div>
              <p className="text-sm text-gray-400 mb-8 pb-8 border-b border-gray-800 flex-grow-0">
                <strong className="text-white">For:</strong> Solo founders, micro-businesses, and anyone who wants to try before they decide anything.
              </p>
              
              <div className="flex-grow space-y-4 mb-8">
                <p className="font-semibold text-white mb-4">What's included:</p>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" /> Access to one product of your choice.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" /> Up to 100 AI interactions per month.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" /> Single channel - either WhatsApp or website integration, not both.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" /> Weekly automated summary report.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" /> Email support with responses within 48 hours.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" /> AINETWORX branding remains on any customer-facing elements.</li>
                </ul>
              </div>
              
              <div className="bg-[#0f1115] p-4 rounded-xl text-xs text-gray-400 mt-auto border border-gray-800">
                <strong className="text-white block mb-1">Honest note about this plan:</strong>
                This plan genuinely works for very small operations or for anyone who wants to test whether our tools deliver real value before committing. It's not designed to run a growing business on - at some point you'll hit the interaction limit or want access to more channels. When that happens, upgrade is one click away with no retroactive charges.
              </div>
            </motion.div>

            {/* Plan 2: Growth */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-b from-[#1a1525] to-[#16191e] border-2 border-[#ec4899] rounded-3xl p-8 flex flex-col h-full relative transform lg:-translate-y-4 shadow-[0_10px_40px_rgba(236,72,153,0.15)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ec4899] text-white text-sm font-bold px-4 py-1 rounded-full flex items-center gap-1">
                <Zap size={16} /> Most Chosen
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 text-[#ec4899]">Growth</h3>
              <div className="text-4xl font-extrabold text-white mb-2">₹1,499<span className="text-lg font-medium text-gray-500">/month</span></div>
              <p className="text-sm text-gray-400 mb-8 pb-8 border-b border-gray-800/50 flex-grow-0">
                <strong className="text-white">For:</strong> Small businesses and early-stage startups that are serious about using AI to improve operations and want to run it properly across their business.
              </p>
              
              <div className="flex-grow space-y-4 mb-8">
                <p className="font-semibold text-white mb-4">What's included:</p>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-3"><Check size={18} className="text-[#ec4899] flex-shrink-0 mt-0.5" /> All four products - NexBot, DataLens, FlowIQ, and LeadMind - included in one plan.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-[#ec4899] flex-shrink-0 mt-0.5" /> Up to 2,000 AI interactions per month.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-[#ec4899] flex-shrink-0 mt-0.5" /> WhatsApp, website, and email channels all connected.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-[#ec4899] flex-shrink-0 mt-0.5" /> Daily automated reports to your inbox every morning.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-[#ec4899] flex-shrink-0 mt-0.5" /> Hindi language support across all products.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-[#ec4899] flex-shrink-0 mt-0.5" /> Three custom workflow automations built and maintained by our team.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-[#ec4899] flex-shrink-0 mt-0.5" /> Priority support via email and WhatsApp, with responses within 8 business hours.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-[#ec4899] flex-shrink-0 mt-0.5" /> AINETWORX branding removed from all customer-facing elements.</li>
                </ul>
              </div>
              
              <div className="bg-[#ec4899]/10 p-4 rounded-xl text-xs text-gray-300 mt-auto border border-[#ec4899]/20">
                <strong className="text-white block mb-1">Why most of our users choose this:</strong>
                The Growth plan gives you everything you need to run all four of our tools properly without paying separately for each. At ₹1,499 per month, if it saves your team even 10 hours in the first month - which is the average we see - the cost per hour saved is roughly ₹150. Most businesses find the ROI obvious within the first 30 days.
              </div>
            </motion.div>

            {/* Plan 3: Business */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] border border-gray-800 rounded-3xl p-8 flex flex-col h-full hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Business</h3>
              <div className="text-4xl font-extrabold text-white mb-2">₹3,999<span className="text-lg font-medium text-gray-500">/month</span></div>
              <p className="text-sm text-gray-400 mb-8 pb-8 border-b border-gray-800 flex-grow-0">
                <strong className="text-white">For:</strong> Growing businesses and teams with more complex operations, higher volumes, or existing software that needs to be connected.
              </p>
              
              <div className="flex-grow space-y-4 mb-8">
                <p className="font-semibold text-white mb-4">What's included:</p>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li className="flex items-start gap-3"><Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> All four products plus custom integrations with your existing tools such as Tally and Zoho.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Unlimited AI interactions with no monthly ceiling.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> All channels included, plus direct API access.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Real-time live dashboard rather than scheduled reports.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Unlimited workflow automations - no cap on the number of processes we automate.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Tally, Zoho, and third-party ERP integration included.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> A dedicated point of contact on our team who knows your account.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> A 60-minute monthly strategy call with a member of our founding team.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Full onboarding and team training session included at sign-up.</li>
                  <li className="flex items-start gap-3"><Check size={18} className="text-blue-500 flex-shrink-0 mt-0.5" /> Responses to support requests within 2 business hours.</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Plan Comparison Summary */}
      <section className="py-20 bg-[#16191e] border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">Plan Comparison Summary</h2>
            
            <div className="overflow-x-auto rounded-xl border border-gray-800 bg-[#0f1115]">
              <table className="w-full text-left text-sm text-gray-400">
                <thead className="bg-[#1a1c23] text-white border-b border-gray-800">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Feature</th>
                    <th className="px-6 py-4 font-semibold text-center">Starter</th>
                    <th className="px-6 py-4 font-semibold text-center text-[#ec4899]">Growth</th>
                    <th className="px-6 py-4 font-semibold text-center text-blue-400">Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="hover:bg-[#16191e] transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-300">AI Interactions per month</td>
                    <td className="px-6 py-4 text-center">100</td>
                    <td className="px-6 py-4 text-center text-white font-medium">2,000</td>
                    <td className="px-6 py-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-[#16191e] transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-300">Products included</td>
                    <td className="px-6 py-4 text-center">1</td>
                    <td className="px-6 py-4 text-center text-white font-medium">All 4</td>
                    <td className="px-6 py-4 text-center">All 4 + Custom</td>
                  </tr>
                  <tr className="hover:bg-[#16191e] transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-300">Hindi language support</td>
                    <td className="px-6 py-4 text-center">No</td>
                    <td className="px-6 py-4 text-center text-white font-medium">Yes</td>
                    <td className="px-6 py-4 text-center">Yes</td>
                  </tr>
                  <tr className="hover:bg-[#16191e] transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-300">Report frequency</td>
                    <td className="px-6 py-4 text-center">Weekly</td>
                    <td className="px-6 py-4 text-center text-white font-medium">Daily</td>
                    <td className="px-6 py-4 text-center">Real-time</td>
                  </tr>
                  <tr className="hover:bg-[#16191e] transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-300">Workflow automations</td>
                    <td className="px-6 py-4 text-center">0</td>
                    <td className="px-6 py-4 text-center text-white font-medium">3</td>
                    <td className="px-6 py-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-[#16191e] transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-300">Tally/Zoho integration</td>
                    <td className="px-6 py-4 text-center">No</td>
                    <td className="px-6 py-4 text-center text-white font-medium">No</td>
                    <td className="px-6 py-4 text-center">Yes</td>
                  </tr>
                  <tr className="hover:bg-[#16191e] transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-300">Support response time</td>
                    <td className="px-6 py-4 text-center">48 hours</td>
                    <td className="px-6 py-4 text-center text-white font-medium">8 hours</td>
                    <td className="px-6 py-4 text-center">2 hours</td>
                  </tr>
                  <tr className="hover:bg-[#16191e] transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-300">Team training included</td>
                    <td className="px-6 py-4 text-center">No</td>
                    <td className="px-6 py-4 text-center text-white font-medium">No</td>
                    <td className="px-6 py-4 text-center">Yes</td>
                  </tr>
                  <tr className="hover:bg-[#16191e] transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-300">Monthly strategy call</td>
                    <td className="px-6 py-4 text-center">No</td>
                    <td className="px-6 py-4 text-center text-white font-medium">No</td>
                    <td className="px-6 py-4 text-center">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Pricing FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Pricing FAQ</h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* FAQ 1 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <HelpCircle className="text-[#ec4899] flex-shrink-0 mt-0.5" size={20} />
                Do I need to give payment details to start the free Starter plan?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-8">No. The Starter plan is genuinely free and we don't ask for any payment information. You sign up with your email address and you're in.</p>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <HelpCircle className="text-[#ec4899] flex-shrink-0 mt-0.5" size={20} />
                What exactly counts as an AI interaction?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-8">One interaction is one exchange: a customer sends a message, NexBot replies. Or you request a report, and DataLens generates one. Each back-and-forth exchange between a person and our AI counts as one interaction. Looking at your dashboard or reading a pre-generated report does not count as an interaction.</p>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <HelpCircle className="text-[#ec4899] flex-shrink-0 mt-0.5" size={20} />
                If I cancel mid-month, do I get a refund?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-8">We don't offer partial-month refunds, but you keep full access until the last day of your billing period. After that, your account moves to the free Starter tier rather than being closed entirely, so you don't lose your data or your setup.</p>
            </motion.div>

            {/* FAQ 4 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <HelpCircle className="text-[#ec4899] flex-shrink-0 mt-0.5" size={20} />
                Is there a cheaper rate for annual billing?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-8">Yes. Paying annually gives you two months free - roughly 17% off. Email us at hello@ainetworxhub.in to switch to annual billing. There's no portal for this yet; we handle it manually because we're still small.</p>
            </motion.div>

            {/* FAQ 5 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <HelpCircle className="text-[#ec4899] flex-shrink-0 mt-0.5" size={20} />
                Can I pay via UPI or bank transfer?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-8">Yes. We accept UPI, credit and debit cards, net banking, and NEFT bank transfers for annual Business plan payments. We use a standard secure payment gateway for card and UPI transactions.</p>
            </motion.div>

            {/* FAQ 6 */}
            <motion.div variants={fadeInUp} className="bg-[#16191e] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <HelpCircle className="text-[#ec4899] flex-shrink-0 mt-0.5" size={20} />
                Are there any setup or onboarding fees on top of the monthly price?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-8">No. The price shown is the complete price. The Business plan includes a full onboarding session as part of the monthly fee, not as an additional charge.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;