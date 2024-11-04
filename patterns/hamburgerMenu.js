let hamburgerMenuEl = document.querySelector('.hamburger-menu');
let menuEl = document.querySelector('.menu');

// Show the menu and transform hamburger menu into 'X'
hamburgerMenuEl.addEventListener('click', () => {
    hamburgerMenuEl.classList.toggle('active');
    menuEl.classList.toggle('active');
})