# Belinda Calculator 💃✨

**Version:** 1.4.2

Una calculadora PWA cute, confiable y lista para produccion.  
Inspired by Belinda vibes: bubbly and charming, but seriously committed to quality.

## Features
- 💖 Pink/purple UI with playful micro-interactions
- 📱 Installable PWA (mobile + desktop)
- 📴 Offline support with Service Worker cache
- ⌨️ Keyboard input support
- 📜 Recent calculation history

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (GitHub Actions)

This project already includes `.github/workflows/deploy-pages.yml` and deploys on push to `master`.

### 1) Create repo and push
```bash
git add .
git commit -m "chore: prepare Belinda Calculator PWA for GitHub Pages deployment"
```

### 2) Enable Pages to use GitHub Actions
- In GitHub UI: **Settings -> Pages -> Source: GitHub Actions**
- Or via CLI/API (commands provided below)

## Notes
- Vite uses `base: './'` so assets work on GitHub Pages project sites.
- Manifest uses relative `start_url` and `scope`.
- Service worker is registered as `./sw.js`.

---
Made with love, glitter, and disciplined engineering by Belinda 💕
