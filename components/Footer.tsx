import React from 'react';
import { Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">اتو گالری نوین</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              ارائه‌دهنده لوکس‌ترین خودروهای روز دنیا با ضمانت اصالت و سلامت. ما متعهد به ارائه بهترین خدمات مشاوره و فروش به مشتریان عزیز هستیم.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">دسترسی سریع</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">صفحه اصلی</a></li>
              <li><a href="#inventory" className="hover:text-primary transition-colors">لیست خودروها</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">شرایط فروش اقساطی</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">درباره ما</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">قوانین و مقررات</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">اطلاعات تماس</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>تهران، سعادت آباد، بلوار دریا، پلاک ۱۱۰، اتو گالری نوین</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <span className="font-mono text-lg" dir="ltr">021-88889999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <span>info@autogallerynovin.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>© ۱۴۰۳ اتو گالری نوین. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;