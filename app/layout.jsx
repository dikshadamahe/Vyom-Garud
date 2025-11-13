import './globals.css';

export const metadata = {
  title: 'VyomGarud - Military-Grade UAV Defense Systems',
  description: 'Military-grade counter-UAV systems for defense agencies, critical infrastructure, and high-security facilities worldwide.',
  openGraph: {
    title: 'VyomGarud - Military-Grade UAV Defense Systems',
    description: 'Military-grade counter-UAV systems for defense agencies, critical infrastructure, and high-security facilities worldwide.',
    images: [{ url: '/images/drone1.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VyomGarud - Military-Grade UAV Defense Systems',
    description: 'Military-grade counter-UAV systems for defense agencies, critical infrastructure, and high-security facilities worldwide.',
    images: ['/images/drone1.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="canonical" href="https://vyomgarud.com" />
        <link rel="preload" href="/images/drone1.jpg" as="image" />
        <link rel="preload" href="/images/vyomgarud_logo.jpg" as="image" />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
