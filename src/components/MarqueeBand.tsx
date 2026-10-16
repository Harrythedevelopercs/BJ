'use client';

const items = [
  'SOUTHERN CRISPY FRIED CHICKEN',
  '4.1★ GOOGLE RATED (365+ REVIEWS)',
  'ALL-YOU-CAN-EAT BUFFET FROM $13.99',
  'WARM GEORGIA PEACH COBBLER',
  'SLOW-SIMMERED COLLARD GREENS',
  'HICKORY SMOKED BBQ RIB TIPS',
  'OPEN 7 DAYS A WEEK',
  'SAVORY BEEF TIPS OVER RICE',
  'CONYERS, GA · HIGHWAY 138 SE',
  'HOMEMADE BANANA PUDDING',
  'CREAMY BAKED MAC & CHEESE',
  'HOT SCRATCH-COOKED SOUL FOOD',
];

export default function MarqueeBand() {
  const repeated = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3 bg-brand-red border-y-2 border-white/20 shadow-md">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-red to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-red to-transparent z-10 pointer-events-none" />

      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-8 text-white font-heading text-xl sm:text-2xl tracking-widest uppercase whitespace-nowrap"
          >
            {item}
            <span className="text-white/40 text-sm">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
