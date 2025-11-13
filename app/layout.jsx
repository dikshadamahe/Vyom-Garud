// app/layout.jsx
import './globals.css';

// The fonts are imported in globals.css, so no next/font needed here.

export const metadata = {
  title: 'VyomGarud - Precision Autonomy',
  description: 'Military-grade counter-UAV defense systems.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* The <body> tag gets its base styles from globals.css */}
      <body>{children}</body>
    </html>
  );
}
