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