// ============================================
//   BookSphere — script.js
// ============================================

// ── DATA ──
const books = [
  { id:1, title:"The Alchemist", author:"Paulo Coelho", genre:"Fiction", rating:4.8, color:"linear-gradient(150deg,#7B3F20,#4A1C0A)", desc:"A shepherd boy's journey of self-discovery, following his dreams across the desert to find his Personal Legend.", wish:false },
  { id:2, title:"Dune", author:"Frank Herbert", genre:"Sci-Fi", rating:4.7, color:"linear-gradient(150deg,#8B6914,#4A2E00)", desc:"An epic tale of politics, religion, ecology, and power set on the desert planet Arrakis, home of the most precious substance in the universe.", wish:false },
  { id:3, title:"Atomic Habits", author:"James Clear", genre:"Self-Help", rating:4.9, color:"linear-gradient(150deg,#3B6B4A,#1A3D26)", desc:"A proven framework for improving every day. Learn how tiny changes in behavior can lead to remarkable results.", wish:false },
  { id:4, title:"1984", author:"George Orwell", genre:"Fiction", rating:4.7, color:"linear-gradient(150deg,#2C2C3E,#0D0D1A)", desc:"A chilling prophecy about the future — a dystopian nightmare that feels more relevant than ever in the modern world.", wish:false },
  { id:5, title:"To Kill a Mockingbird", author:"Harper Lee", genre:"Classic", rating:4.9, color:"linear-gradient(150deg,#6B4C2A,#3D2211)", desc:"A timeless novel about justice, morality, and the loss of innocence told through the eyes of Scout Finch.", wish:false },
  { id:6, title:"The Great Gatsby", author:"F. Scott Fitzgerald", genre:"Classic", rating:4.5, color:"linear-gradient(150deg,#1A4A6B,#0D2B40)", desc:"A cautionary tale of ambition, love, and the American Dream set in the glittering, decadent world of the 1920s.", wish:false },
  { id:7, title:"Sapiens", author:"Yuval Noah Harari", genre:"Non-Fiction", rating:4.6, color:"linear-gradient(150deg,#4A2060,#200D36)", desc:"A brief history of humankind, exploring how Homo sapiens came to dominate the Earth through cognitive revolution.", wish:false },
  { id:8, title:"The Hobbit", author:"J.R.R. Tolkien", genre:"Fantasy", rating:4.8, color:"linear-gradient(150deg,#2E6B3E,#0D2E17)", desc:"A timid homebody is swept into an epic quest by a wizard and thirteen dwarves to reclaim a treasure guarded by a dragon.", wish:false },
];

const categories = [
  { name:"Fiction",   icon:"📖", count:"12,400 books", bg:"#F5EEE6" },
  { name:"Fantasy",   icon:"🐉", count:"8,200 books",  bg:"#EBF0F5" },
  { name:"Sci-Fi",    icon:"🚀", count:"6,100 books",  bg:"#EDF5EC" },
  { name:"Mystery",   icon:"🔍", count:"9,300 books",  bg:"#F5EBF0" },
  { name:"Biography", icon:"👤", count:"4,700 books",  bg:"#F5F0EB" },
  { name:"Self-Help", icon:"💡", count:"5,600 books",  bg:"#F5F5EB" },
  { name:"History",   icon:"🏛️", count:"7,800 books",  bg:"#EBF5F3" },
  { name:"Romance",   icon:"💕", count:"10,100 books", bg:"#F5EBF5" },
];

const testimonials = [
  { text:"BookSphere completely transformed my reading life. The recommendations are spot on and I've discovered so many hidden gems I never would have found on my own.", name:"Priya S.", role:"Book Club President", color:"#7B3F20" },
  { text:"I went from reading 2 books a year to 2 books a month! The tracking features and reading challenges keep me motivated every single day.", name:"Arjun M.", role:"Software Engineer", color:"#1A4A6B" },
  { text:"The community here is unlike anything I've experienced. Real readers sharing real thoughts — not just marketing blurbs. Absolutely love it.", name:"Sneha R.", role:"Literature Teacher", color:"#3B6B4A" },
  { text:"As an author myself, seeing how BookSphere connects readers with books is inspiring. The platform genuinely cares about the reading experience.", name:"Vikram T.", role:"Published Author", color:"#4A2060" },
  { text:"BookSphere's curated genre collections are incredible. I've found my new favorite authors in genres I never thought I'd enjoy. Highly recommend!", name:"Meera K.", role:"Graduate Student", color:"#6B4C2A" },
  { text:"The interface is beautiful and intuitive. It makes the whole experience of finding and tracking books genuinely joyful.", name:"Rohan D.", role:"UX Designer", color:"#2C4A1A" },
];

// ── RENDER BOOKS ──
function renderBooks(data) {
  const grid = document.getElementById('booksGrid');
  grid.innerHTML = data.map((b, i) => `
    <div class="book-card" style="animation-delay:${i * 0.06}s" onclick="openModal(${b.id})">
      <div class="book-cover" style="background:${b.color}">
        <div class="title">${b.title}</div>
        <div class="author">${b.author}</div>
      </div>
      <div class="book-info">
        <div class="book-title">${b.title}</div>
        <div class="book-author">${b.author}</div>
        <div class="book-meta">
          <span class="rating">★ ${b.rating}</span>
          <span class="genre-tag">${b.genre}</span>
          <button class="wishlist-btn" onclick="toggleWish(event,${b.id})" id="wish-${b.id}">${b.wish ? '❤️' : '🤍'}</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ── RENDER CATEGORIES ──
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = categories.map(c => `
    <div class="category-card" style="background:${c.bg}" onclick="showToast('📚 Browsing ${c.name}…')">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count}</div>
    </div>
  `).join('');
}

// ── RENDER TESTIMONIALS ──
function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  grid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="avatar" style="background:${t.color}">${t.name[0]}</div>
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ── MODAL ──
function openModal(id) {
  const b = books.find(x => x.id === id);
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-header">
      <div>
        <div class="section-label">${b.genre}</div>
        <div style="font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:900;">${b.title}</div>
      </div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-book-row">
      <div class="modal-cover" style="background:${b.color}">
        <div class="title">${b.title}</div>
      </div>
      <div class="modal-details">
        <div class="by">by ${b.author}</div>
        <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:1rem;">
          <span style="color:var(--amber);font-weight:700;">★ ${b.rating}</span>
          <span style="font-size:.8rem;opacity:.5;">/ 5.0</span>
        </div>
        <p>${b.desc}</p>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn-read" onclick="showToast('📖 Reading ${b.title}!');closeModal()">Read Now</button>
      <button class="btn-wish" onclick="toggleWish(null,${b.id});closeModal()">❤️ Wishlist</button>
      <button class="btn-wish" onclick="showToast('🔗 Link copied!');closeModal()">Share</button>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

// Close modal when clicking outside
document.getElementById('modalOverlay').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

// ── WISHLIST ──
function toggleWish(e, id) {
  if (e) e.stopPropagation();
  const book = books.find(b => b.id === id);
  book.wish = !book.wish;
  const btn = document.getElementById('wish-' + id);
  if (btn) btn.textContent = book.wish ? '❤️' : '🤍';
  showToast(book.wish
    ? `❤️ Added "${book.title}" to wishlist!`
    : `💔 Removed from wishlist.`
  );
}

// ── SEARCH ──
function handleSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!q) { renderBooks(books); return; }
  const results = books.filter(b =>
    b.title.toLowerCase().includes(q) ||
    b.author.toLowerCase().includes(q) ||
    b.genre.toLowerCase().includes(q)
  );
  renderBooks(results.length ? results : []);
  if (!results.length) showToast('😕 No books found. Try a different search!');
  document.getElementById('books').scrollIntoView({ behavior: 'smooth' });
}

// Search on Enter key
document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSearch();
});

// ── NEWSLETTER ──
function handleNewsletter() {
  const email = document.getElementById('newsletterEmail').value.trim();
  if (!email || !email.includes('@')) {
    showToast('⚠️ Please enter a valid email!');
    return;
  }
  showToast('🎉 You\'re subscribed! Check your inbox.');
  document.getElementById('newsletterEmail').value = '';
}

// ── TOAST ──
let toastTimeout;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove('show'), 3000);
}

// ── NAV SCROLL EFFECT ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ── INIT ──
renderBooks(books);
renderCategories();
renderTestimonials();