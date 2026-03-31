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
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4FF3E]/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D4FF3E]/10 rounded-full blur-[120px]"></div>
          {/* Faint crosshairs/grid lines from screenshot */}
          <div className="absolute top-32 left-32 w-8 h-8 border-l border-t border-slate-700"></div>
          <div className="absolute top-32 right-32 w-8 h-8 border-r border-t border-slate-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 p-1 pr-4 rounded-full bg-white/5 border border-slate-700 text-white text-sm font-medium mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer">
              <span className="px-3 py-1 rounded-full bg-white text-black text-xs font-bold">New</span>
              <span>No Hidden Pricing <ArrowRight size={14} className="inline ml-1" /></span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] text-white mb-6 tracking-tight">
              Redefining Business <br className="hidden md:block" />
              Advisory for Small Businesses
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Delivering cost-effective, process-driven solutions that create real impact.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <button onClick={() => setIsWaitlistModalOpen(true)} className="w-full sm:w-auto bg-[#D4FF3E] text-slate-950 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#bce62d] transition-colors">
                Join Our Waitlist <ArrowRight size={20} />
              </button>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="w-full sm:w-auto bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-700 transition-colors">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-slate-900 border-b-[4px] border-b-transparent ml-0.5"></div>
                </div>
                Watch Demo
              </a>
            </div>
          </motion.div>
          
          {/* Bottom Visuals Grid */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-[1100px] mx-auto hidden lg:flex items-end justify-center gap-4 h-[360px]">
            
            {/* Card 1: Image */}
            <div className="relative w-[26%] h-full rounded-[2rem] overflow-hidden group bg-slate-800">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Abstract Tech" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute top-6 -right-2 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg z-10 transform -translate-x-4">
                <div className="w-2 h-2 bg-slate-900 rounded-sm"></div>
                <span className="text-slate-900 text-sm font-bold whitespace-nowrap">Advisory Platform</span>
              </div>
            </div>

            {/* Card 2: 200+ */}
            <div className="w-[17%] h-[75%] bg-white rounded-[2rem] p-6 flex flex-col justify-center items-center text-center shadow-xl">
              <h3 className="text-4xl xl:text-5xl font-bold text-slate-900 mb-3">200+</h3>
              <p className="text-slate-500 font-medium text-sm leading-snug">
                Our Esteemed<br />Clients and Partners
              </p>
            </div>

            {/* Card 3: Lock */}
            <div className="w-[16%] h-[75%] bg-slate-800 rounded-[2rem] p-6 relative overflow-hidden border border-slate-700 shadow-xl">
              <h4 className="text-white font-bold text-lg leading-tight relative z-10">Trusted &<br />Transparent<br />Growth</h4>
              <div className="absolute -bottom-8 -right-8 text-slate-900 opacity-80">
                <Shield size={140} strokeWidth={1.5} fill="currentColor" />
              </div>
            </div>

            {/* Card 4: Chart */}
            <div className="w-[16%] h-[75%] bg-slate-800 rounded-[2rem] p-6 relative overflow-hidden border border-slate-700 shadow-xl flex flex-col justify-between">
              <h4 className="text-white font-bold text-lg leading-tight relative z-10">Trusted &<br />Transparent<br />Growth</h4>
              <div className="flex items-end gap-2 h-20 mt-4 relative z-10">
                <div className="flex-1 bg-white/10 rounded-t-md h-[40%]"></div>
                <div className="flex-1 bg-white/10 rounded-t-md h-[30%]"></div>
                <div className="flex-1 bg-[#D4FF3E] rounded-t-md h-[90%] shadow-[0_0_15px_rgba(212,255,62,0.3)]"></div>
                <div className="flex-1 bg-white/10 rounded-t-md h-[60%]"></div>
              </div>
            </div>

            {/* Card 5: Global */}
            <div className="w-[25%] h-full bg-white rounded-[2rem] p-8 relative overflow-hidden flex flex-col shadow-xl">
              <h3 className="text-4xl xl:text-5xl font-bold text-slate-900 mb-2">20+</h3>
              <p className="text-slate-500 font-medium text-sm mb-6">Industry Partners driving innovation</p>
              <div className="flex flex-wrap gap-2 mb-auto relative z-10">
                <span className="bg-slate-900 text-[#D4FF3E] text-xs font-bold px-3 py-1.5 rounded-full">Mexico</span>
                <span className="bg-slate-900 text-[#D4FF3E] text-xs font-bold px-3 py-1.5 rounded-full">Australia</span>
              </div>
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-slate-100 rounded-full opacity-50"></div>
              <Globe size={200} className="absolute -bottom-12 -right-12 text-slate-100" strokeWidth={1} />
            </div>

          </motion.div>

          {/* Mobile version of the grid */}
          <div className="mt-12 flex flex-col gap-4 lg:hidden">
             <div className="w-full h-[250px] rounded-[2rem] overflow-hidden group bg-slate-800 relative">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Abstract Tech" className="w-full h-full object-cover grayscale opacity-80" referrerPolicy="no-referrer" />
              <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 bg-slate-900 rounded-sm"></div>
                <span className="text-slate-900 text-sm font-bold">Advisory Platform</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-[2rem] p-6 flex flex-col justify-center items-center text-center shadow-xl">
                <h3 className="text-4xl font-bold text-slate-900 mb-2">200+</h3>
                <p className="text-slate-500 font-medium text-xs">Our Esteemed Clients</p>
              </div>
              <div className="bg-slate-800 rounded-[2rem] p-6 relative overflow-hidden border border-slate-700 shadow-xl flex flex-col justify-between">
                <h4 className="text-white font-bold text-sm relative z-10">Trusted Growth</h4>
                <div className="flex items-end gap-1 h-12 mt-4 relative z-10">
                  <div className="flex-1 bg-white/10 rounded-t-sm h-[40%]"></div>
                  <div className="flex-1 bg-[#D4FF3E] rounded-t-sm h-[90%]"></div>
                  <div className="flex-1 bg-white/10 rounded-t-sm h-[60%]"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4FF3E]/5 rounded-full blur-[120px]"
          ></motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-20">
            <div className="w-full lg:w-1/3 sticky top-24 self-start">
              <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">Who We Are</h2>
            </div>
            <div className="w-full lg:w-2/3">
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
                As your dedicated Remote Business Partner, we are revolutionising business advisory and consulting for small to medium enterprises. By combining expert strategic guidance with cost-effective, process-driven operational frameworks, we empower you to scale efficiently. Say goodbye to the bloat of traditional consulting and hello to actionable insights, streamlined workflows, and real, measurable growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* Image 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-800 border border-slate-700"
            >
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Data visualization" className="w-full h-full object-cover grayscale opacity-80" referrerPolicy="no-referrer" />
            </motion.div>
            {/* Image 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-800 border border-slate-700"
            >
              <img src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=2070&auto=format&fit=crop" alt="Abstract geometry" className="w-full h-full object-cover grayscale opacity-80" referrerPolicy="no-referrer" />
            </motion.div>
            {/* Image 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-800 border border-slate-700"
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team collaboration" className="w-full h-full object-cover grayscale opacity-80" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20 text-center flex flex-col items-center">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white max-w-3xl leading-[0.95] tracking-tighter">
              Inside the<br />Growth Platform
            </h2>
            <p className="text-slate-400 mt-6 max-w-2xl text-lg">
              A comprehensive digital workspace built specifically for small businesses. Access the tools, resources, and strategic support you need 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-800 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center min-h-[340px] border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="text-[#D4FF3E] mb-8">
                <FileText size={32} strokeWidth={1.2} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-auto leading-tight tracking-tight">
                DocuShare<br />Portal
              </h3>
              <p className="text-slate-400 mt-12 leading-relaxed text-sm md:text-base">
                Instantly access over 500+ premium templates, industry-specific toolkits, and complete documentation suites.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-800 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center min-h-[340px] border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="text-[#D4FF3E] mb-8">
                <Gift size={32} strokeWidth={1.2} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-auto leading-tight tracking-tight">
                Partner<br />Network
              </h3>
              <p className="text-slate-400 mt-12 leading-relaxed text-sm md:text-base">
                Unlock exclusive discounts and special offers on insurance, financing, software, and everyday business tools.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-800 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center min-h-[340px] border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="text-[#D4FF3E] mb-8">
                <Globe size={32} strokeWidth={1.2} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-auto leading-tight tracking-tight">
                Strategic<br />Dashboard
              </h3>
              <p className="text-slate-400 mt-12 leading-relaxed text-sm md:text-base">
                Track your business growth, manage ongoing tasks, and view real-time operational insights all in one place.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-800 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center min-h-[340px] border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="text-[#D4FF3E] mb-8">
                <Briefcase size={32} strokeWidth={1.2} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-auto leading-tight tracking-tight">
                Automated<br />Workflows
              </h3>
              <p className="text-slate-400 mt-12 leading-relaxed text-sm md:text-base">
                Streamline your daily operations with plug-and-play frameworks and automated processes tailored for efficiency.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-800 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center min-h-[340px] border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="text-[#D4FF3E] mb-8">
                <Zap size={32} strokeWidth={1.2} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-auto leading-tight tracking-tight">
                AI Advisory<br />Tools
              </h3>
              <p className="text-slate-400 mt-12 leading-relaxed text-sm md:text-base">
                Leverage cutting-edge AI integrations to analyse data, generate reports, and future-proof your business operations.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-800 rounded-3xl p-8 md:p-10 flex flex-col items-center text-center min-h-[340px] border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="text-[#D4FF3E] mb-8">
                <Users size={32} strokeWidth={1.2} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-auto leading-tight tracking-tight">
                Direct<br />Communication
              </h3>
              <p className="text-slate-400 mt-12 leading-relaxed text-sm md:text-base">
                Connect seamlessly with your dedicated Remote Business Partner anytime, anywhere through secure channels.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* DocuShare */}
      <section id="docushare" className="py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white max-w-xl leading-[1.1] tracking-tight">
              Introducing<br />DocuShare
            </h2>
            <p className="text-lg text-slate-400 max-w-md leading-relaxed">
              An on-demand document generation service. Get the documents you need, whenever you want. Over 500 templates, industry-specific Toolkits, and comprehensive Documentation Suites.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Image */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-[2rem] overflow-hidden h-full min-h-[400px] relative border border-slate-700"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Data and documents" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Card 1 - Lime */}
              <motion.div whileHover={{ y: -5 }} className="bg-[#D4FF3E] rounded-[2rem] p-8 flex flex-col">
                <div className="text-slate-950 mb-12">
                  <FileText size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">500+ Templates</h3>
                <p className="text-slate-800 leading-relaxed text-sm">
                  A massive library of ready-to-use documents covering every aspect of business operations.
                </p>
              </motion.div>
              
              {/* Card 2 - Dark */}
              <motion.div whileHover={{ y: -5 }} className="bg-slate-800 rounded-[2rem] p-8 flex flex-col border border-slate-700">
                <div className="text-white mb-12">
                  <Briefcase size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Industry Toolkits</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Tailored toolkits designed for specific industries or operational needs.
                </p>
              </motion.div>
              
              {/* Card 3 - Dark */}
              <motion.div whileHover={{ y: -5 }} className="bg-slate-800 rounded-[2rem] p-8 flex flex-col border border-slate-700">
                <div className="text-white mb-12">
                  <Shield size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Documentation Suites</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Comprehensive suites to ensure you have all your bases covered securely.
                </p>
              </motion.div>
              
              {/* Card 4 - Lime */}
              <motion.div whileHover={{ y: -5 }} className="bg-[#D4FF3E] rounded-[2rem] p-8 flex flex-col">
                <div className="text-slate-950 mb-12">
                  <Zap size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">Customisation</h3>
                <p className="text-slate-800 leading-relaxed text-sm">
                  Bespoke customisation services to tailor documents precisely to your clients' needs.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Application */}
      <section id="web-application" className="py-24 bg-slate-900 overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white max-w-xl leading-[1.1] tracking-tight">
              The Web<br />Application
            </h2>
            <p className="text-lg text-slate-400 max-w-md leading-relaxed">
              A powerful, centralised hub for your business. Manage tasks, access resources, and collaborate with your Remote Business Partner seamlessly from any device.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-6 order-2 lg:order-1">
              {/* Card 1 - Lime */}
              <motion.div whileHover={{ y: -5 }} className="bg-[#D4FF3E] rounded-[2rem] p-8 flex flex-col">
                <div className="text-slate-950 mb-12">
                  <BarChart3 size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">Central Dashboard</h3>
                <p className="text-slate-800 leading-relaxed text-sm">
                  Get a bird's-eye view of your business operations, key metrics, and ongoing projects in real-time.
                </p>
              </motion.div>
              
              {/* Card 2 - Dark */}
              <motion.div whileHover={{ y: -5 }} className="bg-slate-800 rounded-[2rem] p-8 flex flex-col border border-slate-700">
                <div className="text-white mb-12">
                  <CheckCircle size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Task Management</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Track progress, assign responsibilities, and hit your milestones with our intuitive task tracking system.
                </p>
              </motion.div>
              
              {/* Card 3 - Dark */}
              <motion.div whileHover={{ y: -5 }} className="bg-slate-800 rounded-[2rem] p-8 flex flex-col border border-slate-700">
                <div className="text-white mb-12">
                  <Lightbulb size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Integration</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Leverage smart insights and automated workflows to reduce manual work and scale efficiently.
                </p>
              </motion.div>
              
              {/* Card 4 - Lime */}
              <motion.div whileHover={{ y: -5 }} className="bg-[#D4FF3E] rounded-[2rem] p-8 flex flex-col">
                <div className="text-slate-950 mb-12">
                  <Shield size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">Secure Portal</h3>
                <p className="text-slate-800 leading-relaxed text-sm">
                  Safely communicate with your partner and store sensitive business documents with enterprise-grade security.
                </p>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-[2rem] overflow-hidden h-full min-h-[400px] relative border border-slate-700 order-1 lg:order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Web Application Dashboard" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Offers */}
      <section id="offers" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#D4FF3E]/5 rounded-full blur-[120px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="sticky top-24 self-start">
              <h2 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight max-w-2xl text-white">
                Exclusive Partner<br />Offers
              </h2>
            </div>
            <div className="max-w-md flex flex-col items-start md:pt-4">
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Access a range of different service providers aimed to provide discounts or special offers on anything from Insurance and Financing to everyday business needs.
              </p>
              <button onClick={() => setIsWaitlistModalOpen(true)} className="inline-flex items-center gap-2 bg-[#D4FF3E] text-slate-950 px-6 py-3 rounded-full font-bold hover:bg-[#bce62d] transition-colors">
                Join Our Waitlist <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Lime */}
            <motion.div whileHover={{ y: -10 }} className="bg-[#D4FF3E] rounded-[2rem] p-10 flex flex-col min-h-[480px] relative group">
              <div className="text-slate-950 mb-auto">
                <Gift size={48} strokeWidth={1.5} />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-bold text-slate-950 mb-4 tracking-tight">Insurance & Financing</h3>
                <p className="text-slate-800 leading-relaxed text-lg">
                  Discounts on essential business insurance and financing options.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Image */}
            <motion.div whileHover={{ y: -10 }} className="rounded-[2rem] p-10 flex flex-col min-h-[480px] relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Abstract data" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-80" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/20"></div>
              <div className="text-white mb-auto relative z-10">
                <Headset size={48} strokeWidth={1.5} />
              </div>
              <div className="mt-8 relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Everyday Business Needs</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Special offers on software, office supplies, and everyday operational tools.
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Dark */}
            <motion.div whileHover={{ y: -10 }} className="bg-slate-800 rounded-[2rem] p-10 flex flex-col min-h-[480px] relative group border border-slate-700">
              <div className="text-white mb-auto">
                <Calendar size={48} strokeWidth={1.5} />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Professional Services</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Reduced rates on legal, accounting, and specialized consulting services.
                </p>
              </div>
            </motion.div>

            {/* Card 4 - Dark */}
            <motion.div whileHover={{ y: -10 }} className="bg-slate-800 rounded-[2rem] p-10 flex flex-col min-h-[480px] relative group border border-slate-700">
              <div className="text-white mb-auto">
                <Network size={48} strokeWidth={1.5} />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Marketing & Sales</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Exclusive deals on marketing platforms, CRM tools, and lead generation services.
                </p>
              </div>
            </motion.div>

            {/* Card 5 - Lime */}
            <motion.div whileHover={{ y: -10 }} className="bg-[#D4FF3E] rounded-[2rem] p-10 flex flex-col min-h-[480px] relative group">
              <div className="text-slate-950 mb-auto">
                <FileText size={48} strokeWidth={1.5} />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-bold text-slate-950 mb-4 tracking-tight">Technology & Hardware</h3>
                <p className="text-slate-800 leading-relaxed text-lg">
                  Discounts on laptops, servers, and IT infrastructure setup.
                </p>
              </div>
            </motion.div>

            {/* Card 6 - Image */}
            <motion.div whileHover={{ y: -10 }} className="rounded-[2rem] p-10 flex flex-col min-h-[480px] relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=2070&auto=format&fit=crop" alt="Abstract geometry" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-80" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/20"></div>
              <div className="text-white mb-auto relative z-10">
                <Rocket size={48} strokeWidth={1.5} />
              </div>
              <div className="mt-8 relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Travel & Accommodations</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Corporate rates for business travel, hotels, and co-working spaces globally.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
          <motion.div 
            animate={{ 
              x: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4FF3E]/5 rounded-full blur-[120px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D4FF3E]/10 text-[#D4FF3E] text-sm font-semibold mb-6 border border-[#D4FF3E]/20">
              Core Services
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Here are Some of Our Core Services
            </h2>
            <p className="text-slate-400 text-lg md:text-xl">
              Standout consulting services designed to put you in control of your business. From strategic planning to seamless operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Top Row: 3 Cards */}
            <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 md:col-span-2 bg-slate-800 rounded-[2rem] p-10 border border-slate-700 hover:bg-slate-700 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#D4FF3E]/10 border border-[#D4FF3E]/20 flex items-center justify-center mb-8 text-[#D4FF3E] shadow-[0_0_15px_rgba(212,255,62,0.1)]">
                <Target size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Operations</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Streamlining workflows and eliminating bottlenecks to maximise efficiency and reduce unnecessary overhead.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 md:col-span-2 bg-slate-800 rounded-[2rem] p-10 border border-slate-700 hover:bg-slate-700 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#D4FF3E]/10 border border-[#D4FF3E]/20 flex items-center justify-center mb-8 text-[#D4FF3E] shadow-[0_0_15px_rgba(212,255,62,0.1)]">
                <Briefcase size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Management</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Long-term vision mapping and actionable growth strategies to ensure your business stays ahead of the curve.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 md:col-span-2 bg-slate-800 rounded-[2rem] p-10 border border-slate-700 hover:bg-slate-700 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#D4FF3E]/10 border border-[#D4FF3E]/20 flex items-center justify-center mb-8 text-[#D4FF3E] shadow-[0_0_15px_rgba(212,255,62,0.1)]">
                <TrendingUp size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Change Management</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Navigate organisational transitions smoothly with proven methodologies and stakeholder alignment.
              </p>
            </motion.div>

            {/* Bottom Row: 3 Cards */}
            <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 md:col-span-2 bg-slate-800 rounded-[2rem] p-10 border border-slate-700 hover:bg-slate-700 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#D4FF3E]/10 border border-[#D4FF3E]/20 flex items-center justify-center mb-8 text-[#D4FF3E] shadow-[0_0_15px_rgba(212,255,62,0.1)]">
                <Zap size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">AI Advisory</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Leverage cutting-edge AI tools to automate tasks, gain insights, and future-proof your business operations.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 md:col-span-2 bg-slate-800 rounded-[2rem] p-10 border border-slate-700 hover:bg-slate-700 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#D4FF3E]/10 border border-[#D4FF3E]/20 flex items-center justify-center mb-8 text-[#D4FF3E] shadow-[0_0_15px_rgba(212,255,62,0.1)]">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Human Resources</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Optimise your workforce with tailored HR strategies, talent acquisition, and performance management.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 md:col-span-2 bg-slate-800 rounded-[2rem] p-10 border border-slate-700 hover:bg-slate-700 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#D4FF3E]/10 border border-[#D4FF3E]/20 flex items-center justify-center mb-8 text-[#D4FF3E] shadow-[0_0_15px_rgba(212,255,62,0.1)]">
                <Globe size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Customised Solutions</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Bespoke consulting and advisory services designed specifically for your unique business challenges.
              </p>
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
