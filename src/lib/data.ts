// ============================================================
// BJ Buffet Conyers - Centralized Data
// ============================================================

export const restaurant = {
  name: 'BJ Buffet',
  tagline: 'Authentic Southern Home Cooking & Country Buffet',
  description:
    'BJ Buffet in Conyers, GA serves up comforting, country home-style cooking and traditional Southern soul food. Featuring daily all-you-can-eat buffet spreads with golden fried chicken, slow-simmered beef tips, creamy mac and cheese, collard greens, candied yams, fresh salad bar, and homemade peach cobbler.',
  rating: { google: 4.1, reviewCount: 365 },
  contact: {
    phonePrimary: '(678) 806-5590',
    phoneSecondary: '(678) 806-5591',
    phoneRaw: '6788065590',
    facebook: 'https://www.facebook.com/p/Bj-buffet-Conyers-100032893822791/',
    googleMapsUrl:
      'https://www.google.com/maps/place/BJ+Buffet+Conyers/@33.6408013,-84.018615,17z',
  },
  location: {
    streetAddress: '1823 Hwy 138 SE, Suite 3000',
    city: 'Conyers',
    state: 'GA',
    zip: '30013',
    landmark: 'Behind Truist Bank Building, next to the bowling alley',
    lat: 33.6408013,
    lng: -84.0160401,
  },
};

export const hours = [
  { day: 'Monday',    open: '11:15 AM', close: '8:30 PM', special: 'Hickory BBQ Rib Tips' },
  { day: 'Tuesday',   open: '11:15 AM', close: '8:30 PM', special: 'BBQ Pork Ribs & Fried Chicken' },
  { day: 'Wednesday', open: '11:15 AM', close: '8:30 PM', special: 'Country Fried Pork Chops' },
  { day: 'Thursday',  open: '11:15 AM', close: '8:30 PM', special: 'Beef Tips over Rice & Meatloaf' },
  { day: 'Friday',    open: '11:15 AM', close: '8:30 PM', special: 'Southern Golden Fish Feast' },
  { day: 'Saturday',  open: '11:15 AM', close: '8:30 PM', special: 'Weekend Family Comfort Buffet' },
  { day: 'Sunday',    open: '11:00 AM', close: '8:30 PM', special: 'Sunday Church Soul Food Special' },
];

// Hero slider - 3 slides matching the animated slider design reference
export const heroSlides = [
  {
    id: 1,
    badge: 'Customer Favorite',
    headline: 'Real Southern',
    headlineHighlight: 'Comfort Food',
    subline: 'Golden Crispy Fried Chicken',
    description:
      'Crispy on the outside, juicy on the inside, seasoned with our own country blend and fried fresh all day long.',
    cta: 'Explore Our Menu',
    ctaLink: '#menu',
    secondaryCta: 'Order Now',
    secondaryCtaLink: '#delivery',
    // High-quality food images
    bgImage: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=1920&q=90&auto=format&fit=crop',
    foodImage: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=900&q=90&auto=format&fit=crop',
    accentColor: '#cb2738',
    tag: 'Buffet & Carryout',
  },
  {
    id: 2,
    badge: 'Google 4.1 Rating',
    headline: 'All-You-Can-Eat',
    headlineHighlight: 'Country Buffet',
    subline: 'From $13.99 per Adult',
    description:
      'Unlimited trips to our hot meat stations, country vegetables, fresh salad bar, and homemade desserts every day.',
    cta: 'View Buffet Pricing',
    ctaLink: '#pricing',
    secondaryCta: 'Get Directions',
    secondaryCtaLink: '#location',
    bgImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=90&auto=format&fit=crop',
    foodImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=90&auto=format&fit=crop',
    accentColor: '#cb2738',
    tag: 'Dine-In Buffet',
  },
  {
    id: 3,
    badge: 'House Specialty',
    headline: 'Warm Georgia',
    headlineHighlight: 'Peach Cobbler',
    subline: 'Baked Fresh Every Morning',
    description:
      'Sweet Georgia peaches baked under a buttery golden crust every morning. A classic finish to your meal.',
    cta: 'See Our Desserts',
    ctaLink: '#menu',
    secondaryCta: 'Sunday Specials',
    secondaryCtaLink: '#specials',
    bgImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=90&auto=format&fit=crop',
    foodImage: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=900&q=90&auto=format&fit=crop',
    accentColor: '#cb2738',
    tag: 'Homemade Desserts',
  },
];

// Daily specials
export const dailySpecials = [
  { day: 'Mon', icon: '🔥', name: 'Hickory BBQ Rib Tips', desc: 'Slow-smoked and BBQ glazed tender pork rib tips' },
  { day: 'Tue', icon: '🍖', name: 'BBQ Pork Ribs', desc: 'Fall-off-the-bone barbecue ribs & fried chicken' },
  { day: 'Wed', icon: '🥩', name: 'Fried Pork Chops', desc: 'Lightly breaded crispy pan-fried country pork chops' },
  { day: 'Thu', icon: '🥣', name: 'Beef Tips & Meatloaf', desc: 'Slow-simmered beef in gravy over fluffy white rice' },
  { day: 'Fri', icon: '🐟', name: 'Southern Fish Feast', desc: 'Crispy cornmeal-crusted golden fish fillets' },
  { day: 'Sat', icon: '🍽️', name: 'Family Comfort Buffet', desc: 'Our biggest weekend spread with all the favorites' },
  { day: 'Sun', icon: '⛪', name: 'Church Soul Food', desc: 'Sunday dinner classics: chicken, yams & peach cobbler' },
];

// Menu categories with Unsplash images
export const menuCategories = [
  {
    id: 'meats',
    label: '🍗 Meats & Entrées',
    items: [
      {
        name: 'Southern Crispy Fried Chicken',
        description: 'Golden crispy, flaky seasoned coating with moist, tender chicken inside. The signature customer favorite.',
        price: '$6.99',
        tags: ['Customer Favorite', 'Signature'],
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&q=80&auto=format&fit=crop',
        popular: true,
      },
      {
        name: 'Slow-Baked Herb Chicken',
        description: 'Oven-roasted chicken legs and thighs seasoned with savory herbs and baked till fall-off-the-bone juicy.',
        price: '$6.99',
        tags: ['Comfort Classic'],
        image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=500&q=80&auto=format&fit=crop',
        popular: false,
      },
      {
        name: 'Savory Beef Tips over Rice',
        description: 'Tender chunks of beef slow-simmered in rich country brown gravy served over a bed of fluffy white rice.',
        price: 'Plate Included',
        tags: ['Chef Special', 'Hearty'],
        image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=500&q=80&auto=format&fit=crop',
        popular: true,
      },
      {
        name: 'Grandma\'s Southern Meatloaf',
        description: 'Traditional ground beef meatloaf baked with savory onions and glazed with sweet tangy tomato topping.',
        price: 'Plate Included',
        tags: ['Homestyle'],
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80&auto=format&fit=crop',
        popular: false,
      },
      {
        name: 'Hickory Smoked Rib Tips',
        description: 'Tender pork rib tips slow-smoked and glazed with rich, tangy barbecue sauce. Monday & Tuesday specialty.',
        price: 'Plate Included',
        tags: ['Daily Special', 'Smoky BBQ'],
        image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500&q=80&auto=format&fit=crop',
        popular: true,
      },
      {
        name: 'Golden Fried Fish Fillets',
        description: 'Crispy cornmeal-crusted fish fillets seasoned with classic Southern seafood spices, fried golden brown.',
        price: 'Plate Included',
        tags: ['Friday Special'],
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80&auto=format&fit=crop',
        popular: false,
      },
      {
        name: 'Country Fried Pork Chops',
        description: 'Lightly breaded and pan-seared juicy pork chops with crisp savory edges.',
        price: 'Plate Included',
        tags: ['Traditional Soul Food'],
        image: 'https://images.unsplash.com/photo-1558030137-a56c1b004fa3?w=500&q=80&auto=format&fit=crop',
        popular: false,
      },
    ],
  },
  {
    id: 'sides',
    label: '🥬 Country Sides',
    items: [
      {
        name: 'Creamy Baked Mac & Cheese',
        description: 'Thick, ultra-cheesy baked Southern mac and cheese with a golden bubbly cheddar crust.',
        price: '$3.49',
        tags: ['Must Try', '#1 Rated Side'],
        image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=500&q=80&auto=format&fit=crop',
        popular: true,
      },
      {
        name: 'Slow-Simmered Collard Greens',
        description: 'Fresh collard greens slow-cooked in seasoned potlikker until tender and flavorful.',
        price: '$1.99 to $3.49',
        tags: ['Southern Staple'],
        image: 'https://images.unsplash.com/photo-1556040220-4096d522378d?w=500&q=80&auto=format&fit=crop',
        popular: false,
      },
      {
        name: 'Sweet Candied Yams',
        description: 'Tender sweet potato slices slow-simmered in rich brown sugar, butter, and warm spices.',
        price: '$1.99 to $3.49',
        tags: ['Crowd Favorite', 'Sweet & Tender'],
        image: 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=500&q=80&auto=format&fit=crop',
        popular: true,
      },
      {
        name: 'Fluffy Mashed Potatoes & Gravy',
        description: 'Real buttered mashed potatoes topped with hot, rich savory brown gravy.',
        price: '$1.99',
        tags: ['Homestyle Comfort'],
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&q=80&auto=format&fit=crop',
        popular: false,
      },
      {
        name: 'Country Steamed Cabbage',
        description: 'Tender shredded green cabbage sauteed with sweet onions, black pepper, and butter.',
        price: '$1.99',
        tags: ['Vegetarian Friendly'],
        image: 'https://images.unsplash.com/photo-1598030343246-eec71546bf64?w=500&q=80&auto=format&fit=crop',
        popular: false,
      },
      {
        name: 'Fresh Warm Cornbread',
        description: 'Freshly baked square golden cornbread and fluffy soft dinner yeast rolls with butter.',
        price: '$0.99',
        tags: ['Freshly Baked'],
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80&auto=format&fit=crop',
        popular: false,
      },
    ],
  },
  {
    id: 'salad-bar',
    label: '🥗 Salad Bar',
    items: [
      {
        name: 'Garden Tossed Fresh Salad',
        description: 'Crisp iceberg, romaine, cherry tomatoes, cucumbers, and house buttermilk ranch dressing.',
        price: '$4.99',
        tags: ['Fresh & Crisp'],
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80&auto=format&fit=crop',
        popular: false,
      },
      {
        name: 'Paprika Deviled Eggs',
        description: 'Five freshly prepared hard-boiled egg halves with sweet-tangy seasoned yolk filling.',
        price: '$3.49',
        tags: ['Deli Favorite', 'High Protein'],
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80&auto=format&fit=crop',
        popular: true,
      },
      {
        name: 'Creamy Macaroni Salad',
        description: 'Chilled elbow pasta tossed with sweet relish, red peppers, and creamy mayonnaise dressing.',
        price: '$3.49',
        tags: ['Cold Deli Side'],
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&q=80&auto=format&fit=crop',
        popular: false,
      },
      {
        name: 'Cucumber & Sweet Onion Salad',
        description: 'Thinly sliced cucumbers and onions marinated in a zesty sweet-tangy vinegar dressing.',
        price: '$3.49',
        tags: ['Cool & Refreshing'],
        image: 'https://images.unsplash.com/photo-1608032077018-c9aad9565d29?w=500&q=80&auto=format&fit=crop',
        popular: false,
      },
    ],
  },
  {
    id: 'desserts',
    label: '🍑 Desserts',
    items: [
      {
        name: 'Warm Georgia Peach Cobbler',
        description: 'Sweet, spiced Georgia peaches baked beneath a buttery, flaky golden crust. Served warm.',
        price: '$3.49',
        tags: ['House Signature', 'Must Try'],
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&q=80&auto=format&fit=crop',
        popular: true,
      },
      {
        name: 'Southern Pecan Pie',
        description: 'Decadent caramel-brown sugar custard packed with roasted Georgia pecans in a flaky crust.',
        price: '$3.49',
        tags: ['Southern Classic'],
        image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=500&q=80&auto=format&fit=crop',
        popular: false,
      },
      {
        name: 'Classic Banana Pudding',
        description: 'Layers of velvety vanilla pudding, fresh ripe bananas, and crisp vanilla wafers.',
        price: '$3.49',
        tags: ['Crowd Favorite'],
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80&auto=format&fit=crop',
        popular: true,
      },
      {
        name: 'Glazed Lemon Pound Cake',
        description: 'Dense, moist buttermilk pound cake drizzled with a sweet citrus lemon glaze.',
        price: '$3.49',
        tags: ['Freshly Baked'],
        image: 'https://images.unsplash.com/photo-1619985632461-f33748ef4545?w=500&q=80&auto=format&fit=crop',
        popular: false,
      },
    ],
  },
];

// Buffet pricing tiers
export const buffetPricing = [
  {
    tier: 'Adult',
    price: '$13.99',
    note: 'Per person',
    description: 'Unlimited access to all hot meat stations, vegetable bar, salad bar, and dessert bar.',
    features: ['All you can eat meats', 'Full vegetable bar', 'Fresh salad bar', 'Homemade desserts', 'Warm cornbread'],
    popular: true,
  },
  {
    tier: 'Senior (60+)',
    price: '$12.99',
    note: 'Per person',
    description: 'Full buffet access with our heartfelt discount for senior community members.',
    features: ['All you can eat meats', 'Full vegetable bar', 'Fresh salad bar', 'Homemade desserts'],
    popular: false,
  },
  {
    tier: 'Kids (Ages 4 to 10)',
    price: '$7.99',
    note: 'Per child',
    description: 'Kid favorites including fried chicken, mac and cheese, sweet corn, and desserts.',
    features: ['Fried chicken & mac & cheese', 'Sweet corn & butter beans', 'Unlimited desserts', 'Family-friendly atmosphere'],
    popular: false,
  },
  {
    tier: 'Toddlers (3 & Under)',
    price: 'FREE',
    note: 'With paying adult',
    description: 'Little ones 3 and under dine free with every adult buffet purchase.',
    features: ['High chairs available', 'Family seating', 'Warm welcoming staff'],
    popular: false,
  },
];

// To-go plates
export const toGoPlates = [
  {
    name: '1 Meat & 2 Vegetables',
    price: '$10.99',
    description: 'Your choice of 1 meat and 2 Southern sides with warm cornbread or dinner roll.',
    popular: true,
  },
  {
    name: '2 Meats & 3 Vegetables Feast',
    price: '$14.99',
    description: 'Your choice of 2 meats and 3 country sides with warm cornbread or dinner roll.',
    popular: false,
  },
  {
    name: 'Country Veggie Plate (4 Sides)',
    price: '$8.99',
    description: 'Pick any 4 vegetable sides or cold salad bar items with homemade cornbread.',
    popular: false,
  },
  {
    name: 'Mac & Cheese Meat Bowl',
    price: '$8.99',
    description: 'Creamy baked mac and cheese topped with your choice of daily meat.',
    popular: true,
  },
];

// Reviews
export const reviews = [
  {
    id: 1,
    author: 'Marcus Thornton',
    badge: 'Local Guide · 48 reviews',
    rating: 5,
    date: '3 months ago',
    text: "If you want real home-cooked food that tastes like Sunday dinner at your grandmother's house, BJ Buffet is the real deal here in Conyers. The fried chicken was hot and seasoned well with crispy skin. The mac and cheese was rich and creamy, not watery like at other buffets. You cannot beat the value for a family meal.",
    initials: 'MT',
    color: 'from-brand-red to-brand-amber',
    favoriteDishes: ['Fried Chicken', 'Creamy Mac & Cheese', 'Peach Cobbler'],
  },
  {
    id: 2,
    author: 'Brenda Washington',
    badge: 'Local Guide · 122 reviews',
    rating: 5,
    date: '1 month ago',
    text: 'We brought our family group of 8 after Sunday service and everyone found dishes they enjoyed. The candied yams were tender with that sweet glaze, the beef tips over rice had plenty of savory gravy, and the hot peach cobbler made my day. Attentive staff kept our sweet teas refilled without asking.',
    initials: 'BW',
    color: 'from-emerald-500 to-teal-600',
    favoriteDishes: ['Candied Yams', 'Beef Tips over Rice', 'Sweet Tea', 'Peach Cobbler'],
  },
  {
    id: 3,
    author: 'David Kowalski',
    badge: 'Local Guide · 31 reviews',
    rating: 4,
    date: '2 months ago',
    text: 'A nice hidden gem tucked behind the Truist Bank building off Highway 138. Much more peaceful and clean than massive commercial chain buffets. The rib tips on Monday are fantastic with good smoky BBQ sauce, and the deviled eggs on the salad bar are always fresh. Great lunch stop.',
    initials: 'DK',
    color: 'from-blue-500 to-indigo-600',
    favoriteDishes: ['Monday Rib Tips', 'Deviled Eggs', 'Cornbread'],
  },
  {
    id: 4,
    author: 'Patricia Reynolds',
    badge: 'Verified Diner',
    rating: 5,
    date: '4 months ago',
    text: 'I frequently order the to-go 1-meat 2-veggie plate for lunch during my work breaks. The baked chicken and collard greens are consistently good with generous portions. Sweet ladies at the front counter always greet you with a genuine smile. A true Conyers staple.',
    initials: 'PR',
    color: 'from-fuchsia-500 to-pink-600',
    favoriteDishes: ['1 Meat 2 Veggie Plate', 'Baked Chicken', 'Collard Greens'],
  },
  {
    id: 5,
    author: 'Anthony Bennett',
    badge: 'Local Guide · 84 reviews',
    rating: 5,
    date: '5 months ago',
    text: 'Great old-fashioned soul food buffet. Deviled eggs and cucumber salad on the cold bar were crispy and fresh. The meatloaf tasted homemade, hearty, and seasoned just right. Will definitely bring my coworkers back for Friday lunch.',
    initials: 'AB',
    color: 'from-amber-500 to-orange-600',
    favoriteDishes: ['Homemade Meatloaf', 'Cucumber Salad', 'Mac & Cheese'],
  },
  {
    id: 6,
    author: 'Keisha Mitchell',
    badge: 'Verified Diner',
    rating: 4,
    date: '6 months ago',
    text: 'Honest country cooking and sweet hospitality. The fried chicken alone is worth the trip, especially when they bring out the hot fresh tray. Affordable price for an all-you-can-eat meal. Will be back.',
    initials: 'KM',
    color: 'from-violet-500 to-purple-700',
    favoriteDishes: ['Fried Chicken', 'Sweet Corn', 'Banana Pudding'],
  },
  {
    id: 7,
    author: 'Carolyn Jenkins',
    badge: 'Local Guide · 56 reviews',
    rating: 5,
    date: '1 month ago',
    text: 'Sunday dinner after church was wonderful. The golden fried chicken and hot collards hit the spot, and our server made sure we had fresh hot cornbread right at our table.',
    initials: 'CJ',
    color: 'from-rose-500 to-red-600',
    favoriteDishes: ['Fried Chicken', 'Collard Greens', 'Cornbread'],
  },
  {
    id: 8,
    author: 'Reginald Hayes',
    badge: 'Verified Diner',
    rating: 5,
    date: '3 weeks ago',
    text: 'Huge portions on the to-go plates. The BBQ ribs and macaroni are the best in the area. Great friendly staff and very fair prices.',
    initials: 'RH',
    color: 'from-amber-600 to-yellow-600',
    favoriteDishes: ['BBQ Ribs', 'Mac & Cheese', 'Peach Cobbler'],
  },
];

// Delivery platforms
export const deliveryPlatforms = [
  { name: 'DoorDash', color: '#FF3008', url: 'https://www.doordash.com/store/bj-buffet-conyers-699742/', emoji: '🔴' },
  { name: 'Uber Eats', color: '#06C167', url: 'https://www.ubereats.com/store/bj-buffet-1823-hwy-138-se/', emoji: '🟢' },
  { name: 'Grubhub', color: '#F06C3E', url: 'https://www.grubhub.com/restaurant/bj-buffet-1823-hwy-138-se/', emoji: '🟠' },
  { name: 'Postmates', color: '#000000', url: 'https://postmates.com/store/bj-buffet-1823-hwy-138-se/', emoji: '⚫' },
];

// Gallery images from real Google Maps diners & buffet line
export interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'hot-buffet' | 'plates' | 'sides' | 'desserts';
  categoryLabel: string;
  tag: string;
}

export const galleryCategories = [
  { id: 'all', label: 'All Photos' },
  { id: 'hot-buffet', label: 'Hot Buffet Bars' },
  { id: 'plates', label: 'Plates & Meats' },
  { id: 'sides', label: 'Sides & Salads' },
  { id: 'desserts', label: 'Desserts' },
] as const;

export const galleryImages: GalleryImageItem[] = [
  {
    id: 'g-01',
    src: '/images/gallery/gallery-01.jpg',
    alt: 'Southern fried chicken plate with creamy baked mac and cheese, collard greens, and warm cornbread muffin',
    title: 'Crispy Fried Chicken Plate',
    category: 'plates',
    categoryLabel: 'Plates & Meats',
    tag: 'Sunday Dinner',
  },
  {
    id: 'g-02',
    src: '/images/gallery/gallery-02.jpg',
    alt: 'Garden salad bowls with paprika deviled eggs, cornbread muffin, and country gravy',
    title: 'Fresh Cold Bar Salads',
    category: 'sides',
    categoryLabel: 'Sides & Salads',
    tag: 'Salad Bar',
  },
  {
    id: 'g-03',
    src: '/images/gallery/gallery-03.jpg',
    alt: 'Fresh whole Southern pecan pie, cookies, brownies, and potato salad on the dessert buffet',
    title: 'Southern Pecan Pie & Dessert Bar',
    category: 'desserts',
    categoryLabel: 'Desserts',
    tag: 'Homemade Sweets',
  },
  {
    id: 'g-04',
    src: '/images/gallery/gallery-04.jpg',
    alt: 'Crispy fried chicken drumstick served with buttery yellow squash casserole and mashed potatoes with gravy',
    title: 'Fried Chicken & Country Squash',
    category: 'plates',
    categoryLabel: 'Plates & Meats',
    tag: 'Homestyle Plate',
  },
  {
    id: 'g-05',
    src: '/images/gallery/gallery-05.jpg',
    alt: 'Glazed barbecue chicken wings, crispy fried chicken, creamy baked macaroni and cheese, and cornbread dressing',
    title: 'BBQ Wings & Cornbread Dressing',
    category: 'plates',
    categoryLabel: 'Plates & Meats',
    tag: 'Daily Special',
  },
  {
    id: 'g-06',
    src: '/images/gallery/gallery-06.jpg',
    alt: 'Country green beans with red potatoes, seasoned collard greens, sauteed cabbage, mac & cheese, and cornbread',
    title: 'Country Veggie Four-Side Plate',
    category: 'plates',
    categoryLabel: 'Plates & Meats',
    tag: 'Vegetable Bar',
  },
  {
    id: 'g-07',
    src: '/images/gallery/gallery-07.jpg',
    alt: 'Creamy baked macaroni and cheese made with rich melted cheddar',
    title: 'Baked Southern Mac & Cheese',
    category: 'sides',
    categoryLabel: 'Sides & Salads',
    tag: 'Rockdale Favorite',
  },
  {
    id: 'g-08',
    src: '/images/gallery/gallery-08.jpg',
    alt: 'Piled high tray of freshly fried crispy golden Southern chicken right on the BJ Buffet steam line',
    title: 'Golden Fried Chicken Steam Table',
    category: 'hot-buffet',
    categoryLabel: 'Hot Buffet Bars',
    tag: 'Fresh Every 20 Min',
  },
  {
    id: 'g-09',
    src: '/images/gallery/gallery-09.jpg',
    alt: 'Tender fresh collard greens slow-simmered in seasoned potlikker',
    title: 'Slow-Simmered Collard Greens',
    category: 'sides',
    categoryLabel: 'Sides & Salads',
    tag: 'Potlikker Seasoned',
  },
  {
    id: 'g-10',
    src: '/images/gallery/gallery-10.jpg',
    alt: 'Tender country cabbage sauteed with sweet onions and butter on the hot buffet line',
    title: 'Country Steamed Cabbage',
    category: 'hot-buffet',
    categoryLabel: 'Hot Buffet Bars',
    tag: 'Steamed Fresh',
  },
  {
    id: 'g-11',
    src: '/images/gallery/gallery-11.jpg',
    alt: 'Golden cornmeal-breaded fried green tomatoes cooling on the buffet wire rack',
    title: 'Crispy Fried Green Tomatoes',
    category: 'hot-buffet',
    categoryLabel: 'Hot Buffet Bars',
    tag: 'Southern Classic',
  },
  {
    id: 'g-12',
    src: '/images/gallery/gallery-12.png',
    alt: 'Chilled macaroni salad with sweet relish, diced celery, red bell peppers, and cracked black pepper',
    title: 'Creamy Cold Bar Macaroni Salad',
    category: 'sides',
    categoryLabel: 'Sides & Salads',
    tag: 'Deli Bar',
  },
  {
    id: 'g-13',
    src: '/images/gallery/gallery-13.jpg',
    alt: 'Hearty sliced smoked sausage sauteed with seasoned shredded sauerkraut on the hot buffet table',
    title: 'Smoked Sausage & Sauerkraut',
    category: 'hot-buffet',
    categoryLabel: 'Hot Buffet Bars',
    tag: 'Hot Entree Bar',
  },
  {
    id: 'g-14',
    src: '/images/gallery/gallery-14.jpg',
    alt: 'Rich chocolate fudge brownie bites and fresh-baked M&M chocolate chip cookies on the dessert tier',
    title: 'Fresh Brownies & M&M Cookies',
    category: 'desserts',
    categoryLabel: 'Desserts',
    tag: 'Sweet Treats',
  },
  {
    id: 'g-15',
    src: '/images/gallery/gallery-15.jpg',
    alt: 'Tender cut sweet potatoes simmering in a rich brown sugar and warm spiced butter syrup',
    title: 'Sweet Candied Yams',
    category: 'hot-buffet',
    categoryLabel: 'Hot Buffet Bars',
    tag: 'Brown Sugar Glaze',
  },
  {
    id: 'g-16',
    src: '/images/gallery/gallery-16.jpg',
    alt: 'Traditional baked cornbread dressing with celery, sweet onions, and poultry seasoning',
    title: 'Homemade Cornbread Dressing',
    category: 'sides',
    categoryLabel: 'Sides & Salads',
    tag: 'Family Recipe',
  },
];

export const stats = [
  { value: '360+', label: 'Google Reviews' },
  { value: '4.1★', label: 'Google Rating' },
  { value: '$13.99', label: 'All-You-Can-Eat' },
  { value: '7 Days', label: 'Open Every Day' },
];
