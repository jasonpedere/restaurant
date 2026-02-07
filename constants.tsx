
import { MenuItem } from './types.ts';

export const BUFFET_RATES = {
  weekday: {
    lunch: 599,
    dinner: 799,
  },
  weekend: {
    allDay: 899,
  },
  kids: {
    description: "Kids below 3ft: FREE | 3ft to 4ft: 50% OFF",
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // FILIPINO FAVORITES
  {
    id: '1',
    name: 'Classic Crispy Pata',
    description: 'Golden-fried pork knuckle, incredibly crunchy on the outside and tender on the inside.',
    category: 'Filipino Favorites',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: '2',
    name: 'Kare-Kare',
    description: 'Oxtail and tripe stewed in a rich, savory peanut sauce with local garden vegetables.',
    category: 'Filipino Favorites',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: '10',
    name: 'Beef Caldereta',
    description: 'Slow-cooked beef in a spicy tomato-liver sauce with bell peppers and olives.',
    category: 'Filipino Favorites',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800'
  },
  // MAIN COURSES
  {
    id: '3',
    name: 'Seafood Paella',
    description: 'Authentic saffron rice topped with fresh prawns, mussels, and squid rings.',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '7',
    name: 'Slow-Roasted Beef Chuck',
    description: 'Tender beef slices roasted for 12 hours with rosemary and garlic jus.',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: '8',
    name: 'Baked Salmon with Lemon',
    description: 'Atlantic salmon fillet baked to perfection with citrus butter and herbs.',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800'
  },
  // APPETIZERS
  {
    id: '5',
    name: 'Garden Fresh Salad',
    description: 'Mixed greens from local Cabanatuan farms with house-made honey balsamic.',
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '11',
    name: 'Tempura Platter',
    description: 'Crispy, light-batter shrimp and vegetable tempura with ginger dip.',
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?auto=format&fit=crop&q=80&w=800'
  },
  // DESSERTS
  {
    id: '6',
    name: 'Halo-Halo Supreme',
    description: 'Signature dessert with ube ice cream, leche flan, and preserved sweets.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: '12',
    name: 'Leche Flan',
    description: 'Traditional silky custard with a rich caramel glaze.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&q=80&w=800'
  }
];

export const APP_INFO = {
  name: 'Mesa Familia',
  address: 'Wellspring Complex, Cabanatuan City, Philippines',
  phone: '+63 912 345 6789',
  email: 'reservations@rrgardenfeast.com',
  hours: {
    lunch: '11:00 AM - 2:30 PM',
    dinner: '6:00 PM - 10:00 PM'
  }
};
