import React from 'react';
import { BRANDS } from '../constants';
import { ShieldCheck } from 'lucide-react';

const BrandBar: React.FC = () => {
  return (
    <section id="brands" className="py-12 bg-white shadow-md relative z-20 -mt-8 mx-4 md:mx-12 rounded-xl border border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <ShieldCheck className="text-primary" />
            برندهای معتبر موجود
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {BRANDS.map((brand) => (
            <div 
              key={brand.id} 
              className="group flex flex-col items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-110"
            >
              {/* Using a placeholder circle for logo, in real app would be SVG/IMG */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-100 flex items-center justify-center border-2 border-transparent group-hover:border-primary transition-colors">
                 <span className="text-xl md:text-2xl font-black text-gray-400 group-hover:text-primary">
                   {brand.name.charAt(0)}
                 </span>
              </div>
              <span className="font-bold text-sm md:text-lg text-gray-600 group-hover:text-gray-900">{brand.logoText}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandBar;