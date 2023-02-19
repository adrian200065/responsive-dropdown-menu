const navBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

navBtn.addEventListener('click', () => {
    navLinks.classList.add('activated');
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('aria-expanded', !isExpanded);
    !isExpanded && navBtn.classList.add('active');
})

// Transition
// window.addEventListener('DOMContentLoaded', () => {
//     navLinks.classList('activated');
// })

// Dropdown menu functionality
const dropdownToggle = document.querySelectorAll('.dropdown-toggle');

dropdownToggle.forEach((toggle) => {
  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    toggle.classList.toggle('dropdown-toggle--active');
    toggle.nextElementSibling.classList.toggle('dropdown-menu--active');
  });
});

// Close dropdown menu when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.has-dropdown')) {
    dropdownToggle.forEach((toggle) => {
      toggle.classList.remove('dropdown-toggle--active');
      toggle.nextElementSibling.classList.remove('dropdown-menu--active');
    });
  }
});

// Close dropdown menu on escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    dropdownToggle.forEach((toggle) => {
      toggle.classList.remove('dropdown-toggle--active');
      toggle.nextElementSibling.classList.remove('dropdown-menu--active');
    });
  }
});