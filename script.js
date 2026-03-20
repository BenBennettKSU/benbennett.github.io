document.addEventListener('DOMContentLoaded', () => {

  // ── Smooth scrolling for anchor links ───────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          // Close mobile menu if open
          navLinks.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // ── Mobile nav toggle ────────────────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // ── Image lightbox ────────────────────────────────────────
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn    = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg) {
    // Open on click
    document.querySelectorAll('.expandable-image').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    // Close on backdrop click
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });

    // Close on button click
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeLightbox();
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

});
