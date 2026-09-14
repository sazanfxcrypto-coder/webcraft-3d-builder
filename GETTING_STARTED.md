# WebCraft 3D Builder
## Universal 3D Website Builder for Global Markets

### 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm run start
```

### 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── 3D/             # Three.js 3D components
│   ├── Layout/         # Navigation, Footer
│   ├── Sections/       # Page sections
│   └── Providers/      # Context providers
├── config/             # Configuration files
├── lib/                # Utilities
├── locales/            # Translations (ru, en, es)
└── styles/             # Global styles
```

### 🎨 Features

✨ **3D Interactive Elements**
- Advanced Three.js scenes
- Animated particles and orbs
- Interactive rotating 3D models

🌍 **Multi-Language Support**
- Russian, English, Spanish
- Easy to add more languages
- Auto-detection by geolocation

📱 **Fully Responsive**
- Mobile, tablet, desktop optimized
- Touch-friendly navigation
- Smooth animations

⚡ **Performance**
- Next.js SSR/SSG
- Code splitting
- Image optimization

### 🔧 Customization

**Change Colors:**
Edit `tailwind.config.js`

**Add Languages:**
1. Create `src/locales/[lang].json`
2. Update `src/lib/i18n.ts`
3. Update `next.config.js`

**Add 3D Elements:**
Create new components in `src/components/3D/`

### 🚀 Deployment

**Vercel:**
```bash
vercel deploy
```

**Netlify:**
```bash
npm run build
# Deploy .next folder
```

### 📝 Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_DEFAULT_LANGUAGE=ru
```

### 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Three.js Docs](https://threejs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [i18next Docs](https://www.i18next.com)

### 📄 License

MIT - Free for personal and commercial use

### 🤝 Support

- 📧 GitHub Issues
- 💬 Telegram: [@sazanfxcrypto](https://t.me/sazanfxcrypto)
- 📱 Instagram: [@webcraft.io](https://instagram.com/webcraft.io)

---

**Made with ❤️ by WebCraft Team**
