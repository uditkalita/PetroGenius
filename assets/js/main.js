/* ============================================================
   MAIN.JS — All JavaScript Interactions
   PetroByte Clone
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ══════════════════════════════════
  // ANNOUNCEMENT BAR
  // ══════════════════════════════════
  const annClose = document.querySelector('.announcement-close');
  const annBar = document.querySelector('.announcement-bar');
  if (annClose && annBar) {
    annClose.addEventListener('click', () => {
      annBar.style.maxHeight = annBar.offsetHeight + 'px';
      requestAnimationFrame(() => {
        annBar.style.transition = 'max-height 0.4s ease, opacity 0.3s ease';
        annBar.style.maxHeight = '0';
        annBar.style.opacity = '0';
        annBar.style.overflow = 'hidden';
      });
    });
  }

  // ══════════════════════════════════
  // NAVBAR HAMBURGER
  // ══════════════════════════════════
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ══════════════════════════════════
  // DASHBOARD TABS
  // ══════════════════════════════════
  const dbTabs = document.querySelectorAll('.db-tab');
  const dbPanels = document.querySelectorAll('.db-panel');
  dbTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      dbTabs.forEach(t => t.classList.remove('active'));
      dbPanels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('db-' + target);
      if (panel) panel.classList.add('active');
    });
  });

  // ══════════════════════════════════
  // BENEFIT PILLS
  // ══════════════════════════════════
  const pills = document.querySelectorAll('.benefit-pill');
  const benefitDetail = document.querySelector('.benefits-detail');
  const benefitData = {
    relax: {
      title: 'Feel Relaxed, Secure & Peaceful',
      text: 'Stop worrying about manual errors, lost data, or mismatched accounts. PetroByte handles it all automatically so you can focus on your business with complete peace of mind.'
    },
    time: {
      title: 'Save Time & Make Yourself Valuable',
      text: 'Automated shift processing, one-click reports, and instant billing save hours every day. Spend your time on growing the business, not on paperwork.'
    },
    manage: {
      title: 'A Better Way of Managing Business',
      text: 'From fuel stock to customer credit to employee payroll — everything is in one place. Real-time dashboards give you a complete picture of your business at a glance.'
    },
    profit: {
      title: 'Profit in Books & Growth in Business',
      text: 'Accurate accounting, GST compliance, and Tally integration ensure your books are always right. Better records mean better decisions and more profit.'
    }
  };
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const key = pill.dataset.benefit;
      if (benefitDetail && benefitData[key]) {
        benefitDetail.querySelector('h3').textContent = benefitData[key].title;
        benefitDetail.querySelector('p').textContent = benefitData[key].text;
      }
    });
  });

  // ══════════════════════════════════
  // FAQ ACCORDION
  // ══════════════════════════════════
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');
    if (header && body) {
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        accordionItems.forEach(i => {
          i.classList.remove('active');
          const b = i.querySelector('.accordion-body');
          if (b) b.style.maxHeight = '0';
        });
        if (!isOpen) {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    }
  });

  // ══════════════════════════════════
  // ANIMATED COUNTER
  // ══════════════════════════════════
  let countersStarted = false;
  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString('en-IN') + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ══════════════════════════════════
  // SCROLL REVEAL + COUNTER TRIGGER
  // ══════════════════════════════════
  const reveals = document.querySelectorAll('.reveal');
  const statsSection = document.querySelector('.stats-section');
  const counterEls = document.querySelectorAll('.counter-num');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersStarted) {
        countersStarted = true;
        counterEls.forEach(el => animateCounter(el));
      }
    });
  }, { threshold: 0.3 });

  if (statsSection) statsObserver.observe(statsSection);

  // ══════════════════════════════════
  // MODAL SYSTEM
  // ══════════════════════════════════
  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Open triggers
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.modal));
  });

  // Close triggers
  document.querySelectorAll('.modal-close, .modal-overlay').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el) {
        const overlay = el.closest('.modal-overlay') || el;
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // ══════════════════════════════════
  // FORM VALIDATION + SUBMISSION
  // ══════════════════════════════════
  function showToast(msg, type = '') {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.className = 'toast ' + type;
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  document.querySelectorAll('.js-form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = 'var(--error)';
          setTimeout(() => field.style.borderColor = '', 2000);
        }
      });
      if (!valid) { showToast('Please fill all required fields correctly.'); return; }
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
      await new Promise(r => setTimeout(r, 1200));
      showToast('Thank you! Our team will contact you shortly.', 'success');
      form.reset();
      if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label || 'Submit'; }
      // Close modal if inside one
      const modal = form.closest('.modal-overlay');
      if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
    });
  });

  // ══════════════════════════════════
  // STICKY CTA BAR (Your Addition)
  // ══════════════════════════════════
  const stickyCta = document.querySelector('.sticky-cta');
  const stickyClose = document.querySelector('.sticky-close');
  let stickyDismissed = false;

  window.addEventListener('scroll', () => {
    if (!stickyCta || stickyDismissed) return;
    if (window.scrollY > 500) stickyCta.classList.add('visible');
    else stickyCta.classList.remove('visible');
  });

  if (stickyClose) {
    stickyClose.addEventListener('click', () => {
      stickyDismissed = true;
      stickyCta.classList.remove('visible');
    });
  }

  // ══════════════════════════════════
  // SCROLL TO TOP
  // ══════════════════════════════════
  const scrollTopBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () => {
    if (!scrollTopBtn) return;
    if (window.scrollY > 600) scrollTopBtn.classList.add('visible');
    else scrollTopBtn.classList.remove('visible');
  });
  if (scrollTopBtn) scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ══════════════════════════════════
  // EXIT INTENT POPUP (Your Addition)
  // ══════════════════════════════════
  let exitShown = false;
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 5 && !exitShown) {
      exitShown = true;
      setTimeout(() => openModal('exit-modal'), 300);
    }
  });

  // ══════════════════════════════════
  // RADIO LABEL STYLE
  // ══════════════════════════════════
  document.querySelectorAll('.radio-label').forEach(label => {
    const input = label.querySelector('input[type="radio"]');
    if (input) {
      input.addEventListener('change', () => {
        const group = label.closest('.radio-group');
        if (group) group.querySelectorAll('.radio-label').forEach(l => l.classList.remove('checked'));
        label.classList.add('checked');
      });
    }
  });

  // ══════════════════════════════════
  // SMOOTH ACTIVE NAV LINK
  // ══════════════════════════════════
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => sectionObserver.observe(s));

  // ══════════════════════════════════
  // MINI CHART BAR ANIMATION
  // ══════════════════════════════════
  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.db-bar-item');
        bars.forEach((bar, i) => {
          setTimeout(() => {
            bar.style.transition = 'height 0.8s ease';
          }, i * 100);
        });
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.db-chart').forEach(c => chartObserver.observe(c));

  console.log('PetroByte website initialized ✓');
});
