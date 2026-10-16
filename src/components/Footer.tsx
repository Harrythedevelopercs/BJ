import { restaurant, hours, deliveryPlatforms } from '@/lib/data';
import { Phone, MapPin, Facebook, Heart } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { label: 'Menu & Dishes', href: '#menu' },
  { label: 'Weekly Daily Specials', href: '#specials' },
  { label: 'Buffet Pricing Tiers', href: '#pricing' },
  { label: 'Guest Reviews & Rating', href: '#reviews' },
  { label: 'Food Photo Gallery', href: '#gallery' },
  { label: 'Location & Directions', href: '#location' },
];

const buffetHighlights = [
  'Crispy Southern Fried Chicken',
  'Creamy Baked Mac & Cheese',
  'Slow-Simmered Collard Greens',
  'Savory Beef Tips over Rice',
  'Hickory Smoked Rib Tips',
  'Warm Georgia Peach Cobbler',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-4 border-brand-red pt-16 pb-10">
      <div className="container-main">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-brand-red/30 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="BJ Buffet Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="leading-tight">
                <span className="text-white font-heading text-2xl tracking-wider block">BJ BUFFET</span>
                <span className="text-brand-red text-xs tracking-widest uppercase font-bold">CONYERS, GEORGIA</span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed font-body mt-2">
              Authentic country soul food buffet in Conyers, GA. Fresh golden fried chicken, slow-simmered savory meats, fresh country vegetables, and scratch desserts served 7 days a week.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href={restaurant.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-red flex items-center justify-center text-white transition-all shadow-md"
                aria-label="BJ Buffet on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={restaurant.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-red flex items-center justify-center text-white transition-all shadow-md"
                aria-label="Google Maps"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading text-2xl tracking-wide uppercase border-b-2 border-brand-red pb-2 inline-block">
              QUICK NAVIGATION
            </h4>
            <ul className="flex flex-col gap-3 font-body">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-brand-red text-sm font-medium transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-brand-red font-bold transition-transform group-hover:translate-x-1">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Buffet Highlights */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading text-2xl tracking-wide uppercase border-b-2 border-brand-red pb-2 inline-block">
              HOUSE FAVORITES
            </h4>
            <ul className="flex flex-col gap-2.5 font-body">
              {buffetHighlights.map((dish) => (
                <li key={dish} className="text-white/70 text-sm flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                  {dish}
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <span className="text-xs text-white/50 block mb-2 font-heading tracking-wider uppercase">Order Delivery:</span>
              <div className="flex flex-wrap gap-2">
                {deliveryPlatforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-white/10 hover:bg-brand-red px-3 py-1.5 rounded-lg text-white font-heading tracking-wider uppercase transition-colors"
                  >
                    {p.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Schedule */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-heading text-2xl tracking-wide uppercase border-b-2 border-brand-red pb-2 inline-block">
              VISIT & CALL US
            </h4>
            
            <div className="flex flex-col gap-3.5 text-sm text-white/80 font-body">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />
                <span>
                  {restaurant.location.streetAddress}<br />
                  {restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip}<br />
                  <span className="text-xs text-white/50 italic">({restaurant.location.landmark})</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={18} className="text-brand-red shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${restaurant.contact.phoneRaw}`} className="text-white font-heading text-2xl tracking-wider hover:text-brand-red">
                    {restaurant.contact.phonePrimary}
                  </a>
                  <a href="tel:6788065591" className="text-xs text-white/50 hover:text-white font-mono">
                    {restaurant.contact.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-4 border border-white/10 mt-1">
                <div className="flex items-center justify-between text-xs font-semibold text-white mb-1.5 font-body">
                  <span>Mon to Sat:</span>
                  <span className="font-mono text-brand-red font-bold">11:15 AM to 8:30 PM</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-white font-body">
                  <span>Sunday:</span>
                  <span className="font-mono text-brand-red font-bold">11:00 AM to 8:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-body">
          <p>
            © {currentYear} {restaurant.name} Conyers, Georgia. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Southern Soul Food & Country Buffet served with <Heart size={14} className="text-brand-red fill-brand-red" />
          </p>
        </div>
      </div>
    </footer>
  );
}
