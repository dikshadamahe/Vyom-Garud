# VyomGarud - Counter-UAV Defense Systems

A modern, responsive landing page for VyomGarud, a military-grade drone defense company. Built as part of the Web Developer Intern Assessment.

## Overview

VyomGarud is a single-page application showcasing advanced counter-UAV defense capabilities through a cinematic, professional interface. The site emphasizes precision engineering, military-grade reliability, and autonomous defense systems.

## Tech Stack

- **Framework:** Next.js 15.1.6 (App Router)
- **UI Library:** React 19.0.0
- **Styling:** Tailwind CSS 3.4.0
- **Animations:** Framer Motion 12.23.24
- **Typography:** Montserrat, Inter (Google Fonts)
- **Build Tools:** PostCSS, Autoprefixer

## Features

### Design & UI
- Dark, military-aesthetic interface
- Fully responsive (mobile, tablet, desktop)
- Custom color palette (charcoal, steel, brand orange)
- Glass morphism effects and gradient overlays
- Professional typography hierarchy

### Animations
- Scroll-triggered reveals with Framer Motion
- Parallax effects on hero section
- Animated statistics counters
- Smooth section transitions
- Interactive hover states throughout

### Sections
1. **Hero** - Full-screen video background with cinematic presentation
2. **Performance Metrics** - Animated statistics with gradient styling
3. **About** - Mission statement and feature showcase
4. **Capabilities** - Four core defense systems with detailed specifications
5. **Contact** - Functional contact form with validation
6. **Footer** - Multi-column layout with social links

### Technical Highlights
- Optimized video backgrounds
- Next.js Image optimization
- Component-based architecture
- Reusable Tailwind utility classes
- Smooth 60fps animations
- Accessible navigation

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd VyomGarud
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
VyomGarud/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.jsx           # Root layout with metadata
│   └── page.jsx             # Main landing page
├── src/
│   └── components/
│       ├── NavBar.jsx       # Navigation with scroll effects
│       ├── Hero.jsx         # Full-screen hero with video
│       ├── Highlights.jsx   # Animated metrics section
│       ├── About.jsx        # Mission and features
│       ├── Capabilities.jsx # Product showcase
│       ├── Contact.jsx      # Contact form
│       ├── Footer.jsx       # Site footer
│       ├── MagneticButton.jsx
│       └── ScrollProgress.jsx
├── public/
│   ├── images/              # Static images
│   └── videos/              # Background videos
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json
```

## Design System

### Colors
- **Charcoal:** #0B0B0B (primary background)
- **Steel-900:** #111214 (secondary background)
- **Whitesoft:** #ECEFF1 (primary text)
- **Brand Orange:** #FF7B00 (accents)

### Typography
- **Headlines:** Montserrat (Bold/ExtraBold)
- **Body Text:** Inter (Regular/Medium)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Key Components

### Hero Section
- Full-viewport video background
- Animated grid overlay
- Magnetic CTA buttons
- Parallax scroll effects
- Company logo watermark

### Capabilities Section
- Four detailed product cards
- Real images and video backgrounds
- Gradient overlays with scan effects
- Alternating zigzag layout
- Detailed specification lists

### Contact Form
- Field validation
- Animated focus states
- Form state management
- Professional styling

## Performance Optimizations

- Video lazy loading
- Next.js automatic code splitting
- Optimized images with Next/Image
- GPU-accelerated animations
- Efficient re-renders with React 19
- Tailwind CSS purging in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

### Animation Strategy
All animations use Framer Motion with `viewport={{ once: true }}` to prevent unnecessary re-renders. Scroll-triggered animations use `whileInView` with appropriate margins for optimal timing.

### Styling Approach
Custom Tailwind utilities are defined in `globals.css` for consistent spacing, typography, and UI elements. This ensures maintainability and reduces code duplication.

### Component Philosophy
Components are kept small and focused. Shared logic is extracted into custom hooks or utility functions. Each component handles its own animations and state.

## Assessment Requirements

This project fulfills all requirements from the Web Developer Intern Assessment:

- Modern, responsive landing page
- React/Next.js framework
- Tailwind CSS styling
- Dark, professional aesthetic
- Required sections (Hero, About, Capabilities, Highlights, Contact, Footer)
- Subtle animations throughout
- Clean, organized code
- Comprehensive documentation

## Credits

- Design inspiration: Anduril, Raphe, Tesla
- Fonts: Google Fonts (Montserrat, Inter)
- Icons: Custom SVG implementation
- Videos and images: Public folder assets

## License

This project was created for educational and assessment purposes.

---

**Built with attention to detail and modern web technologies.**
