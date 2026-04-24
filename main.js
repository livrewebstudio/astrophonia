// ═══════════════════════════════════════════════════════
//  AstroPhonia — Main JS
//  Starfield · Navbar · Scroll Reveal · Modal · Cookies
// ═══════════════════════════════════════════════════════

// ─── STARFIELD CANVAS ───
(function() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createStars(n) {
    stars = [];
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.2,
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.15 + 0.02,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.alpha += s.twinkleSpeed * s.twinkleDir;
      if (s.alpha >= 0.9 || s.alpha <= 0.1) s.twinkleDir *= -1;
      s.y += s.speed;
      if (s.y > H) { s.y = 0; s.x = Math.random() * W; }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(197,160,105,${s.alpha * 0.6})`;
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }

  window.addEventListener('resize', () => { resize(); createStars(180); });
  resize();
  createStars(180);
  drawStars();
})();

// ─── NAVBAR SCROLL ───
(function() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });
})();

// ─── MOBILE NAV ───
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const ham = document.getElementById('hamburger');
  if (!nav) return;
  nav.classList.toggle('open');
  if (ham) ham.setAttribute('aria-expanded', nav.classList.contains('open'));
}
function closeMobileNav() {
  const nav = document.getElementById('mobile-nav');
  if (nav) nav.classList.remove('open');
}

// ─── SCROLL REVEAL ───
function revealOnScroll() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

// ─── SMOOTH ANCHOR SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── REDIRECT MODAL ───
let pendingHref = '#';

function openModal(e, trackName, trackSub, type) {
  e.preventDefault();
  const t = translations[currentLang] || translations['en'];

  document.getElementById('modal-track-name').textContent = trackName;
  document.getElementById('modal-track-sub').textContent = trackSub;

  const textEl = document.getElementById('modal-text');
  if (textEl) textEl.textContent = t.modal_text || '';

  const continueBtn = document.getElementById('modal-continue-btn');
  if (continueBtn) {
    continueBtn.textContent = t.modal_continue || 'Continue to Bandcamp →';
    // Replace with actual Bandcamp link when live
    pendingHref = 'https://astrophonia.bandcamp.com';
    continueBtn.href = pendingHref;
  }

  document.getElementById('redirect-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('redirect-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on backdrop click
document.getElementById('redirect-modal')?.addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Keyboard close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── COOKIE BANNER ───
function acceptCookies() {
  localStorage.setItem('ap_cookies', '1');
  document.getElementById('cookie-banner')?.classList.add('hidden');
}

function initCookieBanner() {
  if (!localStorage.getItem('ap_cookies')) {
    // Show after small delay
    setTimeout(() => {
      document.getElementById('cookie-banner')?.classList.remove('hidden');
    }, 2200);
  } else {
    document.getElementById('cookie-banner')?.classList.add('hidden');
  }
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  initCookieBanner();

  // If site wrapper is shown (lang already selected), init reveal
  const wrapper = document.getElementById('site-wrapper');
  if (wrapper && wrapper.style.display !== 'none') {
    revealOnScroll();
  }
});
