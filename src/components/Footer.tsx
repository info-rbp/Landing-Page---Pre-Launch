import React from 'react';
import { Briefcase, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
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

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#D4FF3E] rounded-lg flex items-center justify-center text-black">
                <Briefcase size={18} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight uppercase text-white">Remote Business Partner</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Strategic business consulting and high-level support for Australian businesses. We help you scale with confidence and efficiency.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#D4FF3E] hover:text-black transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#D4FF3E] hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#D4FF3E] hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#application" onClick={(e) => scrollToSection(e, '#application')} className="hover:text-[#D4FF3E] transition-colors">Application</a></li>
              <li><a href="#docushare" onClick={(e) => scrollToSection(e, '#docushare')} className="hover:text-[#D4FF3E] transition-colors">DocuShare</a></li>
              <li><a href="#offers" onClick={(e) => scrollToSection(e, '#offers')} className="hover:text-[#D4FF3E] transition-colors">Partner Offers</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-[#D4FF3E] transition-colors">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#creating" onClick={(e) => scrollToSection(e, '#creating')} className="hover:text-[#D4FF3E] transition-colors">What We Are Creating</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-[#D4FF3E] transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Remote Business Partner. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
