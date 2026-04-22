import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-foreground to-gold bg-clip-text text-transparent">
              Velvet Vogue
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Discover luxury fashion that defines elegance. Our curated collection brings you 
              the finest in contemporary design and timeless sophistication.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-primary-foreground/60 hover:text-gold transition-colors cursor-pointer" />
              <Twitter className="h-5 w-5 text-primary-foreground/60 hover:text-gold transition-colors cursor-pointer" />
              <Facebook className="h-5 w-5 text-primary-foreground/60 hover:text-gold transition-colors cursor-pointer" />
              <Mail className="h-5 w-5 text-primary-foreground/60 hover:text-gold transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-primary-foreground/80 hover:text-gold transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/auth" className="text-primary-foreground/80 hover:text-gold transition-colors">Account</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">Returns</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">Shipping</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Velvet Vogue. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};