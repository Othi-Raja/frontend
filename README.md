This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
## Getting Started
First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
 ## 🚀 Tech Stack Used
### **Frontend**
- **Next.js (App Router)**
- **React + TypeScript**
- **TailwindCSS** (UI styling)
- **Framer Motion** (animations)
- **Next/Image** for optimized images
### **Fonts**
- **DM Serif Display** (for elegant headings)
- **Manrope** (for body text)
- **Inter** (for UI elements)
---
### Performance Data

<img width="966" height="758" alt="image" src="https://github.com/user-attachments/assets/14c2a031-c50d-478c-afd1-40a7461288b0" />

## ✨ Key Features Implemented
### ✔ **1. Smooth UI Animations (Framer Motion)**
- Fade-in / fade-out transitions across screens  
- Animated score counting (0 → final score)  
- Soft movement animations for buttons and components  
### ✔ **2. Auto–Navigate When User Selects an Answer**
- When a user selects an option:
  - Option highlights instantly  
  - NEXT button becomes active  
  - (Optional) Auto-advance capability supported  
### ✔ **3. Modern Quiz Progress Bar**
- Progress bar segmented by total number of questions  
- Active segment shows a live fill animation  
- Completed segments fill smoothly  
### ✔ **4. Beautiful Option Selection Styling**
- Gradient background styling  
- Soft rounded borders  
- Figma-accurate hover effects  
- Smooth highlight animation when selected  
### ✔ **5. Final Score Screen**
- Fullscreen animated score reveal  
- Rolling number animation (speedometer-like effect)  
- “Start Again” button resets the quiz instantly  
---
Here is your **Assumptions Made** section rewritten in clean, professional **README.md format**:
---
## 📝 Assumptions Made
* The quiz contains a fixed set of **4 questions**, each worth **25 points**.
* Every question has **exactly one correct answer**.
* The user **cannot proceed to the next question** until they select an option.
* The **Final Score** screen always appears after completing all questions.
* All UI images, icons, and assets are stored under **`/app/assets/`**.


---

| Task                                   | Time           |
| -------------------------------------- | -------------- |
| UI layout (Tailwind)                   | **1.5 hours**  |
| Animation setup (Framer Motion)        | **45 minutes** |
| Quiz logic (Next.js + TS)              | **45 minutes** |
| Progress bar + option highlight        | **40 minutes** |
| Final score animated screen            | **30 minutes** |
| Refinements, bug fixes, styling polish | **30 minutes** |
| **Total Time Spent**                   | **~5 hours**   |
