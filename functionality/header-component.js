let mainDivElement = document.querySelector('.site-header');

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

let navElement = document.createElement('nav');
navElement.setAttribute('class', 'site-navigation');
headerElement.appendChild(navElement);

let ulMenuElement = document.createElement('ul');
ulMenuElement.setAttribute('class', 'menu');
navElement.appendChild(ulMenuElement);

let firstNavLiElement = document.createElement('li');
let firstLiAElement = document.createElement('a');
firstLiAElement.setAttribute('href', 'index.html');
firstLiAElement.textContent = 'Начало';
firstNavLiElement.appendChild(firstLiAElement);
ulMenuElement.appendChild(firstNavLiElement);

let secondNavLiElement = document.createElement('li');
let secondLiAElement = document.createElement('a');
secondLiAElement.setAttribute('href', '#');
secondLiAElement.textContent = 'Меню';
secondNavLiElement.appendChild(secondLiAElement);
ulMenuElement.appendChild(secondNavLiElement);