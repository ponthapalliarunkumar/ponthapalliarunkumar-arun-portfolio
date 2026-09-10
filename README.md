# Ponthapalli Arun Kumar — Portfolio

Personal portfolio site built with React + Vite + Tailwind CSS, showcasing my work in Generative AI, Python, and web development.

**Live Demo**
https://ponthapalliarunkumar.github.io/portfolio/

> This link goes live once you deploy — see "Deploy to GitHub Pages" below. If you name your GitHub repo something other than `portfolio`, update this URL (and the `base` field in `vite.config.js`) to match.

## About

- 🎓 B.Tech in Electronics and Communication Engineering, Godavari Institute of Engineering and Technology (Expected 2026)
- 🐍 Python & Generative AI (OpenAI API) — building LLM-powered tools like an AI chatbot and text summarizer
- 💼 Python & AI Intern at Blackbucks and SkillDzire
- 🔒 TryHackMe — Intro to Cyber Security certified

## Tech Stack

- React 19 + Vite
- Tailwind CSS 4
- Framer Motion (animations)

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) to preview.

## Deploy to GitHub Pages (live demo link)

1. Create a GitHub repo named `portfolio` under your account (or pick another name — just update `base` in `vite.config.js` and the live demo link above to match).
2. Push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/ponthapalliarunkumar/portfolio.git
   git push -u origin main
   ```
3. Add the `gh-pages` package and a deploy script if you haven't already (`npm install --save-dev gh-pages`, then in `package.json`: `"predeploy": "vite build"` and `"deploy": "gh-pages -d dist"`).
4. Run:
   ```bash
   npm run deploy
   ```
5. On GitHub: go to your repo → **Settings → Pages** → set **Source** to "Deploy from a branch", branch `gh-pages`, folder `/ (root)`. Save.
6. Your live site will be at:
   ```
   https://ponthapalliarunkumar.github.io/portfolio/
   ```
   (First deploy can take a minute or two to go live.)

## Contact

- Email: ponthapalliarun@gmail.com
- GitHub: [github.com/ponthapalliarunkumar](https://github.com/ponthapalliarunkumar)