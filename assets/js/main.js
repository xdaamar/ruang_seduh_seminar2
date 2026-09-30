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

  /* -------------------------------------------------------------
     7. Mobile Horizontal Scroll Indicators for Menu Tracks
     ------------------------------------------------------------- */
  const categoryGroupsWithScroll = document.querySelectorAll('.menu-category-group');

  categoryGroupsWithScroll.forEach(group => {
    const grid = group.querySelector('.menu-grid');
    const thumb = group.querySelector('.scroll-thumb');

    if (grid && thumb) {
      grid.addEventListener('scroll', () => {
        const maxScroll = grid.scrollWidth - grid.clientWidth;
        if (maxScroll > 0) {
          const progress = Math.min(Math.max(grid.scrollLeft / maxScroll, 0), 1);
          // Scale translation based on track width minus thumb width
          const maxTranslate = 185; // percentage
          thumb.style.transform = `translateX(${progress * maxTranslate}%)`;
        }
      }, { passive: true });
    }
  });

  /* -------------------------------------------------------------
     8. Interactive Space Switcher & Horizontal Swipe Synch
     ------------------------------------------------------------- */
  const spaceGrid = document.getElementById('space-grid');
  const spaceSwitchBtns = document.querySelectorAll('.space-switch-btn');
  const spaceDots = document.querySelectorAll('.space-dot');

  if (spaceGrid && spaceSwitchBtns.length) {
    const updateSpaceActiveState = (activeIndex) => {
      spaceSwitchBtns.forEach((btn, idx) => {
        const isActive = idx === activeIndex;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      spaceDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    };

    // Button / Dot Click -> Scroll to Card
    const scrollToSpaceIndex = (index) => {
      const cards = spaceGrid.querySelectorAll('.space-card');
      if (cards[index]) {
        const targetCard = cards[index];
        const offsetLeft = targetCard.offsetLeft - spaceGrid.offsetLeft;
        spaceGrid.scrollTo({
          left: offsetLeft,
          behavior: 'smooth'
        });
        updateSpaceActiveState(index);
      }
    };

    spaceSwitchBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-space-index') || '0', 10);
        scrollToSpaceIndex(index);
      });
    });

    spaceDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-space-index') || '0', 10);
        scrollToSpaceIndex(index);
      });
    });

    // Horizontal Scroll -> Synch Active Tab
    let spaceScrollTimeout;
    spaceGrid.addEventListener('scroll', () => {
      clearTimeout(spaceScrollTimeout);
      spaceScrollTimeout = setTimeout(() => {
        const cards = spaceGrid.querySelectorAll('.space-card');
        const scrollLeft = spaceGrid.scrollLeft;
        let closestIndex = 0;
        let minDiff = Infinity;

        cards.forEach((card, idx) => {
          const diff = Math.abs((card.offsetLeft - spaceGrid.offsetLeft) - scrollLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closestIndex = idx;
          }
        });

        updateSpaceActiveState(closestIndex);
      }, 50);
    }, { passive: true });
  }

  /* -------------------------------------------------------------
     9. Interactive Tasting Bottom-Sheet Modal
     ------------------------------------------------------------- */
  const tastingModal = document.getElementById('tasting-modal');
  const sheetCloseBtn = document.getElementById('sheet-close-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  const sheetImg = document.getElementById('sheet-img');
  const sheetBadge = document.getElementById('sheet-badge');
  const sheetCategory = document.getElementById('sheet-category');
  const sheetTitle = document.getElementById('sheet-title');
  const sheetPrice = document.getElementById('sheet-price');
  const sheetDesc = document.getElementById('sheet-desc');
  const sheetFlavors = document.getElementById('sheet-flavors');
  const sheetMethod = document.getElementById('sheet-method');
  const sheetTemp = document.getElementById('sheet-temp');
  const sheetCharacter = document.getElementById('sheet-character');
  const sheetIntensity = document.getElementById('sheet-intensity');
  const sheetWaBtn = document.getElementById('sheet-wa-btn');

  const closeModal = () => {
    if (tastingModal) {
      tastingModal.classList.remove('open');
      tastingModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (tastingModal && sheetCloseBtn) {
    sheetCloseBtn.addEventListener('click', closeModal);

    tastingModal.addEventListener('click', (e) => {
      if (e.target === tastingModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && tastingModal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  menuCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked on an anchor or button inside card
      if (e.target.closest('a') && !e.target.closest('.menu-card')) return;

      const titleEl = card.querySelector('.menu-item-name');
      const priceEl = card.querySelector('.menu-price');
      const descEl = card.querySelector('.menu-item-desc');
      const imgEl = card.querySelector('.menu-thumb');
      const badgeEl = card.querySelector('.badge');
      const groupEl = card.closest('.menu-category-group');
      const categoryTitleEl = groupEl ? groupEl.querySelector('.category-title') : null;
      const flavorTags = card.querySelectorAll('.flavor-tag');
      const footerEl = card.querySelector('.menu-card-footer span');

      if (titleEl && priceEl && tastingModal) {
        const titleText = titleEl.innerText.trim();
        const priceText = priceEl.innerText.trim();
        const descText = descEl ? descEl.innerText.trim() : '';
        const imgSrc = imgEl ? imgEl.getAttribute('src') : '';
        const badgeText = badgeEl ? badgeEl.innerText.trim() : 'Artisan Handcrafted';
        const categoryText = categoryTitleEl ? categoryTitleEl.innerText.trim() : 'Seduhan Artisan';
        const footerText = footerEl ? footerEl.innerText.trim() : 'Single Origin • Kualitas Terpilih';

        if (sheetTitle) sheetTitle.innerText = titleText;
        if (sheetPrice) sheetPrice.innerText = priceText;
        if (sheetDesc) sheetDesc.innerText = descText;
        if (sheetCategory) sheetCategory.innerText = categoryText;
        if (sheetBadge) sheetBadge.innerText = badgeText;
        if (sheetImg && imgSrc) {
          sheetImg.src = imgSrc;
          sheetImg.alt = titleText;
        }

        // Populate flavors
        if (sheetFlavors) {
          sheetFlavors.innerHTML = '';
          if (flavorTags.length) {
            flavorTags.forEach(tag => {
              const span = document.createElement('span');
              span.className = tag.className;
              span.innerText = tag.innerText;
              sheetFlavors.appendChild(span);
            });
          } else {
            const fallback = document.createElement('span');
            fallback.className = 'flavor-tag accent';
            fallback.innerText = 'Bahan Pilihan';
            sheetFlavors.appendChild(fallback);
          }
        }

        // Set cupping parameters contextually
        if (sheetCharacter) sheetCharacter.innerText = footerText.split('•')[0] || 'Khas & Lembut';
        if (sheetIntensity) sheetIntensity.innerText = footerText.split('•')[1] || 'Seimbang Harmonis';
        if (categoryText.toLowerCase().includes('coffee')) {
          if (sheetMethod) sheetMethod.innerText = titleText.includes('Dingin') ? '18h Cold Drip' : 'Slow Bar / 9 Bar Espresso';
          if (sheetTemp) sheetTemp.innerText = titleText.includes('Dingin') ? '4°C (Chilled)' : '92°C Brew Temp';
        } else if (categoryText.toLowerCase().includes('pastry')) {
          if (sheetMethod) sheetMethod.innerText = 'Artisan Oven Bake';
          if (sheetTemp) sheetTemp.innerText = 'Saji Hangat / Suhu Ruang';
        } else {
          if (sheetMethod) sheetMethod.innerText = 'Whisked / Cold Steeping';
          if (sheetTemp) sheetTemp.innerText = 'Dingin / Hangat Menenangkan';
        }

        // Update WhatsApp CTA URL with product name
        if (sheetWaBtn) {
          const waMsg = encodeURIComponent(`Halo Ruang Seduh, saya ingin memesan / menanyakan ketersediaan menu "${titleText}" (${priceText}).`);
          sheetWaBtn.href = `https://wa.me/6281234567890?text=${waMsg}`;
        }

        // Open modal
        tastingModal.classList.add('open');
        tastingModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });
});

