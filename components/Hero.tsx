import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2500&auto=format&fit=crop" 
          alt="Luxury Car Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-primary font-bold text-xl md:text-2xl mb-4 tracking-widest uppercase animate-pulse">
          کیفیت و اصالت
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 drop-shadow-lg leading-tight">
          اتو گالری <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">نوین</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light">
          تجربه خریدی مطمئن و لوکس. مجموعه‌ای از بهترین خودروهای وارداتی و کلاسیک در ایران.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#inventory" className="px-8 py-4 bg-primary hover:bg-red-600 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(239,68,68,0.5)]">
            مشاهده موجودی
          </a>
          <a href="#contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-bold text-lg transition-all">
            مشاوره رایگان
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={40} />
      </div>
    </section>
  );
};

export default Hero;