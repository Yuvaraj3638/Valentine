# 💖 Valentine Interactive Web Experience

A fully interactive, emotional Valentine-style website built using **pure HTML, CSS, and Vanilla JavaScript** — no frameworks, no libraries, no shortcuts.

This project is designed as a playful, romantic experience with animations, music, envelopes, memories, and interactive surprises.

---

## ✨ Features

### 💌 Valentine Question Flow
- Displays **“Will you be my Valentine?”**
- YES and NO buttons aligned side by side
- NO button:
  - Never moves
  - Triggers emotional begging messages with stickers
  - Makes YES grow larger after every click
  - Disappears after 6 NO clicks
- YES button:
  - Stops sad music
  - Starts romantic music
  - Transitions smoothly to the next experience

---

### 🎵 Audio Experience
- Sad background music on NO clicks
- Romantic background music on YES click
- Only one audio plays at a time
- Smooth switching between moods

---

### ✉️ Envelope Interaction
- Three large cinematic envelopes:
  - Flowers 🌸
  - Memories 🖼️
  - Letter 💌
- Envelopes start **closed**
- Clicking an envelope plays its **opening animation**
- Back button returns to envelope selection

---

### 🌸 Flowers & Date Ideas
- Magical flower shower animation
- Interactive **date ideas**
- Clicking a date idea:
  - Hides all other ideas
  - Shows a **custom message and sticker**
- Includes a dedicated **“Back to date ideas”** button (without leaving the flowers screen)

---

### 🖼️ Memories Gallery
- Pinterest / Masonry style photo layout
- Responsive for mobile and desktop
- Click to highlight photos
- Supports multiple images without overlap

---

### 💌 Letter Screen
- Displays a romantic letter image
- Soft fade-in animation
- Clean, elegant layout

---

### 🌈 Background Effects
- Continuous emoji rain (sad or happy based on state)
- Smooth animations and transitions throughout
- Mobile-first and responsive design

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- ❌ No frameworks
- ❌ No external JS libraries

---

## 📁 Project Structure

Project/
│
├── index.html
├── style.css
├── script.js
│
└── assets/
├── audio/
│ ├── romantic.mp3
│ └── sad.mp3
│
├── gifs/
│ ├── beg1.webp
│ ├── beg2.webp
│ ├── cry.webp
│ ├── kill.webp
│ ├── last.webp
│ ├── please.webp
│ │
│ ├── dateGifs/
│ │ ├── eve-walk.webp
│ │ ├── street-food.webp
│ │ ├── watching-movie.webp
│ │ ├── long-drive.webp
│ │ └── kill.webp
│ │
│ └── Envelopes/
│ ├── envelope-closed-flowers.webp
│ ├── envelope-opening-flowers.gif
│ ├── envelope-closed-memories.gif
│ ├── envelope-opening-memories.gif
│ ├── envelope-closed-letter.png
│ └── envelope-opening-letter.png
│
└── images/
├── flowers/
│ ├── 1.gif
│ ├── 2.webp
│ ├── 3.webp
│ ├── 4.webp
│ └── 5.webp
│
├── Letter/
│ └── Letter.jpg
│
└── memories/
├── 1.jpeg
├── 2.jpeg
├── 3.jpeg
└── ...


---

## 🚀 How to Run

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. Make sure audio autoplay is enabled for best experience

No build steps required.

---

## 🎯 Purpose

This project was built to:
- Practice **advanced DOM manipulation**
- Design **emotion-driven UI/UX**
- Create a complete interactive experience using only core web technologies
- Have fun building something meaningful ❤️

---

## 📌 Notes

- Image and audio assets can be replaced easily
- Number of memory images can be increased without breaking layout
- Date ideas and messages are fully customizable

---

## ❤️ Author

Built with care, creativity, and a little emotional drama.

If this made someone smile — it worked 🙂
