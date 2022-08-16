let mainDivElement = document.querySelector('.site-header');

let headerElement = document.createElement('header');
headerElement.setAttribute('class', 'site-logo');
mainDivElement.appendChild(headerElement);

let linkLogoElement = document.createElement('a');
linkLogoElement.setAttribute('href', 'index.html');
headerElement.appendChild(linkLogoElement);