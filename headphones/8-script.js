document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.main-nav ul');
  const navLinks = document.querySelectorAll('.main-nav a');

  function toggleMenu() {
    // Toggle menu visibility
    navMenu.classList.toggle('show-menu');
    
    // Toggle hamburger animation
    hamburger.classList.toggle('active');
    
    // Toggle aria-expanded for accessibility
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains('show-menu') ? 'hidden' : '';
  }

  function closeMenu() {
    navMenu.classList.remove('show-menu');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  // Click event
  hamburger.addEventListener('click', toggleMenu);

  // Keyboard events (Enter/Space)
  hamburger.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Close menu when clicking on nav links (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when clicking outside (mobile)
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 480) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        closeMenu();
      }
    }
  });

  // Close menu on window resize to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 480) {
      closeMenu();
    }
  });

  // Set initial aria-expanded attribute
  hamburger.setAttribute('aria-expanded', 'false');
});
