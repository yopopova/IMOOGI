let mainDivElement = document.querySelector('.site-header');

// Site header element
let headerElement = document.createElement('header');
headerElement.setAttribute('class', 'site-logo');
mainDivElement.appendChild(headerElement);

let linkLogoElement = document.createElement('a');
linkLogoElement.setAttribute('href', 'index.html');
headerElement.appendChild(linkLogoElement);

let imgLogoElement = document.createElement('img');
imgLogoElement.setAttribute('src', '../images/imoogi-logo.png');
imgLogoElement.setAttribute('alt', 'imoogi-logo');
linkLogoElement.appendChild(imgLogoElement);

// Site navigation element
let navElement = document.createElement('nav');
navElement.setAttribute('class', 'site-navigation');
mainDivElement.appendChild(navElement);

let ulMenuElement = document.createElement('ul');
ulMenuElement.setAttribute('class', 'menu');
navElement.appendChild(ulMenuElement);

let firstNavLiElement = document.createElement('li');
let firstLiAElement = document.createElement('a');
firstLiAElement.setAttribute('href', 'index.html');
firstLiAElement.textContent = 'Home';
firstNavLiElement.appendChild(firstLiAElement);
ulMenuElement.appendChild(firstNavLiElement);

let secondNavLiElement = document.createElement('li');
let secondLiAElement = document.createElement('a');
secondLiAElement.setAttribute('href', '#');
secondLiAElement.textContent = 'Menu';
secondNavLiElement.appendChild(secondLiAElement);
ulMenuElement.appendChild(secondNavLiElement);

let thirdNavLiElement = document.createElement('li');
let thirdLiAElement = document.createElement('a');
thirdLiAElement.setAttribute('href', '#');
thirdLiAElement.textContent = 'Reservation';
thirdNavLiElement.appendChild(thirdLiAElement);
ulMenuElement.appendChild(thirdNavLiElement);

let fourthNavLiElement = document.createElement('li');
let fourthLiAElement = document.createElement('a');
fourthLiAElement.setAttribute('href', '#');
fourthLiAElement.textContent = 'About';
fourthNavLiElement.appendChild(fourthLiAElement);
ulMenuElement.appendChild(fourthNavLiElement);

let fifthNavLiElement = document.createElement('li');
let fifthLiAElement = document.createElement('a');
fifthLiAElement.setAttribute('href', '#');
fifthLiAElement.textContent = 'Contacts';
fifthNavLiElement.appendChild(fifthLiAElement);
ulMenuElement.appendChild(fifthNavLiElement);

let sixthNavLiElement = document.createElement('li');
sixthNavLiElement.setAttribute('class', 'login');
let sixthLiAElement = document.createElement('a');
sixthLiAElement.setAttribute('href', '#');
sixthLiAElement.textContent = 'Log In';
sixthNavLiElement.appendChild(sixthLiAElement);
ulMenuElement.appendChild(sixthNavLiElement);

let seventhLiElement = document.createElement('li');
let inputFieldElement = document.createElement('input');
inputFieldElement.setAttribute('class', 'search-bar');
inputFieldElement.setAttribute('type', 'text');
inputFieldElement.setAttribute('placeholder', 'Search...');
let btnElement = document.createElement('button');
btnElement.setAttribute('class', 'search-button');
let iconMagnifyingGlassElement = document.createElement('i');
iconMagnifyingGlassElement.setAttribute('class', 'fa-solid fa-magnifying-glass');
btnElement.appendChild(iconMagnifyingGlassElement);
seventhLiElement.appendChild(inputFieldElement);
seventhLiElement.appendChild(btnElement);
ulMenuElement.appendChild(seventhLiElement);

let cartDivElement = document.createElement('div');
cartDivElement.setAttribute('class', 'shopping-cart');
let cartIconElement = document.createElement('i');
cartIconElement.setAttribute('class', 'fa-solid fa-cart-shopping');
cartDivElement.appendChild(cartIconElement);
mainDivElement.appendChild(cartDivElement);