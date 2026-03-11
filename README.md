# Orygo Studio — Landing page

Next.js 15 · Tailwind v4 · TypeScript · App Router

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura

```
orygo-studio/
├── app/
│   ├── globals.css        # Tokens de marca + Tailwind v4
│   ├── layout.tsx         # Fuente, metadata y SEO
│   └── page.tsx           # Página principal
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── HowWeWork.tsx
│   ├── Cases.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── useReveal.ts       # Hook para animaciones de scroll
```

## Deploy en Vercel

1. Sube el proyecto a un repo de GitHub
2. Ve a [vercel.com](https://vercel.com) → **New Project**
3. Importa el repo — Vercel detecta Next.js automáticamente
4. Click en **Deploy** → listo

No hace falta configurar nada más. Vercel y Next.js están hechos el uno para el otro.

## Colores de marca

| Token         | HEX       |
|---------------|-----------|
| `blue`        | `#0166FF` |
| `coral`       | `#FF5C5D` |
| `yellow`      | `#FFF100` |
| `black`       | `#1A1A1A` |
| `white`       | `#EAEAEA` |

Los colores están definidos como custom tokens de Tailwind v4 en `app/globals.css`.
