# Femina Plus - Beauty & Wellness Center Website

A modern, responsive website for Femina Plus beauty and wellness center built with Astro and Tailwind CSS. The site features a clean design with a black and white color scheme accented by gold elements, showcasing services, locations, testimonials, and an integrated Instagram feed.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, elegant design with black, white, and gold color scheme
- **Service Showcase**: Display of beauty services including hair, makeup, nails, skin, and lashes
- **Location Finder**: Multiple salon locations with contact information and directions
- **Customer Testimonials**: Video testimonial carousel
- **Booking Form**: Appointment booking form with service and branch selection
- **Instagram Integration**: Social media feed component (ready for API integration)
- **Fixed Navigation**: Transparent navigation bar that overlays the hero section
- **WhatsApp Integration**: Quick contact via WhatsApp

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) v5.15.5
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v3.4.18
- **Language**: TypeScript
- **Build Tool**: Vite

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── hero-bg.jpg          # Hero section background image
├── src/
│   ├── components/
│   │   ├── Header.astro      # Navigation header with logo
│   │   ├── Hero.astro        # Hero section with main headline
│   │   ├── EmpoweringWomen.astro  # Services section
│   │   ├── NextGenHealth.astro    # Health solutions carousel
│   │   ├── Promotional.astro     # Promotional section (50% off)
│   │   ├── BrandLogos.astro      # Brand partner logos
│   │   ├── Locations.astro       # Location cards section
│   │   ├── Testimonials.astro    # Customer testimonials carousel
│   │   ├── BookingForm.astro    # Appointment booking form
│   │   ├── InstagramFeed.astro  # Instagram feed component
│   │   └── Footer.astro          # Footer with contact info
│   ├── pages/
│   │   ├── index.astro       # Main homepage
│   │   └── api/
│   │       └── instagram.ts  # Instagram API endpoint (optional)
│   └── ...
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd curved-altitude
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

The dev server includes:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for component changes
- Error overlay for debugging

### Build

Build the production site:

```bash
npm run build
```

This will create an optimized production build in the `./dist/` directory.

### Preview Production Build

Preview the production build locally before deploying:

```bash
npm run preview
```

This serves the built site from `./dist/` for local testing.

## 📝 Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs all dependencies                        |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds production site to `./dist/`              |
| `npm run preview`         | Preview production build locally                 |
| `npm run astro ...`       | Run Astro CLI commands                          |
| `npm run astro -- --help` | Get help using the Astro CLI                    |

## 🔧 Configuration

### Instagram API Integration

To enable Instagram feed integration:

1. Set up Instagram Basic Display API:
   - Create a Facebook App at [Facebook Developers](https://developers.facebook.com/)
   - Add Instagram Basic Display product
   - Get your Access Token

2. Create a `.env` file in the root directory:
```env
INSTAGRAM_ACCESS_TOKEN=your_access_token_here
INSTAGRAM_USER_ID=me  # or your specific user ID
```

3. Uncomment the API code in `src/components/InstagramFeed.astro` (lines 57-73)

### Tailwind CSS

Tailwind CSS is configured in `tailwind.config.mjs`. The configuration includes:
- Custom serif font family
- Content paths for Astro files

### Astro Configuration

Astro is configured in `astro.config.mjs` with:
- Tailwind CSS integration
- Static site generation (SSG)

## 🎨 Components Overview

- **Header**: Fixed transparent navigation with logo and menu items
- **Hero**: Full-screen hero section with background image and call-to-action
- **EmpoweringWomen**: Service cards grid with pricing options
- **NextGenHealth**: Carousel showcasing health solutions
- **Promotional**: Special offer section with booking CTA
- **BrandLogos**: Partner brand logos display
- **Locations**: Location cards with addresses and contact info
- **Testimonials**: Customer testimonial carousel
- **BookingForm**: Appointment booking form with validation
- **InstagramFeed**: Social media feed (placeholder data or API integration)
- **Footer**: Contact information, social links, and taglines

## 📱 Responsive Breakpoints

The site uses Tailwind's default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🌐 Deployment

The site can be deployed to any static hosting service:

- **Netlify**: Connect your repository or use Netlify CLI
- **Vercel**: Import your repository or use Vercel CLI
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Any static host**: Upload the `./dist/` folder after building

### Build for Production

```bash
npm run build
```

The `./dist/` folder contains all static files ready for deployment.

## 📄 License

Copyright 2025 Femina Plus. All rights reserved.

## 🤝 Support

For questions or support, contact:
- Phone: +91 
- Website: [Femina Plus](https://feminaplus.com)

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro Discord Community](https://astro.build/chat)
