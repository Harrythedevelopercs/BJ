import type { Metadata } from 'next';
import { Bebas_Neue, Jost } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const jost = Jost({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BJ Buffet Conyers | Authentic Southern Soul Food & Country Buffet',
  description:
    'Taste real Southern home cooking at BJ Buffet in Conyers, GA. All-you-can-eat buffet featuring crispy fried chicken, beef tips, mac & cheese, candied yams, peach cobbler & more. Open daily.',
  keywords:
    'BJ Buffet, BJ Buffet Conyers, Southern buffet, soul food Conyers GA, fried chicken, all you can eat buffet, 1823 Hwy 138',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'BJ Buffet Conyers | Authentic Southern Home Cooking',
    description:
      'Hearty Southern comfort food & all-you-can-eat country buffet in Conyers, GA. Open daily.',
    siteName: 'BJ Buffet Conyers',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${jost.variable} scroll-smooth`}>
      <head>
        <meta name="geo.region" content="US-GA" />
        <meta name="geo.placename" content="Conyers" />
        <meta name="geo.position" content="33.6408013;-84.0160401" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'BJ Buffet',
              servesCuisine: ['Southern', 'Soul Food', 'American', 'Buffet'],
              priceRange: '$$',
              telephone: '(678) 806-5590',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1823 Hwy 138 SE, Suite 3000',
                addressLocality: 'Conyers',
                addressRegion: 'GA',
                postalCode: '30013',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 33.6408013,
                longitude: -84.0160401,
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.1',
                reviewCount: '365',
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased bg-white text-gray-900 selection:bg-brand-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
