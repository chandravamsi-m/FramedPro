/**
 * main.js - Consolidated JS for FramedPro
 * A single entry point for all frontend logic: components, theme, UI, and utilities.
 */

(function () {
  'use strict';

  // --- 1. Global Initialization ---
  function initBase() {
    const html = document.documentElement;
    const isDark = localStorage.getItem('fp-theme') === 'dark' || 
                 (!localStorage.getItem('fp-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    html.classList.toggle('dark', isDark);

    // Theme toggle buttons (can be multiple)
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const dark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('fp-theme', dark ? 'dark' : 'light');
      });
    });
  }

  function initDirection() {
    const html = document.documentElement;
    const toggleBtns = document.querySelectorAll('[data-dir-toggle]');
    
    const updateDir = (isRtl) => {
      html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
      localStorage.setItem('fp-dir', isRtl ? 'rtl' : 'ltr');
      // Update toggle text
      document.querySelectorAll('.dir-toggle-text').forEach(el => {
        el.textContent = isRtl ? 'LTR' : 'RTL';
      });
    };

    const currentDir = localStorage.getItem('fp-dir') || 'ltr';
    updateDir(currentDir === 'rtl');

    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const isRtl = html.getAttribute('dir') === 'rtl';
        updateDir(!isRtl);
      });
    });
  }

  function initNavbar() {
    const navbar = document.getElementById('main-navbar');
    if (!navbar) return;
    const isDarkInitial = navbar.hasAttribute('data-navbar-dark');
    
    const onScroll = () => {
      const isScrolled = window.scrollY > 50;
      navbar.classList.toggle('backdrop-blur-md', isScrolled);
      navbar.classList.toggle('shadow-lg', isScrolled);
      navbar.classList.toggle('bg-white/80', isScrolled);
      navbar.classList.toggle('dark:bg-gray-950/80', isScrolled);
      navbar.classList.toggle('py-3', isScrolled);
      navbar.classList.toggle('py-5', !isScrolled);
      
      if (isDarkInitial) {
        navbar.classList.toggle('is-transparent-dark', !isScrolled);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile Hamburger
    const openBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('drawer-close-btn');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('drawer-overlay');

    if (drawer) {
      const toggleDrawer = (open) => {
        drawer.classList.toggle('translate-x-full', !open);
        drawer.classList.toggle('rtl:-translate-x-full', !open);
        drawer.classList.toggle('translate-x-0', open);
        overlay?.classList.toggle('hidden', !open);
        overlay?.classList.toggle('opacity-0', !open);
        document.body.style.overflow = open ? 'hidden' : '';
      };
      openBtn?.addEventListener('click', () => toggleDrawer(true));
      closeBtn?.addEventListener('click', () => toggleDrawer(false));
      overlay?.addEventListener('click', () => toggleDrawer(false));
    }
  }

  function initActiveNav() {
    const path = window.location.pathname;
    const isHome2 = path.includes('/pages/home-2.html') || path.includes('\\pages\\home-2.html');
    const isHome1 = (path.endsWith('index.html') || path === '/' || path.endsWith('/')) && !path.includes('/pages/');
    const isHomePage = isHome1 || isHome2;

    // Helper to apply active styles
    const setActive = (el) => {
      el.classList.remove('text-gray-700', 'dark:text-gray-200');
      el.classList.add('text-amber-700', 'dark:text-amber-400', 'font-bold');
    };

    // 1. Highlight Home dropdowns if on any home page
    if (isHomePage) {
      document.querySelectorAll('#home-dropdown-btn, #mob-home-btn').forEach(setActive);
    }

    // 2. Highlight specific links
    document.querySelectorAll('nav a, #mobile-drawer a').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;

      const linkFile = href.split('/').pop();
      const isLinkHome1 = (linkFile === 'index.html' && !href.includes('/pages/')) || 
                          href === './' || href === '../' || href === '/';
      const isLinkHome2 = linkFile === 'home-2.html';
      
      let isMatch = false;
      if (isHome1 && isLinkHome1) isMatch = true;
      else if (isHome2 && isLinkHome2) isMatch = true;
      else if (!isLinkHome1 && !isLinkHome2) {
        // For other pages, check if path ends with href's relative part
        const cleanHref = href.replace('../', '').replace('./', '');
        isMatch = path.endsWith(cleanHref);
      }

      if (isMatch) setActive(link);
    });
  }

  // --- 3. UI Interactions ---
  function initAccordions() {
    document.querySelectorAll('[data-accordion-trigger]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-accordion-trigger');
        const target = document.getElementById(targetId);
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        
        btn.setAttribute('aria-expanded', !isOpen);
        target?.classList.toggle('hidden', isOpen);
        btn.querySelector('.accordion-icon')?.classList.toggle('rotate-180', !isOpen);
      });
    });
  }



  // --- 5. Simplified Utilities ---
  function initFormValidation() {
    document.querySelectorAll('form[data-validate]').forEach(form => {
      form.addEventListener('submit', e => {
        let valid = true;
        form.querySelectorAll('input[required], textarea[required]').forEach(f => {
          if (!f.value.trim()) {
            f.classList.add('border-red-500');
            valid = false;
          } else {
            f.classList.remove('border-red-500');
          }
        });
        if (!valid) e.preventDefault();
      });
    });
  }

  // --- Carousel Global Access ---
  window.initCarousel = function(id) {
    const container = document.getElementById(id);
    if (!container) return;
    const track = container.querySelector('.testimonial-track');
    const slides = container.querySelectorAll('.testimonial-slide');
    const dots = container.querySelectorAll('[data-dot]');
    let current = 0;

    const show = (i) => {
      current = (i + slides.length) % slides.length;
      if (track) track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, idx) => {
        const isCurrent = idx === current;
        d.classList.toggle('bg-amber-700', isCurrent);
        d.classList.toggle('w-6', isCurrent);
        d.classList.toggle('bg-gray-200', !isCurrent);
        d.classList.toggle('dark:bg-gray-700', !isCurrent);
        d.classList.toggle('w-2.5', !isCurrent);
        d.setAttribute('aria-selected', isCurrent);
      });
    };

    container.querySelector('[data-carousel-prev]')?.addEventListener('click', () => show(current - 1));
    container.querySelector('[data-carousel-next]')?.addEventListener('click', () => show(current + 1));

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => show(idx));
    });

    show(0);
  };

  // --- Bootstrap ---
  function bootstrap() {
    initBase();
    initDirection();
    // Dynamic loading removed as per user request (Hardcoding components)
    initNavbar();
    initActiveNav();
    initAccordions();
    initDashboard();

    initFormValidation();
  }

  // --- 4. Dashboard Toggle ---
  function initDashboard() {
    const sidebar = document.getElementById('db-sidebar');
    const mobileToggle = document.getElementById('sidebar-mobile-toggle');
    const closeBtn = document.getElementById('sidebar-close-btn');
    const layout = document.getElementById('db-layout');

    if (sidebar && mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
      });

      closeBtn?.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
      });

      // Close sidebar if clicking outside on mobile
      document.addEventListener('click', (e) => {
        if (window.innerWidth < 1024 && !sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
          sidebar.classList.remove('mobile-open');
        }
      });

      // Global utility to close sidebar (used by dashboard layout switches)
      window.closeSidebar = () => {
        sidebar.classList.remove('mobile-open');
      };
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }

})();
