export interface CarImage {
  url: string;
  alt: string;
}

export interface Car {
  id: number;
  name: string;
  brand: string;
  modelYear: number;
  price: number; // In Tomans or flexible currency
  mileage: number; // In km
  color: string;
  gearbox: 'Automatic' | 'Manual';
  fuelType: 'Petrol' | 'Hybrid' | 'Electric' | 'Diesel';
  description: string;
  images: CarImage[];
  isFeatured?: boolean;
  
  // New detailed fields
  paintStatus: string;      // وضعیت رنگ (مثلا: بدون رنگ)
  chassisStatus: string;    // وضعیت شاسی (مثلا: پلمپ)
  bodyStatus: string;       // وضعیت بدنه (مثلا: سالم، خط و خش جزئی)
  insuranceDeadline: string; // مهلت بیمه (مثلا: ۶ ماه)
}

export interface Brand {
  id: number;
  name: string;
  logoText: string; // Using text/icon as placeholder for actual logo image
}