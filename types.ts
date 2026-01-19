
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'Appetizers' | 'Main Course' | 'Filipino Favorites' | 'Desserts' | 'Drinks';
  price?: number;
  image: string;
  popular?: boolean;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
}
