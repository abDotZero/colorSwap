const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link a');

navLinks.forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
});
