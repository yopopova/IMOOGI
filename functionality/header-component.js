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