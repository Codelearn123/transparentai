# PixelClips Landing Page

A stunning, modern landing page for PixelClips - an AI-powered visual creation platform. Built with Next.js 15, Tailwind CSS 4, and featuring a premium black & gold theme with smooth animations.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16 with App Router, React 19, TypeScript
- **Premium Design**: Black & gold color scheme with sophisticated animations
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Framer Motion for buttery-smooth transitions and effects
- **Performance Optimized**: Built for speed with Next.js best practices
- **SEO Ready**: Comprehensive metadata and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels

## 📦 Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 🎨 Components

- **Navigation**: Sticky header with mobile menu and smooth scroll
- **Hero**: Parallax scrolling effect with animated background
- **Features**: 8 key features with hover animations
- **How It Works**: 4-step process with animated connectors
- **Models**: 12 AI models showcase in a responsive grid
- **Pricing**: 2 pricing tiers with feature comparison
- **FAQ**: Accordion-style frequently asked questions
- **Footer**: Complete footer with links, newsletter, and social media

## 🛠️ Installation

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd transparentai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

4. **Add your API keys** (if needed)
   ```env
   FAL_API_KEY=your_api_key_here
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and animations
├── src/
│   ├── components/
│   │   ├── Navigation.jsx  # Header navigation
│   │   ├── Hero.jsx        # Hero section with parallax
│   │   ├── Features.jsx    # Features grid
│   │   ├── HowItWorks.jsx  # Process steps
│   │   ├── Models.jsx      # AI models showcase
│   │   ├── Pricing.jsx     # Pricing tiers
│   │   ├── FAQ.jsx         # FAQ accordion
│   │   └── Footer.jsx      # Footer section
│   └── lib/
│       └── constants.js    # App constants and data
├── public/                 # Static assets
├── .env.example           # Environment variables template
└── README.md              # This file
```

## 🎨 Color Palette

The landing page uses a premium black & gold theme:

- **Primary Gold**: `#D4AF37`
- **Light Gold**: `#FFD700`
- **Dark Gold**: `#B8860B`
- **Background**: `#0a0a0a`
- **Foreground**: `#ededed`

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS 4 with custom color themes defined in `globals.css`:

```css
--color-gold: #D4AF37;
--color-gold-light: #FFD700;
--color-gold-dark: #B8860B;
```

### Constants

All content (models, pricing, features, FAQs) is centralized in `src/lib/constants.js` for easy updates.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ✨ Key Features

### Animations

- Parallax scrolling on hero section
- Staggered fade-in animations
- Hover effects on cards and buttons
- Smooth scroll navigation
- Accordion animations for FAQ
- Floating elements
- Glow effects on interactive elements

### Performance

- Optimized images and assets
- Code splitting with Next.js
- Lazy loading components
- Efficient re-renders with React
- CSS optimizations

### Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Alt text for images

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

Build the production bundle:

```bash
npm run build
npm run start
```

## 📝 Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
FAL_API_KEY=your_fal_api_key_here
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## 💬 Support

For support, email hello@pixelclips.ai or join our Discord community.

## 🎯 Roadmap

- [ ] Add dark/light theme toggle
- [ ] Implement blog section
- [ ] Add user testimonials
- [ ] Create gallery of AI-generated content
- [ ] Add interactive demo
- [ ] Implement i18n for multiple languages

## 👨‍💻 Development

### Running Tests

```bash
npm run test
```

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npm run type-check
```

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons

---

Built with ❤️ by the PixelClips team
