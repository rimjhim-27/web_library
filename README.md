# 📚 BookSphere — Read Beyond Boundaries

<div align="center">

![BookSphere Banner](https://img.shields.io/badge/BookSphere-Read%20Beyond%20Boundaries-D4820A?style=for-the-badge&logo=bookstack&logoColor=white)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-success?style=for-the-badge)](https://weblibrary1.netlify.app/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**A beautiful, fully responsive book discovery website built with pure HTML, CSS & JavaScript.**

[🌐 Live Demo](https://weblibrary1.netlify.app/) • [📁 Source Code](https://github.com/rimjhim-27/web_library) • [🐛 Report Bug](https://github.com/rimjhim-27/web_library/issues)

</div>

---

## 📸 Preview

> 🔗 **Live Site:** [https://weblibrary1.netlify.app/](https://weblibrary1.netlify.app/)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔍 **Live Search** | Search books by title, author, or genre in real time |
| 📖 **Book Modal** | Click any book to see full details & description |
| ❤️ **Wishlist** | Save your favourite books with one click |
| 🗂️ **Genre Categories** | Browse books by 8 different categories |
| ⭐ **Editor's Pick** | Featured book spotlight section |
| 💬 **Testimonials** | Community reader reviews section |
| 📧 **Newsletter** | Email subscription with validation |
| 📱 **Responsive** | Works perfectly on mobile, tablet & desktop |
| 🎨 **Animations** | Smooth CSS transitions and hover effects |
| 🔔 **Toast Notifications** | Instant feedback for every user action |

---

## 🛠️ Tech Stack

```
No frameworks. No libraries. No build tools.
100% Pure Web Technologies.
```

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure & semantic markup |
| **CSS3** | Styling, animations & responsive layout |
| **Vanilla JavaScript** | Interactivity, search, modal & wishlist |
| **Google Fonts** | Playfair Display + DM Sans typography |
| **CSS Variables** | Consistent theming & color system |
| **CSS Grid & Flexbox** | Modern responsive layouts |

---

## 📁 Project Structure

```
web_library/
│
├── 📄 index.html       → Main HTML structure
├── 🎨 style.css        → All CSS styling & animations
├── ⚙️  script.js        → JavaScript logic & interactivity
└── 📖 README.md        → Project documentation
```

---

## 🚀 Getting Started

### Run Locally

**1. Clone the repository**
```bash
git clone https://github.com/rimjhim-27/web_library.git
```

**2. Go into the project folder**
```bash
cd web_library
```

**3. Open in browser**
```bash
# Simply double-click index.html
# OR use VS Code Live Server extension
```

> ✅ No npm install needed! No build step! Just open and run.

---

## 🎨 Customisation Guide

You can easily personalise this project:

### 📚 Add More Books
Open `script.js` and add to the `books` array:
```javascript
{ 
  id: 9, 
  title: "Your Book Title", 
  author: "Author Name", 
  genre: "Fiction", 
  rating: 4.5, 
  color: "linear-gradient(150deg,#7B3F20,#4A1C0A)", 
  desc: "Book description here...", 
  wish: false 
}
```

### 🎨 Change Colors
Open `style.css` and update the CSS variables:
```css
:root {
  --cream: #F5F0E8;      /* Background color */
  --ink: #1A1209;        /* Primary text */
  --amber: #D4820A;      /* Main accent color */
  --brown: #6B4C2A;      /* Secondary accent */
}
```

### 🗂️ Add More Categories
Open `script.js` and add to the `categories` array:
```javascript
{ name: "Comics", icon: "💥", count: "3,200 books", bg: "#F0EBF5" }
```

---

## 📦 Deployment

### ✅ Deployed on Netlify
This project is live at:
```
https://weblibrary1.netlify.app/
```

### Deploy Your Own on Netlify (Free)
1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Click **"Add new site" → "Import from Git"**
3. Connect your GitHub → Select `web_library` repo
4. Click **"Deploy site"**
5. Your site goes live in 30 seconds! 🎉

### Deploy on GitHub Pages (Free)
1. Go to your repo → **Settings → Pages**
2. Branch: `main` → Folder: `/ (root)` → **Save**
3. Live at: `https://rimjhim-27.github.io/web_library/`

---

## 🤝 Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork the repo
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Commit your changes
git commit -m "Add some AmazingFeature"

# 4. Push to the branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request
```

---

## 📈 Future Improvements

- [ ] 🌙 Dark / Light mode toggle
- [ ] 💾 LocalStorage for wishlist persistence
- [ ] 🔖 Reading progress tracker
- [ ] 🌐 API integration for real book data (Google Books API)
- [ ] 👤 User login & profile page
- [ ] ⭐ User review & rating system
- [ ] 📱 Mobile hamburger menu

---

## 👩‍💻 Author

**Rimjhim**

[![GitHub](https://img.shields.io/badge/GitHub-rimjhim--27-181717?style=flat&logo=github)](https://github.com/rimjhim-27)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- Fonts by [Google Fonts](https://fonts.google.com)
- Hosted on [Netlify](https://netlify.com)
- Icons via Unicode Emojis

---

<div align="center">

**⭐ Agar aapko ye project pasand aaya toh star dena mat bhuliyo! ⭐**

Made with Rimjhim for book lovers everywhere

</div>
