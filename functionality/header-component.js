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