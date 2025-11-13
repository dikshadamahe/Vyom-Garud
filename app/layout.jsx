import './globals.css';

export const metadata = {
  title: 'VyomGarud - Military-Grade UAV Defense Systems',
  description: 'Military-grade counter-UAV systems for defense agencies, critical infrastructure, and high-security facilities worldwide.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/drone1.jpg" as="image" />
        <link rel="preload" href="/images/vyomgarud_logo.jpg" as="image" />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
