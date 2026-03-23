import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Globe, ShieldCheck, BarChart3, Users, Leaf, Briefcase, ChevronRight, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { NAV_ITEMS, SERVICES, EXPERTISE_AREAS, GLOBAL_OFFICES } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-serif tracking-widest uppercase flex items-center gap-2">
          <span className={`${isScrolled ? 'text-brand-dark' : 'text-white'}`}>Landscape</span>
          <span className="text-brand-gold">ESG</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[11px] uppercase tracking-[0.2em] font-medium hover:text-brand-gold transition-colors duration-300 ${isScrolled ? 'text-brand-dark' : 'text-white/90'}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-paper border-b border-brand-dark/5 lg:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-wide text-brand-dark"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/esg-corporate/2400/1600?grayscale"
          alt="ESG 战略咨询背景"
          className="w-full h-full object-cover brightness-[0.6]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-brand-gold text-xs uppercase tracking-[0.4em] mb-6 block">Global Strategic ESG Consulting</span>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8">
            赋能中资企业 <br />
            <span className="italic">全球可持续</span> 发展
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            总部位于北京，链接全球专家资源。我们为海内外中资企业提供全套ESG解决方案，助力企业融入全球供应链，管理海外投资风险。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#services"
              className="group flex items-center justify-center space-x-4 bg-brand-gold text-white rounded-full px-10 py-4 hover:bg-white hover:text-brand-dark transition-all duration-500"
            >
              <span className="text-xs uppercase tracking-widest font-semibold">核心业务</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center space-x-4 text-white border border-white/30 rounded-full px-10 py-4 hover:bg-white hover:text-brand-dark transition-all duration-500"
            >
              <span className="text-xs uppercase tracking-widest">联系我们</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-6 block">关于我们</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              深耕ESG领域，<br />助力企业应对<span className="italic">全球挑战</span>。
            </h2>
            <p className="text-brand-dark/70 leading-relaxed mb-8">
              Landscape Consulting 总部位于北京，在上海、欧洲、非洲及东南亚设有办公室或专家团队。我们联合中国高等学府专家资源，长期致力于为海内外中资企业提升ESG表现提供全套解决方案。
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif text-brand-gold mb-2">Global</h4>
                <p className="text-[10px] uppercase tracking-widest text-brand-dark/50">全球化视野与专家网络</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-brand-gold mb-2">Expert</h4>
                <p className="text-[10px] uppercase tracking-widest text-brand-dark/50">联合顶尖学府专家资源</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/consulting-team/1200/900"
              alt="ESG 咨询团队"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-8 rounded-xl hidden md:block">
              <p className="text-sm font-light italic">"为企业融入全球供应链提供技术支持"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="bg-brand-paper py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4 block">核心业务</span>
          <h2 className="text-4xl md:text-6xl font-serif">全方位的ESG咨询服务</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-brand-dark/5 hover:border-brand-gold transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-brand-paper rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-gold group-hover:text-white transition-colors">
                {index === 0 && <BarChart3 size={24} />}
                {index === 1 && <ShieldCheck size={24} />}
                {index === 2 && <Briefcase size={24} />}
                {index === 3 && <Users size={24} />}
              </div>
              <h3 className="text-xl font-serif mb-4">{service.title}</h3>
              <p className="text-brand-dark/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-32 px-6 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <span className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-6 block">专业领域</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              深厚的行业积淀与<br /><span className="italic">实战经验</span>。
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              我们在人权、劳工、供应链、生物多样性等重点领域均有丰富的工作经验，并赢得了客户的高度认可。
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {EXPERTISE_AREAS.map((area, index) => (
              <div key={index} className="flex gap-6">
                <span className="text-brand-gold font-serif text-2xl">0{index + 1}</span>
                <div>
                  <h4 className="text-xl font-serif mb-3">{area.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const GlobalNetwork = () => {
  return (
    <section id="global" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/global-esg/1200/800?grayscale"
              alt="全球专家网络布局"
              className="w-full rounded-3xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1">
            <span className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-6 block">全球网络</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-12">
              立足中国，<br /><span className="italic">服务全球</span>。
            </h2>
            <div className="space-y-10">
              {GLOBAL_OFFICES.map((office, index) => (
                <div key={index} className="flex items-center justify-between border-b border-brand-dark/10 pb-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 mb-1">{office.region}</p>
                    <h4 className="text-2xl font-serif">{office.city}</h4>
                  </div>
                  <Globe className="text-brand-gold opacity-30" size={32} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-6 block">联系我们</span>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-12">
            开启您的 <br /><span className="italic">ESG 转型</span>。
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-dark/50 mb-1">总部地址</p>
                <p className="text-lg font-serif">北京市朝阳区某某商务中心</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-dark/50 mb-1">电子邮箱</p>
                <p className="text-lg font-serif">contact@landscape-esg.com</p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-brand-paper p-10 md:p-16 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-brand-dark/50">姓名</label>
              <input type="text" className="w-full border-b border-brand-dark/10 py-2 bg-transparent focus:border-brand-gold outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-brand-dark/50">公司邮箱</label>
              <input type="email" className="w-full border-b border-brand-dark/10 py-2 bg-transparent focus:border-brand-gold outline-none transition-colors" />
            </div>
          </div>
          <div className="space-y-2 mb-12">
            <label className="text-[10px] uppercase tracking-widest text-brand-dark/50">咨询需求</label>
            <textarea rows={4} className="w-full border-b border-brand-dark/10 py-2 bg-transparent focus:border-brand-gold outline-none transition-colors resize-none" />
          </div>
          <button className="w-full bg-brand-dark text-white py-5 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-brand-gold transition-colors duration-500">
            提交咨询
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-12">
          <a href="#home" className="text-2xl font-serif tracking-widest uppercase">
            Landscape<span className="text-brand-gold">ESG</span>
          </a>
          <div className="flex space-x-8">
            <a href="#" className="text-white/40 hover:text-brand-gold transition-colors">LinkedIn</a>
            <a href="#" className="text-white/40 hover:text-brand-gold transition-colors">WeChat</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/20 border-t border-white/5 pt-12">
          <p>© 2026 Landscape ESG Consulting. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-brand-gold transition-colors">隐私政策</a>
            <a href="#" className="hover:text-brand-gold transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ExpertiseSection />
      <GlobalNetwork />
      <ContactSection />
      <Footer />
    </div>
  );
}
