import './globals.css';

export const metadata = {
  title: 'VyomGarud',
  description: 'Military-grade UAV defense systems',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
