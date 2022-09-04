let footerElement = document.querySelector('.site-footer');

// Main top div element
let topMainDivElement = document.createElement('div');
topMainDivElement.setAttribute('class', 'footer-main');
footerElement.appendChild(topMainDivElement);

// Site menu
let menuElement = document.createElement('div');
menuElement.setAttribute('class', 'footer-menu');
topMainDivElement.appendChild(menuElement);

let menuHeadingElement = document.createElement('h3');
menuHeadingElement.textContent = 'Imoogi';
menuElement.appendChild(menuHeadingElement);

let menuUlElement = document.createElement('ul');
menuElement.appendChild(menuUlElement);

let menuFirstLiElement = document.createElement('li');
menuUlElement.appendChild(menuFirstLiElement);

let menuFirstLinkElement = document.createElement('a');
menuFirstLinkElement.setAttribute('href', '../pages/index.html');
menuFirstLinkElement.textContent = 'Home';
menuFirstLiElement.appendChild(menuFirstLinkElement);

let menuSecondLiElement = document.createElement('li');
menuUlElement.appendChild(menuSecondLiElement);

let menuSecondLinkElement = document.createElement('a');
menuSecondLinkElement.setAttribute('href', '#');
menuSecondLinkElement.textContent = 'Menu';
menuSecondLiElement.appendChild(menuSecondLinkElement);

let menuThirdLiElement = document.createElement('li');
menuUlElement.appendChild(menuThirdLiElement);

let menuThirdLinkElement = document.createElement('a');
menuThirdLinkElement.setAttribute('href', '#');
menuThirdLinkElement.textContent = 'Reservation';
menuThirdLiElement.appendChild(menuThirdLinkElement);

let menuFourthLiElement = document.createElement('li');
menuUlElement.appendChild(menuFourthLiElement);

let menuFourthLinkElement = document.createElement('a');
menuFourthLinkElement.setAttribute('href', '#');
menuFourthLinkElement.textContent = 'About';
menuFourthLiElement.appendChild(menuFourthLinkElement);

let menuFifthLiElement = document.createElement('li');
menuUlElement.appendChild(menuFifthLiElement);

let menuFifthLinkElement = document.createElement('a');
menuFifthLinkElement.setAttribute('href', '#');
menuFifthLinkElement.textContent = 'Contacts';
menuFifthLiElement.appendChild(menuFifthLinkElement);

// Site contacts
let contactsElement = document.createElement('div');
contactsElement.setAttribute('class', 'footer-contacts');
topMainDivElement.appendChild(contactsElement);

let contactsHeadingElement = document.createElement('h3');
contactsHeadingElement.textContent = 'Contacts';
contactsElement.appendChild(contactsHeadingElement);