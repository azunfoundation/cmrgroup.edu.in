/* ========================================
   CMR GROUP OF INSTITUTIONS - MAIN JS
   ======================================== */

/* ---- HEADER SCROLL ---- */
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

/* ---- MOBILE MENU ---- */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ---- BACK TO TOP ---- */
const backTop = document.getElementById('back-top');
if (backTop) {
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('show', window.scrollY > 400);
  });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---- INTERSECTION OBSERVER ANIMATIONS ---- */
const animEls = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
if (animEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  animEls.forEach(el => observer.observe(el));
}

/* ---- COUNTER ANIMATION ---- */
function animateCounter(el, target, duration = 2000) {
  const start = 0;
  const step = target / (duration / 16);
  let current = start;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

const counterEls = document.querySelectorAll('[data-count]');
if (counterEls.length) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count);
        animateCounter(entry.target, target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => counterObserver.observe(el));
}

/* ---- ACTIVE NAV LINK ---- */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href && href === currentPage) link.classList.add('active');
  if ((currentPage === 'index.html' || currentPage === '') && href === 'index.html') link.classList.add('active');
});

/* ---- CONTACT FORM SUBMIT ---- */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const origText = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    const formData = new FormData(contactForm);
    formData.append('_captcha', 'false');
    formData.append('_subject', 'New Contact Form Message');

    fetch("https://formsubmit.co/ajax/info@cmrgroup.edu.in", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      btn.textContent = '✓ Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
      setTimeout(() => {
        btn.textContent = origText;
        btn.disabled = false;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    })
    .catch(error => {
      btn.textContent = 'Error! Try Again.';
      setTimeout(() => {
        btn.textContent = origText;
        btn.disabled = false;
      }, 3000);
    });
  });
}

/* ---- ENQUIRY FORM SUBMIT ---- */
const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = enquiryForm.querySelector('button[type="submit"]');
    const origText = btn.textContent;
    btn.textContent = 'Submitting…';
    btn.disabled = true;

    const formData = new FormData(enquiryForm);
    formData.append('_captcha', 'false');
    formData.append('_subject', 'New Admission Enquiry');

    fetch("https://formsubmit.co/ajax/info@cmrgroup.edu.in", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      btn.textContent = '✓ Enquiry Received!';
      setTimeout(() => {
        btn.textContent = origText;
        btn.disabled = false;
        enquiryForm.reset();
      }, 3000);
    })
    .catch(error => {
      btn.textContent = 'Error! Try Again.';
      setTimeout(() => {
        btn.textContent = origText;
        btn.disabled = false;
      }, 3000);
    });
  });
}

/* ---- ALUMNI FORM SUBMIT ---- */
const alumniForm = document.getElementById('alumni-form');
if (alumniForm) {
  alumniForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = alumniForm.querySelector('button[type="submit"]');
    const origText = btn.textContent;
    btn.textContent = 'Submitting…';
    btn.disabled = true;

    const formData = new FormData(alumniForm);
    formData.append('_captcha', 'false');
    formData.append('_subject', 'New Alumni Registration');

    fetch("https://formsubmit.co/ajax/info@cmrgroup.edu.in", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      btn.textContent = '✓ Registration Sent!';
      btn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
      setTimeout(() => {
        btn.textContent = origText;
        btn.disabled = false;
        btn.style.background = '';
        alumniForm.reset();
      }, 3000);
    })
    .catch(error => {
      btn.textContent = 'Error! Try Again.';
      setTimeout(() => {
        btn.textContent = origText;
        btn.disabled = false;
      }, 3000);
    });
  });
}


/* ---- SMOOTH SCROLL FOR ANCHOR LINKS ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ---- HERO TYPEWRITER EFFECT ---- */
const heroTyped = document.getElementById('hero-typed');
if (heroTyped) {
  const words = ['Excellence', 'Innovation', 'Success', 'Future'];
  let wi = 0, ci = 0, deleting = false;
  function type() {
    const word = words[wi];
    if (!deleting) {
      heroTyped.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(type, 2000); return; }
    } else {
      heroTyped.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();
}

/* ---- TABS (Achievements page) ---- */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.dataset.group;
    const target = btn.dataset.tab;
    document.querySelectorAll(`[data-group="${group}"].tab-btn`).forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`[data-group="${group}"].tab-panel`).forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById(target);
    if (panel) panel.classList.add('active');
  });
});
