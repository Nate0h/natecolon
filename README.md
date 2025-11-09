# Nate Colon - Portfolio Website ☁️✈️

A modern, animated portfolio website with a unique cloud and sky theme. Built with Next.js, TypeScript, Framer Motion, and TailwindCSS.

## ✨ Features

- **Animated Cloud Background** - Floating SVG clouds with parallax effect on hero section
- **Flying Airplane Animation** - Periodic airplane flying across the sky
- **Smooth Scroll Animations** - Sections fade in as you scroll with Framer Motion
- **Airy Cloud Theme** - Sky blue gradients and cloud-like aesthetics throughout
- **Fully Responsive** - Works beautifully on mobile, tablet, and desktop
- **Modern Tech Stack** - Next.js 16, React 19, TypeScript, TailwindCSS v4

## 🎨 Theme

The entire site features an "airy cloud" aesthetic with:
- Sky blue to cyan gradients
- Floating cloud animations
- Glass-morphism effects (backdrop blur)
- Smooth transitions and hover effects
- Light, dreamy color palette

## 🚀 Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📁 Project Structure

```
├── app/
│   ├── page.tsx          # Main page with all sections
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Hero.tsx          # Landing section with clouds & airplane
│   ├── About.tsx         # About me section
│   ├── Experience.tsx    # Work experience timeline
│   ├── Skills.tsx        # Tech stack grid
│   ├── Education.tsx     # Education details
│   ├── Contact.tsx       # Contact form & links
│   ├── Navigation.tsx    # Sticky nav bar
│   ├── CloudBackground.tsx  # Animated clouds component
│   └── FloatingElement.tsx  # Reusable floating animation
└── public/               # Static assets
```

## 🛠️ Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`)
   - Change your name and tagline
   
2. **About Section** (`components/About.tsx`)
   - Update your bio and description

3. **Experience** (`components/Experience.tsx`)
   - Add your work history in the `experiences` array

4. **Skills** (`components/Skills.tsx`)
   - Modify the `skillCategories` array with your tech stack

5. **Education** (`components/Education.tsx`)
   - Update the `education` array with your degrees

6. **Contact** (`components/Contact.tsx`)
   - Add your email, GitHub, and LinkedIn links
   - Place your resume PDF in `/public` folder

### Customize Colors

All colors use TailwindCSS classes. To change the theme:
- Blue/Cyan gradients: Search for `from-blue-` and `to-cyan-`
- Replace with your preferred Tailwind color palette

## 🎭 Animations

- **Clouds**: Continuous horizontal movement with varying speeds
- **Airplane**: Flies across every ~45 seconds with vertical bobbing
- **Scroll Animations**: Fade-in and slide effects using Framer Motion's `useInView`
- **Hover Effects**: Scale transforms and color transitions

## 📦 Dependencies

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **TailwindCSS v4** - Utility-first CSS

## 🚢 Deployment

Deploy to Vercel (recommended):
```bash
npm run build
```

Or deploy to any platform that supports Next.js.

## 📝 License

MIT License - feel free to use this as a template for your own portfolio!
