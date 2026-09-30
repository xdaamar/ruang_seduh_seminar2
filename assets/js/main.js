/**
 * Ruang Seduh — Landing Page Scripts
 * Features:
 *  1. Smart Navigation (Hide-on-Scroll header)
 *  2. Mobile Drawer Navigation toggle & click-outside dismissal
 *  3. Interactive Menu Category Filtering (All, Coffee, Non-Coffee, Pastry)
 *  4. Smooth Anchor Scrolling & Active Link Highlighting
 *  5. Copy Address to Clipboard with UI Toast Feedback
 *  6. Lightweight IntersectionObserver Scroll Fade-in
 */

document.addEventListener('DOMContentLoaded', () => {
  /* -------------------------------------------------------------
     1. Smart Navigation: Hide on Scroll Down, Show on Scroll Up
     ------------------------------------------------------------- */
  const header = document.getElementById('smart-header');
  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  const scrollThreshold = 10;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollY > 90) {
      if (currentScrollY > lastScrollY + scrollThreshold) {
        // Scrolling down -> Hide header
        header.classList.add('header-hidden');
      } else if (currentScrollY < lastScrollY - scrollThreshold) {
        // Scrolling up -> Show header
        header.classList.remove('header-hidden');
      }
    } else {
      header.classList.remove('header-hidden');
    }

    lastScrollY = Math.max(0, currentScrollY);
  }, { passive: true });

  /* -------------------------------------------------------------
     2. Mobile Drawer Menu
     ------------------------------------------------------------- */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      const icon = hamburgerBtn.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'ph ph-x' : 'ph ph-list';
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        const icon = hamburgerBtn.querySelector('i');
        if (icon) icon.className = 'ph ph-list';
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        mobileDrawer.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        const icon = hamburgerBtn.querySelector('i');
        if (icon) icon.className = 'ph ph-list';
      }
    });
  }

  /* -------------------------------------------------------------
     3. Interactive Menu Category Filtering
     ------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.menu-filter-btn');
  const categoryGroups = document.querySelectorAll('.menu-category-group');

  if (filterButtons.length && categoryGroups.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active class on filter buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter categories
        categoryGroups.forEach(group => {
          const category = group.getAttribute('data-category');
          if (filter === 'all' || filter === category) {
            group.classList.remove('hidden-category');
          } else {
            group.classList.add('hidden-category');
          }
        });
      });
    });
  }

  /* -------------------------------------------------------------
     4. Smooth Scrolling & Active Nav Highlighting
     ------------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        mobileLinks.forEach(link => {
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(section => navObserver.observe(section));

  /* -------------------------------------------------------------
     5. Copy Address to Clipboard with UI Toast Feedback
     ------------------------------------------------------------- */
  const btnCopy = document.getElementById('btn-copy-address');
  const toast = document.getElementById('copy-toast');
  const addressText = document.getElementById('store-address');

  if (btnCopy && toast && addressText) {
    let toastTimeout;

    btnCopy.addEventListener('click', async () => {
      const textToCopy = addressText.innerText.trim();

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          const tempInput = document.createElement('textarea');
          tempInput.value = textToCopy;
          tempInput.style.position = 'fixed';
          tempInput.style.opacity = '0';
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        clearTimeout(toastTimeout);
        toast.classList.add('show');

        toastTimeout = setTimeout(() => {
          toast.classList.remove('show');
        }, 3000);
      } catch (err) {
        console.warn('Clipboard write failed:', err);
      }
    });
  }

  /* -------------------------------------------------------------
     6. Elegant Light Scroll Fade-in Animation
     ------------------------------------------------------------- */
  const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    fadeElements.forEach(el => fadeObserver.observe(el));
  } else {
    fadeElements.forEach(el => el.classList.add('visible'));
  }
});
