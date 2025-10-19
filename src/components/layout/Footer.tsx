import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/Logo';
import { Github, Twitter, Linkedin } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm">
              Your Reliable IT Partner in the UAE. Providing comprehensive IT solutions in Dubai, Abu Dhabi, and Sharjah.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-foreground">IT Managed Services</Link></li>
              <li><Link to="/photocopier-rental" className="hover:text-foreground">Photocopier Rental</Link></li>
              <li><Link to="/toners-cartridges" className="hover:text-foreground">Toner Supply</Link></li>
              <li><Link to="/custom-pcs" className="hover:text-foreground">Custom PC Builds</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Cyber Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Dubai, UAE</li>
              <li><a href="mailto:info@deits.ae" className="hover:text-foreground">info@deits.ae</a></li>
              <li><a href="tel:+971000000000" className="hover:text-foreground">+971 00 000 0000</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {currentYear} Dune Emirates IT Solutions. All rights reserved.</p>
          <p className="mt-1">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}