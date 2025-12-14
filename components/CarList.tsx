import React from 'react';
import { CARS } from '../constants';
import CarCard from './CarCard';

const CarList: React.FC = () => {
  return (
    <section id="inventory" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 border-r-4 border-primary pr-4">
              موجودی نمایشگاه
            </h2>
            <p className="text-gray-500 max-w-xl">
              لیست کامل خودروهای موجود در اتو گالری نوین. برای کسب اطلاعات بیشتر و هماهنگی بازدید با ما تماس بگیرید.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
             <button className="text-primary font-bold hover:text-gray-900 transition-colors flex items-center gap-2">
               مشاهده همه خودروها
               <span className="text-xl">&larr;</span>
             </button>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {CARS.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarList;