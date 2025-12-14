import React, { useState } from 'react';
import { Car } from '../types';
import { 
  ChevronLeft, 
  ChevronRight, 
  Gauge, 
  Calendar, 
  Fuel, 
  Cog, 
  PhoneCall, 
  Paintbrush, 
  ShieldCheck, 
  CarFront, 
  Activity,
  Palette
} from 'lucide-react';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col lg:flex-row h-auto min-h-[500px]">
      
      {/* 
        Right Section (Details) 
      */}
      <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between order-2 lg:order-1">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">{car.brand}</span>
              <h3 className="text-2xl lg:text-3xl font-black text-gray-800 mt-2">{car.name}</h3>
            </div>
            {car.isFeatured && (
              <span className="bg-accent text-gray-900 text-xs font-bold px-3 py-1 rounded-lg animate-pulse">
                ویژه
              </span>
            )}
          </div>

          <p className="text-gray-500 mb-6 leading-relaxed text-sm lg:text-base line-clamp-2">
            {car.description}
          </p>

          {/* Extended Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 mb-6">
            
            {/* Color */}
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-50 p-2 rounded-lg">
                <Palette className="text-primary w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400">رنگ بدنه</span>
                <span className="font-bold text-sm">{car.color}</span>
              </div>
            </div>

            {/* Year */}
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-50 p-2 rounded-lg">
                <Calendar className="text-primary w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400">سال ساخت</span>
                <span className="font-bold text-sm">{car.modelYear}</span>
              </div>
            </div>

            {/* Mileage */}
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-50 p-2 rounded-lg">
                <Gauge className="text-primary w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400">کارکرد</span>
                <span className="font-bold text-sm">{car.mileage === 0 ? 'صفر' : `${car.mileage.toLocaleString('fa-IR')}`}</span>
              </div>
            </div>

            {/* Gearbox */}
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-50 p-2 rounded-lg">
                <Cog className="text-primary w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400">گیربکس</span>
                <span className="font-bold text-sm">{car.gearbox === 'Automatic' ? 'اتوماتیک' : 'دنده‌ای'}</span>
              </div>
            </div>

            {/* Fuel */}
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-50 p-2 rounded-lg">
                <Fuel className="text-primary w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400">سوخت</span>
                <span className="font-bold text-sm">
                  {car.fuelType === 'Petrol' ? 'بنزین' : car.fuelType === 'Hybrid' ? 'هیبرید' : car.fuelType === 'Diesel' ? 'دیزل' : 'برقی'}
                </span>
              </div>
            </div>

            {/* Paint Status */}
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-50 p-2 rounded-lg">
                <Paintbrush className="text-primary w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400">وضعیت رنگ</span>
                <span className="font-bold text-sm">{car.paintStatus}</span>
              </div>
            </div>

            {/* Chassis Status */}
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-50 p-2 rounded-lg">
                <CarFront className="text-primary w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400">وضعیت شاسی</span>
                <span className="font-bold text-sm">{car.chassisStatus}</span>
              </div>
            </div>

            {/* Body Status */}
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-50 p-2 rounded-lg">
                <Activity className="text-primary w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400">وضعیت بدنه</span>
                <span className="font-bold text-sm">{car.bodyStatus}</span>
              </div>
            </div>

            {/* Insurance */}
            <div className="flex items-center gap-2 text-gray-600">
              <div className="bg-gray-50 p-2 rounded-lg">
                <ShieldCheck className="text-primary w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400">بیمه شخص ثالث</span>
                <span className="font-bold text-sm">{car.insuranceDeadline}</span>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto border-t border-gray-100 pt-6">
          <div className="text-center sm:text-right">
            <span className="block text-xs text-gray-400 mb-1">قیمت نقدی</span>
            <span className="text-2xl font-black text-gray-800">{formatPrice(car.price)} <span className="text-sm font-normal text-gray-500">تومان</span></span>
          </div>
          <button className="w-full sm:w-auto bg-gray-900 hover:bg-primary text-white px-8 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/30">
            <PhoneCall size={18} />
            تماس بگیرید
          </button>
        </div>
      </div>

      {/* 
        Left Section (Image Slider) 
      */}
      <div className="lg:w-[45%] h-64 lg:h-auto relative bg-gray-200 order-1 lg:order-2 group">
        <div className="absolute inset-0">
          <img 
            src={car.images[currentImageIndex].url} 
            alt={car.images[currentImageIndex].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Slider Controls */}
        {car.images.length > 1 && (
          <>
            <button 
              onClick={nextImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-gray-900 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={prevImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-gray-900 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {car.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`w-2 h-2 rounded-full transition-all shadow-sm ${
                    idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CarCard;