'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Plus, Minus, Trash2, CheckCircle2, Clock, MapPin, Phone, ArrowRight, UtensilsCrossed } from 'lucide-react';
import { restaurant } from '@/lib/data';

interface OrderItem {
  id: string;
  name: string;
  category: 'plates' | 'meats' | 'sides' | 'desserts' | 'drinks';
  price: number;
  description: string;
  popular?: boolean;
}

const MENU_ITEMS: OrderItem[] = [
  // Carryout Plates
  {
    id: 'plate-1m-2v',
    name: '1 Meat & 2 Vegetables Plate',
    category: 'plates',
    price: 10.99,
    description: 'Your choice of 1 hot meat, 2 country vegetable sides, and warm cornbread or roll.',
    popular: true,
  },
  {
    id: 'plate-2m-3v',
    name: '2 Meats & 3 Vegetables Feast',
    category: 'plates',
    price: 14.99,
    description: 'Generous dinner plate with 2 hot meats, 3 country sides, and warm cornbread or roll.',
    popular: true,
  },
  {
    id: 'plate-veggie',
    name: 'Country Veggie Plate (4 Sides)',
    category: 'plates',
    price: 8.99,
    description: 'Pick any 4 hot vegetable sides or salad bar items with homemade cornbread.',
  },
  {
    id: 'plate-mac-bowl',
    name: 'Mac & Cheese Meat Bowl',
    category: 'plates',
    price: 8.99,
    description: 'Deep bowl of creamy baked macaroni and cheese topped with your choice of meat.',
  },

  // Meats
  {
    id: 'meat-chicken',
    name: 'Southern Crispy Fried Chicken',
    category: 'meats',
    price: 6.99,
    description: 'Golden crispy chicken seasoned with our country recipe and fried fresh all day.',
    popular: true,
  },
  {
    id: 'meat-ribs',
    name: 'Hickory Smoked BBQ Rib Tips',
    category: 'meats',
    price: 8.99,
    description: 'Tender pork rib tips slow-smoked and glazed in tangy barbecue sauce.',
    popular: true,
  },
  {
    id: 'meat-baked-chicken',
    name: 'Slow-Baked Country Herb Chicken',
    category: 'meats',
    price: 6.99,
    description: 'Oven-roasted tender chicken seasoned with savory country herbs.',
  },
  {
    id: 'meat-fish',
    name: 'Southern Golden Fried Fish Fillets',
    category: 'meats',
    price: 7.49,
    description: 'Cornmeal-crusted fish fillets seasoned and fried golden brown.',
  },
  {
    id: 'meat-meatloaf',
    name: "Grandma's Southern Meatloaf",
    category: 'meats',
    price: 7.49,
    description: 'Ground beef meatloaf baked with savory onions and sweet tomato glaze.',
  },

  // Sides
  {
    id: 'side-mac',
    name: 'Creamy Baked Mac & Cheese',
    category: 'sides',
    price: 3.49,
    description: 'Baked Southern mac and cheese with a golden cheddar crust.',
    popular: true,
  },
  {
    id: 'side-greens',
    name: 'Slow-Simmered Collard Greens',
    category: 'sides',
    price: 3.49,
    description: 'Fresh collard greens slow-cooked until tender and flavorful.',
    popular: true,
  },
  {
    id: 'side-yams',
    name: 'Sweet Candied Yams',
    category: 'sides',
    price: 3.49,
    description: 'Tender sweet potato slices slow-simmered in brown sugar and warm spices.',
  },
  {
    id: 'side-potatoes',
    name: 'Mashed Potatoes & Brown Gravy',
    category: 'sides',
    price: 2.99,
    description: 'Real buttered mashed potatoes topped with warm savory gravy.',
  },
  {
    id: 'side-cabbage',
    name: 'Country Steamed Cabbage',
    category: 'sides',
    price: 2.99,
    description: 'Shredded cabbage sauteed with sweet onions, black pepper, and butter.',
  },
  {
    id: 'side-cornbread',
    name: 'Warm Southern Cornbread (2 Pcs)',
    category: 'sides',
    price: 1.99,
    description: 'Freshly baked golden square cornbread served warm with butter.',
  },

  // Desserts
  {
    id: 'dessert-cobbler',
    name: 'Warm Georgia Peach Cobbler',
    category: 'desserts',
    price: 3.49,
    description: 'Sweet Georgia peaches baked beneath a buttery golden crust.',
    popular: true,
  },
  {
    id: 'dessert-pudding',
    name: 'Homemade Banana Pudding',
    category: 'desserts',
    price: 3.49,
    description: 'Vanilla pudding layered with fresh bananas and crisp vanilla wafers.',
  },
  {
    id: 'dessert-pecan',
    name: 'Southern Pecan Pie',
    category: 'desserts',
    price: 3.49,
    description: 'Traditional Georgia pecan pie with rich brown sugar filling.',
  },

  // Drinks
  {
    id: 'drink-sweet-tea',
    name: 'Southern Sweet Tea (32 oz)',
    category: 'drinks',
    price: 2.49,
    description: 'Freshly brewed ice-cold authentic Southern sweet tea.',
    popular: true,
  },
  {
    id: 'drink-lemonade',
    name: 'Country Lemonade (32 oz)',
    category: 'drinks',
    price: 2.49,
    description: 'Sweet and tangy fresh-squeezed homestyle lemonade.',
  },
  {
    id: 'drink-unsweet-tea',
    name: 'Fresh Brewed Unsweet Tea (32 oz)',
    category: 'drinks',
    price: 2.49,
    description: 'Classic freshly brewed unsweetened black tea over ice.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'plates', label: 'Carryout Plates' },
  { id: 'meats', label: 'Meats & Entrees' },
  { id: 'sides', label: 'Country Sides' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Beverages' },
];

export default function FoodOrderSection() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [cart, setCart] = useState<{ [itemId: string]: number }>({});
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('ASAP (approx. 20 to 25 mins)');
  const [notes, setNotes] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const filteredItems =
    selectedCat === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCat);

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) {
        next[id] -= 1;
      } else {
        delete next[id];
      }
      return next;
    });
  };

  const deleteItem = (id: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const totalItemsCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const tax = subtotal * 0.07; // 7% Georgia sales tax
  const grandTotal = subtotal + tax;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (totalItemsCount === 0) return;
    const generatedOrderNumber = `BJ-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(generatedOrderNumber);
    setOrderConfirmed(true);
  };

  const resetOrder = () => {
    setCart({});
    setCustomerName('');
    setCustomerPhone('');
    setNotes('');
    setOrderConfirmed(false);
    setOrderNumber('');
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-white text-gray-900 border-t border-gray-100">
      <div className="container-main">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-brand-red text-sm font-bold tracking-widest uppercase mb-2">
            ONLINE CARRYOUT & PICKUP
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl text-black leading-tight uppercase">
            ORDER FOOD <span className="text-brand-red">ONLINE</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg font-body">
            Build your hot carryout order below. Pick it up fresh and pay right at the counter when you arrive.
          </p>
        </div>

        {/* Confirmation Screen */}
        {orderConfirmed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-zinc-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-brand-red text-center"
          >
            <div className="w-16 h-16 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center mx-auto mb-5 border-2 border-brand-red">
              <CheckCircle2 size={36} />
            </div>

            <span className="text-brand-red font-heading text-lg tracking-widest uppercase">
              ORDER RECEIVED
            </span>
            <h3 className="font-heading text-4xl sm:text-5xl text-white uppercase mt-1 mb-2">
              THANK YOU, {customerName || 'GUEST'}!
            </h3>
            <p className="text-white/70 font-body text-sm sm:text-base max-w-md mx-auto mb-6">
              Your pickup order has been sent directly to our kitchen staff. We are preparing it fresh for you now.
            </p>

            <div className="bg-black/60 rounded-2xl p-6 border border-white/10 text-left mb-6 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-white/60 text-xs uppercase font-heading tracking-wider">Order Reference</span>
                <span className="font-heading text-2xl text-brand-red">{orderNumber}</span>
              </div>

              <div className="flex items-center justify-between text-sm font-body">
                <span className="text-white/70">Estimated Pickup Time:</span>
                <span className="text-white font-semibold">{pickupTime}</span>
              </div>

              <div className="flex items-center justify-between text-sm font-body">
                <span className="text-white/70">Customer Phone:</span>
                <span className="text-white font-semibold">{customerPhone}</span>
              </div>

              <div className="flex items-center justify-between text-sm font-body">
                <span className="text-white/70">Total Due at Counter:</span>
                <span className="font-heading text-2xl text-white">${grandTotal.toFixed(2)}</span>
              </div>

              {notes && (
                <div className="pt-2 border-t border-white/10 text-xs text-white/60">
                  <span className="font-semibold text-white/80">Special Request:</span> {notes}
                </div>
              )}
            </div>

            <div className="bg-brand-red/10 border border-brand-red/30 rounded-2xl p-4 mb-8 text-xs text-white/80 font-body flex items-start gap-3 text-left">
              <MapPin size={20} className="text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Pickup Location:</p>
                <p>1823 Hwy 138 SE, Suite 3000, Conyers, GA 30013 (Behind Truist Bank)</p>
                <p className="mt-1 text-white/60">Have questions? Call us at (678) 806-5590</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${restaurant.contact.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-7 py-3 rounded-full font-heading text-base tracking-wider uppercase transition-all shadow-lg"
              >
                <Phone size={16} />
                CALL RESTAURANT
              </a>
              <button
                onClick={resetOrder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-7 py-3 rounded-full font-heading text-base tracking-wider uppercase transition-all"
              >
                PLACE ANOTHER ORDER
              </button>
            </div>
          </motion.div>
        ) : (
          /* Main Interactive Ordering Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT 7-8 COLS: Menu Selection */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
              
              {/* Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCat(cat.id)}
                    className={`px-5 py-2.5 rounded-full font-heading text-sm tracking-wider uppercase transition-all whitespace-nowrap ${
                      selectedCat === cat.id
                        ? 'bg-brand-red text-white shadow-md shadow-brand-red/30 scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredItems.map((item) => {
                  const qty = cart[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className={`p-5 rounded-2xl border-2 transition-all flex flex-col justify-between gap-4 bg-white ${
                        qty > 0
                          ? 'border-brand-red shadow-md shadow-brand-red/10'
                          : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-heading text-xl uppercase text-black leading-tight">
                            {item.name}
                          </h4>
                          <span className="font-heading text-xl text-brand-red shrink-0">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                        {item.popular && (
                          <span className="inline-block bg-brand-red/10 text-brand-red text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                            POPULAR CHOICE
                          </span>
                        )}
                        <p className="text-gray-500 font-body text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                        {qty > 0 ? (
                          <div className="flex items-center gap-3 bg-gray-50 rounded-full px-3 py-1 border border-gray-200">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-7 h-7 rounded-full bg-white hover:bg-gray-200 text-gray-800 flex items-center justify-center transition-colors shadow-sm"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="font-heading text-lg font-bold text-black min-w-[20px] text-center">
                              {qty}
                            </span>
                            <button
                              onClick={() => addToCart(item.id)}
                              className="w-7 h-7 rounded-full bg-brand-red hover:bg-brand-red-dark text-white flex items-center justify-center transition-colors shadow-sm"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(item.id)}
                            className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-brand-red text-white px-4 py-2 rounded-full font-heading text-xs tracking-wider uppercase transition-colors"
                          >
                            <Plus size={14} />
                            ADD TO ORDER
                          </button>
                        )}

                        {qty > 0 && (
                          <span className="text-xs font-semibold text-gray-600 font-body">
                            ${(item.price * qty).toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Delivery apps note */}
              <div className="bg-zinc-50 border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                <div className="text-center sm:text-left">
                  <p className="font-heading text-lg uppercase text-black">Prefer Home Delivery?</p>
                  <p className="text-xs text-gray-500 font-body">Order on DoorDash, Uber Eats, or Grubhub for doorstep delivery.</p>
                </div>
                <a
                  href="#delivery"
                  className="bg-black hover:bg-brand-red text-white px-5 py-2 rounded-full font-heading text-xs uppercase tracking-wider transition-colors shrink-0"
                >
                  VIEW DELIVERY APPS
                </a>
              </div>

            </div>

            {/* RIGHT 4-5 COLS: Order Summary & Checkout Form */}
            <div className="lg:col-span-5 xl:col-span-4 bg-zinc-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-zinc-800 sticky top-24">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={20} className="text-brand-red" />
                  <h3 className="font-heading text-2xl uppercase tracking-wider text-white">YOUR ORDER</h3>
                </div>
                <span className="bg-brand-red text-white text-xs font-heading px-2.5 py-1 rounded-full">
                  {totalItemsCount} {totalItemsCount === 1 ? 'ITEM' : 'ITEMS'}
                </span>
              </div>

              {/* Items in Cart */}
              {totalItemsCount === 0 ? (
                <div className="py-10 text-center text-white/50 flex flex-col items-center">
                  <UtensilsCrossed size={36} className="text-white/20 mb-3" />
                  <p className="font-heading text-lg uppercase text-white/70">Your order is empty</p>
                  <p className="text-xs text-white/50 max-w-[220px] mt-1 font-body">
                    Choose your favorite plates, sides, and desserts from the menu on the left to get started.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-3 max-h-[220px] overflow-y-auto pr-1 mb-4 divide-y divide-white/5">
                  {Object.entries(cart).map(([id, qty]) => {
                    const item = MENU_ITEMS.find((m) => m.id === id);
                    if (!item) return null;
                    return (
                      <div key={id} className="pt-2.5 first:pt-0 flex items-center justify-between gap-3 text-sm">
                        <div className="flex-1 min-w-0">
                          <p className="font-heading text-base uppercase text-white truncate leading-tight">
                            {item.name}
                          </p>
                          <p className="text-xs text-white/50 font-body">
                            {qty} × ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-heading text-base text-white">
                            ${(item.price * qty).toFixed(2)}
                          </span>
                          <button
                            onClick={() => deleteItem(id)}
                            className="text-white/40 hover:text-brand-red transition-colors p-1"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Price Calculation */}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-1.5 text-xs font-body text-white/70 mb-5">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-white font-mono">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax (7% GA):</span>
                  <span className="text-white font-mono">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-heading text-white pt-2 border-t border-white/10 uppercase tracking-wider">
                  <span>Total Due At Counter:</span>
                  <span className="text-brand-red text-2xl font-mono">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Customer Pickup Form */}
              <form onSubmit={handleSubmitOrder} className="flex flex-col gap-3">
                <div>
                  <label className="block text-[11px] font-heading uppercase tracking-wider text-white/70 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Thornton"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-heading uppercase tracking-wider text-white/70 mb-1">
                    Phone Number (for pickup notification) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (678) 555-0199"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-heading uppercase tracking-wider text-white/70 mb-1">
                    Pickup Time
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red transition-colors"
                  >
                    <option value="ASAP (approx. 20 to 25 mins)">ASAP (approx. 20 to 25 mins)</option>
                    <option value="In 30 Minutes">In 30 Minutes</option>
                    <option value="In 45 Minutes">In 45 Minutes</option>
                    <option value="In 1 Hour">In 1 Hour</option>
                    <option value="Today at 5:00 PM">Today at 5:00 PM</option>
                    <option value="Today at 6:00 PM">Today at 6:00 PM</option>
                    <option value="Today at 7:00 PM">Today at 7:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-heading uppercase tracking-wider text-white/70 mb-1">
                    Special Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Extra brown gravy on rice, sweet tea"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={totalItemsCount === 0}
                  className={`w-full mt-3 py-3.5 rounded-full font-heading text-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg ${
                    totalItemsCount > 0
                      ? 'bg-brand-red hover:bg-brand-red-dark text-white shadow-brand-red/40 hover:scale-[1.02] cursor-pointer'
                      : 'bg-zinc-800 text-white/40 cursor-not-allowed border border-white/5'
                  }`}
                >
                  <span>PLACE PICKUP ORDER</span>
                  <ArrowRight size={18} />
                </button>

                <p className="text-[11px] text-center text-white/50 font-body mt-1">
                  Pay at the counter when you pick up. Cash & all major cards accepted.
                </p>
              </form>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
