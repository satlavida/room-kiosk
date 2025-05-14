export interface Room {
  id: string;
  name: string;
  capacity: number;
  amenities: string[];
  imageUrl?: string; 
  description: string;
  status: 'available' | 'occupied' | 'maintenance';
  building?: string;
  floor?: string;
}