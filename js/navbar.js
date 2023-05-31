const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar ul');
let isNavbarExpanded = false;

navbarToggle.addEventListener('click', toggleNavbar);

function toggleNavbar() {
    navbar.classList.toggle('expanded');
    navbarToggle.classList.toggle('collapsed');
    navbarLinks.classList.toggle('hide-on-scroll');
    isNavbarExpanded = !isNavbarExpanded;

    if (isNavbarExpanded) {
        navbar.style.backgroundColor = '#000';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
}
//HOLA

window.addEventListener('scroll', handleScroll);

function handleScroll() {
    if (window.pageYOffset > 50 && !isNavbarExpanded) {
        navbar.classList.add('collapsed');
    } else {
        navbar.classList.remove('collapsed');
    }
}
