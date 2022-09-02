let footerElement = document.querySelector('.site-footer');

// Main div element
let mainFooterDivElement = document.createElement('div');
mainFooterDivElement.setAttribute('class', 'footer-main');
footerElement.appendChild(mainFooterDivElement);

// Footer menu
let menuFooterElement = document.createElement('div');
menuFooterElement.setAttribute('class', 'footer-menu');
mainFooterDivElement.appendChild(menuFooterElement);

let firstColHeadingElement = document.createElement('h3');
firstColHeadingElement.textContent = 'Imoogi';
menuFooterElement.appendChild(firstColHeadingElement);

let ulFirstColElement = document.createElement('ul');
menuFooterElement.appendChild(ulFirstColElement);

let firstColFirstLiElement = document.createElement('li');
let firstLiFirstLinkEl = document.createElement('a');
firstLiFirstLinkEl.setAttribute('href', '../pages/index.html');
firstLiFirstLinkEl.textContent = 'Home';
firstColFirstLiElement.appendChild(firstLiFirstLinkEl);
ulFirstColElement.appendChild(firstColFirstLiElement);

let firstColSecLiElement = document.createElement('li');
let SecLiSecLinkEl = document.createElement('a');
SecLiSecLinkEl.setAttribute('href', '#');
SecLiSecLinkEl.textContent = 'Menu';
firstColSecLiElement.appendChild(SecLiSecLinkEl);
ulFirstColElement.appendChild(firstColSecLiElement);