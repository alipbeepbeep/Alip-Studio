export type EquipmentCategory = 'ALL' | 'CAMERA' | 'LENS' | 'LIGHTING' | 'AUDIO' | 'GRIP & SUPPORT';

export interface Equipment {
  id: string;
  name: string;
  category: 'CAMERA' | 'LENS' | 'LIGHTING' | 'AUDIO' | 'GRIP & SUPPORT';
  subCategory: string;
  description: string;
  longDescription: string;
  pricePerDay: number;
  deposit: number;
  image: string;
  specifications: Record<string, string>;
  includedAccessories: string[];
  available: boolean;
  featured?: boolean;
  brand: string;
}

export type ProfessionalRole = 
  | 'ALL' 
  | 'Director' 
  | 'Director of Photography' 
  | 'Camera Operator' 
  | 'Gaffer' 
  | 'Sound Engineer' 
  | 'Editor' 
  | 'Colorist' 
  | 'Production Designer' 
  | 'Scriptwriter';

export interface Professional {
  id: string;
  name: string;
  role: string;
  displayRole: string;
  photo: string;
  bio: string;
  experience: string;
  skills: string[];
  specialization: string[];
  rating: number;
  reviewsCount: number;
  available: boolean;
  dailyRate: string;
  previousProjects: {
    title: string;
    type: string;
    year: string;
    role: string;
  }[];
}

export type PortfolioCategory = 'ALL' | 'Film' | 'Commercial' | 'Short Film' | 'Music Video' | 'Documentary';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Film' | 'Commercial' | 'Short Film' | 'Music Video' | 'Documentary';
  year: string;
  client: string;
  director: string;
  cinematographer: string;
  synopsis: string;
  thumbnail: string;
  stills: string[];
  duration: string;
  awards?: string[];
  aspectRatio?: string;
}

export interface CartItem {
  equipment: Equipment;
  quantity: number;
  startDate: string;
  endDate: string;
  days: number;
  itemTotal: number;
}

export interface BookingSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  rentalDate: string;
  returnDate: string;
  purpose: string;
  additionalNotes: string;
  items: CartItem[];
  totalAmount: number;
  depositAmount: number;
  submittedAt: string;
  status: 'Pending Review' | 'Confirmed';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  deliverables: string[];
  iconName: string;
}
