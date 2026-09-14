# WebCraft - Профессиональная разработка сайтов 🚀

## Современный портфолио сайт на Next.js 14 + TypeScript + Tailwind CSS

### ✨ Главные фичи

- 📱 **Полностью адаптивный** - работает на всех устройствах
- 🌍 **Двуязычность** - РУ/EN с использованием i18next
- 🎨 **Красивые анимации** - Framer Motion
- 🔗 **Web3 Ready** - готов к интеграции блокчейна
- 📧 **Форма контакта** - интеграция с EmailJS
- ⚡ **SEO Optimized** - метатеги, Open Graph
- 🎯 **Performance** - Image optimization, код-сплиттинг
- 🌙 **Dark Mode** - современный тёмный дизайн

### 🛠️ Технологический стек

```
Frontend:
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (анимации)
- i18next (мультиязычность)

Optional:
- EmailJS (отправка писем)
- Three.js (3D)
- Web3.js (блокчейн)
```

### 🚀 Быстрый старт

```bash
# Клонировать репо
git clone https://github.com/sazanfxcrypto-coder/webcraft-3d-builder.git
cd webcraft-3d-builder

# Установить зависимости
npm install

# Запустить разработку
npm run dev

# Открыть http://localhost:3000
```

### 📦 Структура проекта

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Главная страница
│   └── globals.css         # Глобальные стили
├── components/
│   ├── 3D/                 # 3D компоненты
│   ├── Layout/
│   │   └── Navigation.tsx  # Навигация
│   └── Sections/           # Секции страницы
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       ├── Process.tsx
│       ├── TechStack.tsx
│       ├── WhyMe.tsx
│       ├── FAQ.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── lib/
│   └── i18n.ts             # i18next конфиг
└── locales/
    ├── ru.json             # Русские переводы
    └── en.json             # English translations
```

### ⚙️ Конфигурация

#### Включить EmailJS отправку писем:

1. Перейди на https://www.emailjs.com/
2. Создай аккаунт и получи ключи
3. Замени в `src/components/Sections/Contact.tsx`:

```typescript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { ... });
```

### 🎨 Кастомизация цветов

Отредактируй `tailwind.config.js`:

```javascript
colors: {
  dark: {
    bg: '#0a0a0f',
    'bg-2': '#12121a',
    card: '#1a1a24',
    border: '#26263a',
  },
  accent: {
    primary: '#6c5ce7',     // Основной цвет
    secondary: '#00d4ff',   // Дополнительный
  },
}
```

### 🌐 Добавить язык

1. Создай `src/locales/de.json` (например для немецкого)
2. Обнови `src/lib/i18n.ts`:

```typescript
import de from '@/locales/de.json';

resources: {
  ru: { translation: ru },
  en: { translation: en },
  de: { translation: de },
}
```

### 📤 Деплой

#### На Vercel (рекомендуется):

```bash
npm install -g vercel
vercel
```

#### На Netlify:

```bash
npm run build
# Загрузи .next папку на Netlify
```

#### Docker:

```bash
docker build -t webcraft .
docker run -p 3000:3000 webcraft
```

### 📊 Оптимизация производительности

- ✅ Image optimization (Next.js Image)
- ✅ Code splitting
- ✅ Lazy loading компонентов
- ✅ CSS minimization
- ✅ Minified JS

### 📚 Полезные ссылки

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [i18next](https://www.i18next.com)
- [TypeScript](https://www.typescriptlang.org)

### 📝 Лицензия

MIT - используй для личных и коммерческих проектов

### 💬 Поддержка

- 📧 Email: info@webcraft.by
- 💬 Telegram: [@sazanfxcrypto](https://t.me/sazanfxcrypto)
- 🐙 GitHub: [@sazanfxcrypto-coder](https://github.com/sazanfxcrypto-coder)

---

**Made with ❤️ by WebCraft Team**
