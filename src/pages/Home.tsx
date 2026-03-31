import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, TrendingUp, BarChart3, Zap, Users, Target, 
  CheckCircle, CheckCircle2, FileText, Gift, Briefcase, Lightbulb, 
  HelpCircle, Mail, Phone, MapPin, ChevronDown, ChevronUp,
  Shield, Clock, Globe, Headset, Calendar, Network, Rocket
} from 'lucide-react';
import { WaitlistModal } from '../components/WaitlistModal';

export const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  React.useEffect(() => {
    const handleOpenModal = () => setIsWaitlistModalOpen(true);
    window.addEventListener('openWaitlistModal', handleOpenModal);
    return () => window.removeEventListener('openWaitlistModal', handleOpenModal);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const faqs = [
    {
      question: "What exactly does a Remote Business Partner do?",
      answer: "A Remote Business Partner acts as an extension of your executive team, providing high-level strategic support, operational management, and administrative oversight. Unlike a standard virtual assistant, we focus on strategy, growth, and high-impact tasks that drive your business forward."
    },
    {
      question: "How does the onboarding process work?",
      answer: "Our onboarding process begins with a comprehensive discovery call to understand your business needs. We then conduct an operational audit, propose a tailored strategy, and integrate seamlessly into your existing workflows using our secure DocuShare portal."
    },
    {
      question: "Is my business data secure?",
      answer: "Absolutely. We use enterprise-grade security protocols and our proprietary DocuShare system ensures all sensitive information is encrypted and access-controlled. We also sign comprehensive NDAs before beginning any work."
    },
    {
      question: "Do you work with businesses outside of Australia?",
      answer: "While our primary focus is on Australian businesses, we do partner with international clients who require our specific expertise in strategic growth and operational efficiency."
    }
  ];

  return (
    <>
      {/* Hero */}
      <section id="hero" className="pt-32 pb-12 lg:pt-40 lg:pb-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-800 border border-slate-700 rounded-[3rem] pt-16 px-6 md:pt-24 md:px-16 lg:pt-32 lg:px-20 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
            
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none z-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4FF3E]/10 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D4FF3E]/5 rounded-full blur-[120px]"></div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="relative z-20 max-w-4xl mx-auto flex flex-col items-center"
            >
              {/* Top Badge */}
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D4FF3E]/10 text-[#D4FF3E] text-sm font-semibold mb-8 border border-[#D4FF3E]/20 cursor-pointer hover:bg-[#D4FF3E]/20 transition-colors">
                <span className="px-2 py-0.5 rounded-full bg-[#D4FF3E] text-slate-900 text-xs font-bold mr-2">Coming Soon</span>
                New Platform <ArrowRight size={14} className="inline ml-1" />
              </div>

              {/* Headline */}
              <h1 className="font-display text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] text-white mb-6 tracking-tight">
                Redefining Business <br className="hidden md:block" />
                Advisory for Small Businesses
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                Delivering cost-effective, process-driven solutions that create real impact.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
              </div>
            </motion.div>

            {/* Bottom Visual */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="relative z-10 w-full max-w-5xl mx-auto mt-4"
            >
              <div className="relative rounded-t-[2rem] border-t-[8px] border-x-[8px] border-slate-900 bg-slate-900 overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9]">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                  alt="Abstract Tech" 
                  className="w-full h-full object-cover grayscale opacity-60 hover:opacity-80 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* What We Are Creating */}
      <section id="creating" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-800 border border-slate-700 rounded-[3rem] p-12 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between min-h-[600px]">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="relative z-20 lg:w-1/2 max-w-2xl"
            >
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                The Platform We're Building
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed font-medium">
                We're developing an all-in-one digital workspace that bridges the gap between your business and our strategic expertise. Experience seamless collaboration and access to premium resources 24/7.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Secure DocuShare portal for instant file sharing and collaboration",
                  "Library of plug-and-play operational templates and workflows",
                  "Real-time dashboard for strategic insights and task tracking",
                  "Direct communication channels with your dedicated partner"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-lg">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#D4FF3E]/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-[#D4FF3E] rounded-full"></div>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button onClick={() => setIsWaitlistModalOpen(true)} className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-950 bg-[#D4FF3E] rounded-2xl hover:bg-[#bce62d] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 shadow-[#D4FF3E]/10">
                Join Our Waitlist
              </button>
            </motion.div>
            
            {/* Right Content - Phone Mockups */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="relative z-10 lg:w-1/2 h-[400px] lg:h-full mt-16 lg:mt-0 hidden md:block"
            >
              {/* Back Phone - Dashboard/DocuShare */}
              <div className="absolute right-4 lg:-right-12 top-10 lg:-top-10 w-[260px] lg:w-[300px] h-[540px] lg:h-[620px] bg-slate-900 rounded-[2.5rem] lg:rounded-[3rem] border-[6px] lg:border-[8px] border-slate-800 shadow-2xl transform rotate-12 overflow-hidden opacity-90">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-3xl w-1/2 mx-auto z-20"></div>
                {/* Mini Dashboard UI */}
                <div className="w-full h-full p-4 pt-10 flex flex-col gap-4 relative">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="w-20 h-4 bg-slate-700 rounded-full"></div>
                    <div className="w-6 h-6 rounded-full bg-slate-700"></div>
                  </div>
                  {/* Search/Filter */}
                  <div className="w-full h-8 bg-slate-800 rounded-lg border border-slate-700 flex items-center px-3">
                    <div className="w-4 h-4 rounded-full border-2 border-slate-500"></div>
                    <div className="w-1/2 h-2 bg-slate-600 rounded-full ml-2"></div>
                  </div>
                  {/* DocuShare Templates List */}
                  <div className="space-y-3 mt-2">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="w-full h-14 bg-slate-800 rounded-xl border border-slate-700 flex items-center px-3 gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#D4FF3E]/20 flex items-center justify-center">
                          <div className="w-4 h-4 bg-[#D4FF3E] rounded-sm"></div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="w-3/4 h-2 bg-slate-300 rounded-full"></div>
                          <div className="w-1/2 h-2 bg-slate-500 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Front Phone - Landing Page */}
              <div className="absolute right-32 lg:right-32 top-20 lg:top-10 w-[260px] lg:w-[300px] h-[540px] lg:h-[620px] bg-slate-900 rounded-[2.5rem] lg:rounded-[3rem] border-[6px] lg:border-[8px] border-slate-800 shadow-2xl transform -rotate-6 overflow-hidden z-10">
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-3xl w-1/2 mx-auto z-20"></div>
                {/* Mini Landing Page UI */}
                <div className="w-full h-full p-4 pt-10 flex flex-col gap-4 relative overflow-y-hidden">
                  {/* Navbar */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-[#D4FF3E] flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-slate-900"></div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-4 h-1 bg-slate-700 rounded-full"></div>
                      <div className="w-4 h-1 bg-slate-700 rounded-full"></div>
                      <div className="w-4 h-1 bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                  {/* Hero Section */}
                  <div className="space-y-3 mt-2 text-center flex flex-col items-center">
                    <div className="w-24 h-4 bg-[#D4FF3E]/20 rounded-full border border-[#D4FF3E]/30"></div>
                    <div className="w-full h-8 bg-white rounded-md mt-2"></div>
                    <div className="w-4/5 h-8 bg-white rounded-md"></div>
                    <div className="w-3/4 h-3 bg-slate-400 rounded-full mt-2"></div>
                    <div className="w-1/2 h-3 bg-slate-400 rounded-full"></div>
                    <div className="w-full h-10 bg-[#D4FF3E] rounded-xl mt-4"></div>
                  </div>
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="h-28 bg-slate-800 rounded-2xl border border-slate-700 p-3 flex flex-col justify-between">
                       <div className="w-8 h-8 rounded-full bg-[#D4FF3E]/20 flex items-center justify-center">
                         <div className="w-4 h-4 bg-[#D4FF3E] rounded-full"></div>
                       </div>
                       <div className="space-y-1.5">
                         <div className="w-3/4 h-2 bg-white rounded-full"></div>
                         <div className="w-1/2 h-1.5 bg-slate-500 rounded-full"></div>
                       </div>
                    </div>
                    <div className="h-28 bg-slate-800 rounded-2xl border border-slate-700 p-3 flex flex-col justify-between">
                       <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                         <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
                       </div>
                       <div className="space-y-1.5">
                         <div className="w-3/4 h-2 bg-white rounded-full"></div>
                         <div className="w-1/2 h-1.5 bg-slate-500 rounded-full"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-800 border border-slate-700 rounded-[3rem] p-12 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row-reverse items-center justify-between min-h-[600px]">
            
            {/* Right Content (Text) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="relative z-20 lg:w-1/2 max-w-2xl lg:pl-12"
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D4FF3E]/10 text-[#D4FF3E] text-sm font-semibold mb-6 border border-[#D4FF3E]/20">
                Coming Soon
              </div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Inside the<br />Growth Platform
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed font-medium">
                We are currently building a comprehensive digital workspace specifically for small businesses. Soon, you'll be able to access the tools, resources, and strategic support you need 24/7.
              </p>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Globe size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Web Application</h4>
                    <p className="text-slate-400 leading-relaxed">An all-in-one platform aimed to provide you with 360-degree coverage of your business operations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <FileText size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Business Resources</h4>
                    <p className="text-slate-400 leading-relaxed">Providing comprehensive resources, templates, and tools to help you run your business efficiently.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Briefcase size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Tailored Services</h4>
                    <p className="text-slate-400 leading-relaxed">Expert consulting and operational services specifically tailored to meet the unique needs of small businesses.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Headset size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">24/7 Partnership</h4>
                    <p className="text-slate-400 leading-relaxed">A dedicated partnership providing you with everything needed to run your business successfully at any time.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            {/* Left Content - Visuals */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="relative z-10 lg:w-1/2 h-[400px] lg:h-full mt-16 lg:mt-0 hidden md:block"
            >
              {/* Dashboard UI Mockup */}
              <div className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-slate-900 rounded-r-[2rem] border-y-[8px] border-r-[8px] border-slate-800 shadow-2xl overflow-hidden z-10">
                {/* Browser/App Chrome */}
                <div className="w-full h-12 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                  <div className="ml-4 w-1/3 h-6 bg-slate-900 rounded-md border border-slate-700"></div>
                </div>
                {/* App Content */}
                <div className="flex h-full">
                  {/* Sidebar */}
                  <div className="w-48 h-full bg-slate-800/50 border-r border-slate-700 p-4 flex flex-col gap-4">
                    <div className="w-full h-8 bg-[#D4FF3E]/20 rounded-md border border-[#D4FF3E]/30"></div>
                    <div className="w-3/4 h-4 bg-slate-700 rounded mt-4"></div>
                    <div className="w-full h-4 bg-slate-700 rounded"></div>
                    <div className="w-5/6 h-4 bg-slate-700 rounded"></div>
                    <div className="w-full h-4 bg-slate-700 rounded"></div>
                  </div>
                  {/* Main Content */}
                  <div className="flex-1 p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                      <div className="w-48 h-8 bg-slate-700 rounded-lg"></div>
                      <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 bg-slate-800 rounded-xl border border-slate-700 p-4">
                        <div className="w-8 h-8 rounded-full bg-[#D4FF3E]/20 mb-3"></div>
                        <div className="w-1/2 h-4 bg-slate-600 rounded"></div>
                      </div>
                      <div className="h-24 bg-slate-800 rounded-xl border border-slate-700 p-4">
                        <div className="w-8 h-8 rounded-full bg-[#D4FF3E]/20 mb-3"></div>
                        <div className="w-1/2 h-4 bg-slate-600 rounded"></div>
                      </div>
                      <div className="h-24 bg-slate-800 rounded-xl border border-slate-700 p-4">
                        <div className="w-8 h-8 rounded-full bg-[#D4FF3E]/20 mb-3"></div>
                        <div className="w-1/2 h-4 bg-slate-600 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-slate-800 rounded-xl border border-slate-700 p-4">
                      <div className="w-32 h-6 bg-slate-700 rounded mb-4"></div>
                      <div className="w-full h-32 bg-slate-700/50 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* DocuShare */}
      <section id="docushare" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-800 border border-slate-700 rounded-[3rem] p-12 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between min-h-[600px]">
            
            {/* Left Content (Text) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="relative z-20 lg:w-1/2 max-w-2xl lg:pr-12"
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D4FF3E]/10 text-[#D4FF3E] text-sm font-semibold mb-6 border border-[#D4FF3E]/20">
                The Digital Hub
              </div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Introducing<br />DocuShare
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed font-medium">
                An on-demand document generation service. Get the documents you need, whenever you want. Over 500 templates, industry-specific Toolkits, and comprehensive Documentation Suites.
              </p>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <FileText size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">500+ Templates</h4>
                    <p className="text-slate-400 leading-relaxed">A massive library of ready-to-use documents covering every aspect of business operations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Briefcase size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Industry Toolkits</h4>
                    <p className="text-slate-400 leading-relaxed">Tailored toolkits designed for specific industries or operational needs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Shield size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Documentation Suites</h4>
                    <p className="text-slate-400 leading-relaxed">Comprehensive suites to ensure you have all your bases covered securely.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Zap size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Customisation</h4>
                    <p className="text-slate-400 leading-relaxed">Bespoke customisation services to tailor documents precisely to your clients' needs.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            {/* Right Content - Visuals */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="relative z-10 lg:w-1/2 h-[400px] lg:h-full mt-16 lg:mt-0 hidden md:block"
            >
              {/* DocuShare UI Mockup */}
              <div className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-slate-900 rounded-l-[2rem] border-y-[8px] border-l-[8px] border-slate-800 shadow-2xl overflow-hidden z-10">
                {/* Browser/App Chrome */}
                <div className="w-full h-12 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                  <div className="ml-4 w-1/3 h-6 bg-slate-900 rounded-md border border-slate-700 flex items-center px-2">
                    <div className="w-3 h-3 rounded-full border-2 border-slate-500"></div>
                  </div>
                </div>
                {/* App Content */}
                <div className="flex h-full">
                  {/* Sidebar */}
                  <div className="w-48 h-full bg-slate-800/50 border-r border-slate-700 p-4 flex flex-col gap-4">
                    <div className="w-full h-8 bg-[#D4FF3E]/20 rounded-md border border-[#D4FF3E]/30"></div>
                    <div className="w-3/4 h-4 bg-slate-700 rounded mt-4"></div>
                    <div className="w-full h-4 bg-slate-700 rounded"></div>
                    <div className="w-5/6 h-4 bg-slate-700 rounded"></div>
                  </div>
                  {/* Main Content - Document Grid */}
                  <div className="flex-1 p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                      <div className="w-48 h-8 bg-slate-700 rounded-lg"></div>
                      <div className="w-24 h-8 bg-[#D4FF3E] rounded-lg"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-32 bg-slate-800 rounded-xl border border-slate-700 p-4 flex flex-col">
                          <div className="w-10 h-10 rounded-lg bg-slate-700 mb-3 flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-slate-500 rounded-sm"></div>
                          </div>
                          <div className="w-3/4 h-3 bg-slate-600 rounded mb-2"></div>
                          <div className="w-1/2 h-2 bg-slate-500 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>



      {/* Partner Offers */}
      <section id="offers" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-800 border border-slate-700 rounded-[3rem] p-12 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row-reverse items-center justify-between min-h-[600px]">
            
            {/* Right Content (Text) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="relative z-20 lg:w-1/2 max-w-2xl lg:pl-12"
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D4FF3E]/10 text-[#D4FF3E] text-sm font-semibold mb-6 border border-[#D4FF3E]/20">
                The Growth Arsenal
              </div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Exclusive Partner<br />Offers
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed font-medium">
                Access a range of different service providers aimed to provide discounts or special offers on anything from Insurance and Financing to everyday business needs.
              </p>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Gift size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Insurance & Financing</h4>
                    <p className="text-slate-400 leading-relaxed">Discounts on essential business insurance and financing options.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Headset size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Everyday Business Needs</h4>
                    <p className="text-slate-400 leading-relaxed">Special offers on software, office supplies, and everyday operational tools.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Calendar size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Professional Services</h4>
                    <p className="text-slate-400 leading-relaxed">Reduced rates on legal, accounting, and specialized consulting services.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Network size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Marketing & Sales</h4>
                    <p className="text-slate-400 leading-relaxed">Exclusive deals on marketing platforms, CRM tools, and lead generation services.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <FileText size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Technology & Hardware</h4>
                    <p className="text-slate-400 leading-relaxed">Discounts on laptops, servers, and IT infrastructure setup.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Rocket size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Travel & Accommodations</h4>
                    <p className="text-slate-400 leading-relaxed">Corporate rates for business travel, hotels, and co-working spaces globally.</p>
                  </div>
                </li>
              </ul>
              
              <button onClick={() => setIsWaitlistModalOpen(true)} className="inline-flex items-center gap-2 bg-[#D4FF3E] text-slate-950 px-6 py-3 rounded-full font-bold hover:bg-[#bce62d] transition-colors">
                Join Our Waitlist <ArrowRight size={20} />
              </button>
            </motion.div>
            
            {/* Left Content - Visuals */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="relative z-10 lg:w-1/2 h-[400px] lg:h-full mt-16 lg:mt-0 hidden md:block"
            >
              {/* Offers UI Mockup */}
              <div className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-slate-900 rounded-r-[2rem] border-y-[8px] border-r-[8px] border-slate-800 shadow-2xl overflow-hidden z-10">
                {/* Browser/App Chrome */}
                <div className="w-full h-12 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                  <div className="ml-4 w-1/3 h-6 bg-slate-900 rounded-md border border-slate-700"></div>
                </div>
                {/* App Content */}
                <div className="relative p-8 flex flex-col items-center justify-center h-[calc(100%-3rem)] bg-slate-900 overflow-hidden">
                  {/* Background Glows */}
                  <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4FF3E]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                  
                  {/* Big Discount Card */}
                  <div className="w-full max-w-md bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden relative z-10 flex flex-col">
                    {/* Top Accent */}
                    <div className="h-2 w-full bg-gradient-to-r from-[#D4FF3E] to-green-400"></div>
                    
                    <div className="p-8 flex flex-col items-center text-center">
                      {/* Badge */}
                      <div className="px-4 py-1.5 bg-[#D4FF3E]/10 border border-[#D4FF3E]/20 rounded-full mb-6 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#D4FF3E]"></div>
                        <div className="w-24 h-2 bg-[#D4FF3E]/80 rounded-full"></div>
                      </div>
                      
                      {/* Big Value */}
                      <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-20 h-24 bg-slate-700 rounded-xl border border-slate-600 shadow-inner flex items-center justify-center">
                          <div className="w-8 h-12 bg-slate-600 rounded-md"></div>
                        </div>
                        <div className="w-20 h-24 bg-slate-700 rounded-xl border border-slate-600 shadow-inner flex items-center justify-center">
                          <div className="w-8 h-12 bg-slate-600 rounded-md"></div>
                        </div>
                        <div className="w-12 h-24 bg-slate-700/50 rounded-xl border border-slate-600/50 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-slate-600"></div>
                        </div>
                      </div>
                      
                      {/* Text lines */}
                      <div className="w-3/4 h-4 bg-slate-300 rounded-full mb-3"></div>
                      <div className="w-1/2 h-3 bg-slate-500 rounded-full mb-8"></div>
                      
                      {/* Coupon Box */}
                      <div className="w-full border-2 border-dashed border-slate-600 rounded-xl p-4 flex justify-between items-center mb-6 bg-slate-900/50 relative">
                        {/* Cutouts */}
                        <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-800 rounded-full border-r-2 border-dashed border-slate-600"></div>
                        <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-800 rounded-full border-l-2 border-dashed border-slate-600"></div>
                        
                        <div className="w-32 h-6 bg-slate-500 rounded"></div>
                        <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-slate-400 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="w-full h-14 bg-[#D4FF3E] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,255,62,0.2)]">
                        <div className="w-32 h-4 bg-slate-900 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-800 border border-slate-700 rounded-[3rem] p-12 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between min-h-[600px]">
            
            {/* Left Content (Text) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="relative z-20 lg:w-1/2 max-w-2xl lg:pr-12"
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D4FF3E]/10 text-[#D4FF3E] text-sm font-semibold mb-6 border border-[#D4FF3E]/20">
                Core Services
              </div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Our Core<br />Services
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed font-medium">
                Standout consulting services designed to put you in control of your business. From strategic planning to seamless operations.
              </p>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Target size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Operations</h4>
                    <p className="text-slate-400 leading-relaxed">Streamlining workflows and eliminating bottlenecks to maximise efficiency and reduce unnecessary overhead.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Briefcase size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Management</h4>
                    <p className="text-slate-400 leading-relaxed">Long-term vision mapping and actionable growth strategies to ensure your business stays ahead of the curve.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <TrendingUp size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Change Management</h4>
                    <p className="text-slate-400 leading-relaxed">Navigate organisational transitions smoothly with proven methodologies and stakeholder alignment.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Zap size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">AI Advisory</h4>
                    <p className="text-slate-400 leading-relaxed">Leverage cutting-edge AI tools to automate tasks, gain insights, and future-proof your business operations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Users size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Human Resources</h4>
                    <p className="text-slate-400 leading-relaxed">Optimise your workforce with tailored HR strategies, talent acquisition, and performance management.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-[#D4FF3E]/10 flex items-center justify-center flex-shrink-0 border border-[#D4FF3E]/20">
                    <Globe size={20} className="text-[#D4FF3E]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Customised Solutions</h4>
                    <p className="text-slate-400 leading-relaxed">Bespoke consulting and advisory services designed specifically for your unique business challenges.</p>
                  </div>
                </li>
              </ul>
              
              <button onClick={() => setIsWaitlistModalOpen(true)} className="inline-flex items-center gap-2 bg-[#D4FF3E] text-slate-950 px-6 py-3 rounded-full font-bold hover:bg-[#bce62d] transition-colors">
                Join Our Waitlist <ArrowRight size={20} />
              </button>
            </motion.div>
            
            {/* Right Content - Visuals */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="relative z-10 lg:w-1/2 h-[400px] lg:h-full mt-16 lg:mt-0 hidden md:block"
            >
              {/* Services UI Mockup */}
              <div className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-slate-900 rounded-l-[2rem] border-y-[8px] border-l-[8px] border-slate-800 shadow-2xl overflow-hidden z-10">
                {/* Browser/App Chrome */}
                <div className="w-full h-12 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                  <div className="ml-4 w-1/3 h-6 bg-slate-900 rounded-md border border-slate-700 flex items-center px-3">
                    <div className="w-3 h-3 rounded-full border-2 border-slate-500"></div>
                  </div>
                </div>
                {/* App Content */}
                <div className="flex h-full bg-slate-900">
                  {/* Sidebar */}
                  <div className="w-16 h-full bg-slate-800/80 border-r border-slate-700 p-4 flex flex-col items-center gap-6">
                    <div className="w-8 h-8 rounded-lg bg-[#D4FF3E] flex items-center justify-center">
                      <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
                    </div>
                    <div className="w-6 h-6 rounded-md bg-slate-700"></div>
                    <div className="w-6 h-6 rounded-md bg-slate-700"></div>
                    <div className="w-6 h-6 rounded-md bg-slate-700"></div>
                  </div>
                  {/* Main Content - Kanban Board */}
                  <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="w-48 h-6 bg-slate-700 rounded mb-2"></div>
                        <div className="w-32 h-3 bg-slate-500 rounded"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-slate-700 rounded-full border-2 border-slate-800"></div>
                        <div className="w-8 h-8 bg-slate-700 rounded-full border-2 border-slate-800 -ml-4"></div>
                        <div className="w-8 h-8 bg-[#D4FF3E]/20 text-[#D4FF3E] rounded-full border-2 border-slate-800 -ml-4 flex items-center justify-center text-xs">+3</div>
                      </div>
                    </div>
                    {/* Board Columns */}
                    <div className="flex gap-4 h-full">
                      {/* Column 1: Strategy */}
                      <div className="flex-1 bg-slate-800/50 rounded-xl border border-slate-700 p-3 flex flex-col gap-3">
                        <div className="flex justify-between items-center mb-1">
                          <div className="w-24 h-4 bg-slate-600 rounded"></div>
                          <div className="w-6 h-4 bg-slate-700 rounded"></div>
                        </div>
                        {/* Card 1 */}
                        <div className="bg-slate-800 rounded-lg p-3 border border-slate-600 shadow-sm">
                          <div className="w-16 h-2 bg-[#D4FF3E] rounded-full mb-3"></div>
                          <div className="w-full h-3 bg-slate-400 rounded mb-2"></div>
                          <div className="w-3/4 h-3 bg-slate-400 rounded mb-4"></div>
                          <div className="flex justify-between items-center">
                            <div className="w-6 h-6 bg-slate-700 rounded-full"></div>
                            <div className="w-12 h-2 bg-slate-600 rounded"></div>
                          </div>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-slate-800 rounded-lg p-3 border border-slate-600 shadow-sm">
                          <div className="w-16 h-2 bg-purple-400 rounded-full mb-3"></div>
                          <div className="w-5/6 h-3 bg-slate-400 rounded mb-2"></div>
                          <div className="w-1/2 h-3 bg-slate-400 rounded mb-4"></div>
                          <div className="flex justify-between items-center">
                            <div className="w-6 h-6 bg-slate-700 rounded-full"></div>
                            <div className="w-12 h-2 bg-slate-600 rounded"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Column 2: Operations */}
                      <div className="flex-1 bg-slate-800/50 rounded-xl border border-slate-700 p-3 flex flex-col gap-3">
                        <div className="flex justify-between items-center mb-1">
                          <div className="w-24 h-4 bg-slate-600 rounded"></div>
                          <div className="w-6 h-4 bg-slate-700 rounded"></div>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-slate-800 rounded-lg p-3 border border-slate-600 shadow-sm">
                          <div className="w-16 h-2 bg-blue-400 rounded-full mb-3"></div>
                          <div className="w-full h-3 bg-slate-400 rounded mb-2"></div>
                          <div className="w-2/3 h-3 bg-slate-400 rounded mb-4"></div>
                          <div className="flex justify-between items-center">
                            <div className="flex -space-x-2">
                              <div className="w-6 h-6 bg-slate-700 rounded-full border border-slate-800"></div>
                              <div className="w-6 h-6 bg-slate-600 rounded-full border border-slate-800"></div>
                            </div>
                            <div className="w-12 h-2 bg-slate-600 rounded"></div>
                          </div>
                        </div>
                      </div>

                      {/* Column 3: Review */}
                      <div className="flex-1 bg-slate-800/50 rounded-xl border border-slate-700 p-3 flex flex-col gap-3">
                        <div className="flex justify-between items-center mb-1">
                          <div className="w-24 h-4 bg-slate-600 rounded"></div>
                          <div className="w-6 h-4 bg-slate-700 rounded"></div>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-slate-800 rounded-lg p-3 border border-slate-600 shadow-sm opacity-60">
                          <div className="w-16 h-2 bg-green-400 rounded-full mb-3"></div>
                          <div className="w-4/5 h-3 bg-slate-400 rounded mb-2"></div>
                          <div className="w-1/2 h-3 bg-slate-400 rounded mb-4"></div>
                          <div className="flex justify-between items-center">
                            <div className="w-6 h-6 bg-slate-700 rounded-full"></div>
                            <div className="w-12 h-2 bg-slate-600 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>





      {/* Who We Are Section */}
      <section id="who-we-are" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-800 border border-slate-700 rounded-[3rem] p-12 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row-reverse items-center justify-between min-h-[600px]">
            
            {/* Right Content (Text) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }} 
              className="relative z-20 lg:w-1/2 max-w-2xl lg:pl-12"
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D4FF3E]/10 text-[#D4FF3E] text-sm font-semibold mb-6 border border-[#D4FF3E]/20">
                About Us
              </div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Who We<br />Are
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed font-medium">
                As your dedicated Remote Business Partner, we are revolutionising business advisory and consulting for small to medium enterprises. By combining expert strategic guidance with cost-effective, process-driven operational frameworks, we empower you to scale efficiently. Say goodbye to the bloat of traditional consulting and hello to actionable insights, streamlined workflows, and real, measurable growth.
              </p>
              
              <button onClick={() => setIsWaitlistModalOpen(true)} className="inline-flex items-center gap-2 bg-[#D4FF3E] text-slate-950 px-6 py-3 rounded-full font-bold hover:bg-[#bce62d] transition-colors">
                Join Our Waitlist <ArrowRight size={20} />
              </button>
            </motion.div>
            
            {/* Left Content - Visuals */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="relative z-10 lg:w-1/2 h-[400px] lg:h-full mt-16 lg:mt-0 hidden md:block"
            >
              {/* Team UI Mockup */}
              <div className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-slate-900 rounded-r-[2rem] border-y-[8px] border-r-[8px] border-slate-800 shadow-2xl overflow-hidden z-10">
                {/* Browser/App Chrome */}
                <div className="w-full h-12 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                  <div className="ml-4 w-1/3 h-6 bg-slate-900 rounded-md border border-slate-700"></div>
                </div>
                {/* App Content */}
                <div className="flex h-full">
                  {/* Sidebar - Contacts */}
                  <div className="w-56 h-full bg-slate-800/50 border-r border-slate-700 p-4 flex flex-col gap-4">
                    <div className="w-full h-8 bg-slate-700 rounded-md mb-2"></div>
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-700 relative">
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#D4FF3E] rounded-full border-2 border-slate-800"></div>
                        </div>
                        <div className="flex-1">
                          <div className="w-24 h-3 bg-slate-500 rounded mb-1.5"></div>
                          <div className="w-16 h-2 bg-slate-600 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Main Content - Chat/Collab */}
                  <div className="flex-1 flex flex-col">
                    <div className="h-16 border-b border-slate-700 flex items-center px-6 gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                      <div>
                        <div className="w-32 h-4 bg-slate-500 rounded mb-1.5"></div>
                        <div className="w-20 h-2 bg-[#D4FF3E]/70 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1 p-6 flex flex-col gap-4">
                      <div className="self-start max-w-[80%] bg-slate-800 p-4 rounded-2xl rounded-tl-sm border border-slate-700">
                        <div className="w-48 h-3 bg-slate-400 rounded mb-2"></div>
                        <div className="w-32 h-3 bg-slate-400 rounded"></div>
                      </div>
                      <div className="self-end max-w-[80%] bg-[#D4FF3E]/10 p-4 rounded-2xl rounded-tr-sm border border-[#D4FF3E]/20">
                        <div className="w-56 h-3 bg-[#D4FF3E]/80 rounded mb-2"></div>
                        <div className="w-40 h-3 bg-[#D4FF3E]/80 rounded"></div>
                      </div>
                      <div className="self-start max-w-[80%] bg-slate-800 p-4 rounded-2xl rounded-tl-sm border border-slate-700">
                        <div className="w-64 h-3 bg-slate-400 rounded mb-2"></div>
                        <div className="w-48 h-3 bg-slate-400 rounded"></div>
                      </div>
                    </div>
                    <div className="h-16 border-t border-slate-700 p-3">
                      <div className="w-full h-full bg-slate-800 rounded-lg border border-slate-600 flex items-center px-4">
                        <div className="w-4 h-4 bg-slate-500 rounded-sm"></div>
                        <div className="w-32 h-3 bg-slate-600 rounded ml-3"></div>
                        <div className="w-16 h-6 bg-[#D4FF3E] rounded-md ml-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4FF3E]/5 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-slate-800/20 blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">Let's build something great together.</h2>
              <p className="text-xl text-slate-400 mb-10">Ready to scale your operations? Get in touch with our team of experts to schedule a discovery call.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                    <Mail className="text-[#D4FF3E]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Email Us</h4>
                    <p className="text-slate-400">info@remotebusinesspartner.com.au</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                    <MapPin className="text-[#D4FF3E]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Location</h4>
                    <p className="text-slate-400">Perth, Australia<br/>(Remote Worldwide)</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
              <form 
                className="space-y-6" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const firstName = formData.get('firstName');
                  const lastName = formData.get('lastName');
                  const email = formData.get('email');
                  const company = formData.get('company');
                  const message = formData.get('message');
                  
                  const body = `First Name: ${firstName}\nLast Name: ${lastName}\nWork Email: ${email}\nCompany Name: ${company}\n\nHow can we help you?\n${message}`;
                  
                  window.location.href = `mailto:info@remotebusinesspartner.com.au?subject=${encodeURIComponent('New Website Lead')}&body=${encodeURIComponent(body)}`;
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                    <input name="firstName" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#D4FF3E] focus:border-transparent transition-all text-white placeholder-slate-500" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                    <input name="lastName" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#D4FF3E] focus:border-transparent transition-all text-white placeholder-slate-500" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Work Email</label>
                  <input name="email" required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#D4FF3E] focus:border-transparent transition-all text-white placeholder-slate-500" placeholder="john@company.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                  <input name="company" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#D4FF3E] focus:border-transparent transition-all text-white placeholder-slate-500" placeholder="Acme Corp" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">How can we help you?</label>
                  <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#D4FF3E] focus:border-transparent transition-all resize-none text-white placeholder-slate-500" placeholder="Tell us about your current operational challenges..."></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#D4FF3E] text-slate-950 py-4 rounded-xl font-bold hover:bg-[#bce62d] transition-all shadow-lg shadow-[#D4FF3E]/10">
                  Get In Contact
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <WaitlistModal 
        isOpen={isWaitlistModalOpen} 
        onClose={() => setIsWaitlistModalOpen(false)} 
      />
    </>
  );
};
