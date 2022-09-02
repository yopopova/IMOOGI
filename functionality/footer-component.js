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