# VyomGarud Landing Page

A premium, military-grade landing page for VyomGarud — a UAV/drone defense company. Built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## 🚀 Tech Stack

- **Next.js 14+** (App Router)
- **React 18**
- **Tailwind CSS** (Custom Design System)
- **Framer Motion** (Animations)
- **TypeScript/JavaScript**

---

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd VyomGuard

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

---

## 🛠️ Scripts

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

---

## 🎨 Design System

### **Brand Identity**
- Military-grade precision
- Professional, dark-tech aesthetic
- Futuristic minimal design
- High-end, geometric, tactical

### **Color Palette**

| Token          | Hex       | Usage                        |
|----------------|-----------|------------------------------|
| `charcoal`     | `#0C0C0C` | Main background              |
| `steel-900`    | `#1A1A1D` | Cards, surfaces              |
| `steel-800`    | `#2C2C30` | Nav, panels                  |
| `line-gray`    | `#2F2F2F` | Borders                      |
| `whitesoft`    | `#F5F5F7` | Light text                   |
| `white`        | `#FFFFFF` | Main text                    |
| `brand-orange` | `#FF7B00` | Accent, CTAs only            |
| `gray500`      | `#B9BCC0` | Secondary text               |

### **Typography**
- **Headings:** Montserrat (Bold/Semibold)
- **Body:** Inter (Regular/Medium)

### **Spacing Scale**
8px system: `4, 8, 12, 16, 20, 24, 32, 48, 64, 96`

### **Motion**
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Subtle, premium animations
- Slow parallax, corner strokes, soft glows

---

## 📂 Project Structure

```
VyomGuard/
├── app/
│   ├── globals.css          # Global styles + CSS variables
│   ├── layout.jsx           # Root layout
│   └── page.jsx             # Main landing page
├── src/
│   └── components/
│       ├── NavBar.jsx       # Navigation bar
│       ├── Hero.jsx         # Hero section
│       ├── About.jsx        # About section
│       ├── CapabilityCard.jsx     # Card component
│       ├── CapabilitiesGrid.jsx   # Capabilities section
│       ├── Highlights.jsx   # Highlights section
│       └── ContactForm.jsx  # Contact form
├── public/
│   └── images/              # Image assets
├── docs/                    # Documentation
├── tailwind.config.js       # Tailwind configuration
├── package.json
└── README.md
```

---

## 🧩 Components

### **NavBar**
- Translucent charcoal background
- Orange underline for active links
- Responsive hamburger menu

### **Hero**
- Big bold Montserrat heading
- Primary + secondary CTAs
- Animated gyroscopic rings
- Parallax effects

### **About**
- Two-column layout
- Statistics display
- Military-grade messaging

### **CapabilitiesGrid**
- 4 capability cards
- Hover scale animations
- Orange corner accents

### **Highlights**
- 3-item grid
- Icon + title + description
- Orange micro-icons

### **ContactForm**
- Dark minimal inputs
- Accessible labels
- Orange submit button

---

## 🚢 Deployment

### **Vercel (Recommended)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

### **Other Platforms**

**Build the project:**
```bash
npm run build
```

**Deploy the `.next` folder** to any static hosting or Node.js server.

---

## 🔧 Environment Variables

Create a `.env.local` file if needed:

```env
# Add any API keys or environment variables here
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 📝 License

Proprietary — VyomGarud Defense Systems

---

## 👨‍💻 Development Notes

- **No bright gradients** — keep tactical and minimal
- **Orange is used sparingly** — only for CTAs and highlights
- **All animations follow military-grade precision** — subtle and professional
- **Responsive on all devices** — mobile-first approach

---

## 📞 Contact

For questions or support, reach out via the contact form on the website.

**VyomGarud** — Defend Your Airspace.
