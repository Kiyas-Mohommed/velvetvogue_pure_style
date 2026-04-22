import { Product } from '@/context/CartContext';
import productDress1 from '@/assets/product-dress-1.jpg';
import productBlouse1 from '@/assets/product-blouse-1.jpg';
import productBlazer1 from '@/assets/product-blazer-1.jpg';
import productGown1 from '@/assets/product-gown-1.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Midnight Elegance Dress',
    price: 299,
    image: productDress1,
    description: 'A stunning black evening dress crafted from premium silk. Perfect for special occasions and formal events. Features a sophisticated silhouette that flatters every figure.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    category: 'Dresses'
  },
  {
    id: '2',
    name: 'Golden Hour Blouse',
    price: 189,
    image: productBlouse1,
    description: 'Luxurious silk blouse in a beautiful gold tone. Versatile piece that can be dressed up or down. Features elegant button details and a comfortable fit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Gold', 'Champagne', 'Ivory'],
    category: 'Tops'
  },
  {
    id: '3',
    name: 'Executive Power Blazer',
    price: 399,
    image: productBlazer1,
    description: 'Sophisticated black blazer perfect for the modern professional. Tailored to perfection with premium materials and attention to detail.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal', 'Navy'],
    category: 'Blazers'
  },
  {
    id: '4',
    name: 'Royal Gala Gown',
    price: 599,
    image: productGown1,
    description: 'Exquisite evening gown that embodies luxury and elegance. Perfect for galas, weddings, and red carpet events. Features intricate beadwork and flowing silhouette.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Gold', 'Rose Gold', 'Silver'],
    category: 'Gowns'
  },
  {
    id: '5',
    name: 'Classic Noir Dress',
    price: 249,
    image: productDress1,
    description: 'Timeless black dress that every wardrobe needs. Versatile design suitable for business meetings or dinner dates.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Deep Purple'],
    category: 'Dresses'
  },
  {
    id: '6',
    name: 'Luxury Velvet Blazer',
    price: 449,
    image: productBlazer1,
    description: 'Premium velvet blazer that adds sophistication to any outfit. Rich texture and impeccable tailoring make this a standout piece.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Burgundy', 'Forest Green'],
    category: 'Blazers'
  }
];