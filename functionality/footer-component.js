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

let contactsFirstParagraph = document.createElement('p');
contactsFirstParagraph.textContent = 'Orders and reservations: ';
contactsElement.appendChild(contactsFirstParagraph);

let contactsFirstStrongTag = document.createElement('strong');
contactsFirstStrongTag.textContent = '0898 70 20 30';
contactsFirstParagraph.appendChild(contactsFirstStrongTag);

let contactsSecondParagraph = document.createElement('p');
contactsSecondParagraph.textContent = 'Email: ';
contactsElement.appendChild(contactsSecondParagraph);

let contactsSecondStrongTag = document.createElement('strong');
contactsSecondStrongTag.textContent = 'office@imoogi.bg';
contactsSecondParagraph.appendChild(contactsSecondStrongTag);

let contactsThirdParagraph = document.createElement('p');
contactsThirdParagraph.textContent = 'Address: ';
contactsElement.appendChild(contactsThirdParagraph);

let contactsThirdStrongTag = document.createElement('strong');
contactsThirdStrongTag.textContent = '124 James Boucher blvd.';
contactsThirdParagraph.appendChild(contactsThirdStrongTag);

let contactsFourthParagraph = document.createElement('p');
contactsFourthParagraph.textContent = 'Work time: ';
contactsElement.appendChild(contactsFourthParagraph);

let contactsFourthStrongTag = document.createElement('strong');
contactsFourthStrongTag.textContent = '10:00 AM - 12:00 PM';
contactsFourthParagraph.appendChild(contactsFourthStrongTag);

// Div with social media links
let socialMediaElement = document.createElement('div');
socialMediaElement.setAttribute('class', 'footer-social');
topMainDivElement.appendChild(socialMediaElement);

let socialMediaHeadingElement = document.createElement('h3');
socialMediaHeadingElement.textContent = 'Follow us';
socialMediaElement.appendChild(socialMediaHeadingElement);

let socialUlElement = document.createElement('ul');
socialUlElement.setAttribute('class', 'social-icons');
socialMediaElement.appendChild(socialUlElement);

let socialFirstLiElement = document.createElement('li');
socialFirstLiElement.setAttribute('class', 'social-icon');
socialUlElement.appendChild(socialFirstLiElement);

let socialFirstLinkElement = document.createElement('a');
socialFirstLinkElement.setAttribute('href', 'https://bg-bg.facebook.com/');
socialFirstLinkElement.setAttribute('target', '_blank');
socialFirstLiElement.appendChild(socialFirstLinkElement);

let socialFirstIconElement = document.createElement('i');
socialFirstIconElement.setAttribute('class', 'fa-brands fa-facebook-f');
socialFirstLinkElement.appendChild(socialFirstIconElement);

let socialFirstSpanElement = document.createElement('span');
socialFirstSpanElement.textContent = 'Facebook';
socialFirstIconElement.appendChild(socialFirstSpanElement);

let socialSecondLiElement = document.createElement('li');
socialSecondLiElement.setAttribute('class', 'social-icon');
socialUlElement.appendChild(socialSecondLiElement);

let socialSecondLinkElement = document.createElement('a');
socialSecondLinkElement.setAttribute('href', 'https://www.instagram.com/');
socialSecondLinkElement.setAttribute('target', '_blank');
socialSecondLiElement.appendChild(socialSecondLinkElement);

let socialSecondIconElement = document.createElement('i');
socialSecondIconElement.setAttribute('class', 'fa-brands fa-instagram');
socialSecondLinkElement.appendChild(socialSecondIconElement);

let socialSecondSpanElement = document.createElement('span');
socialSecondSpanElement.textContent = 'Instagram';
socialSecondIconElement.appendChild(socialSecondSpanElement);

let socialThirdLiElement = document.createElement('li');
socialThirdLiElement.setAttribute('class', 'social-icon');
socialUlElement.appendChild(socialThirdLiElement);

let socialThirdLinkElement = document.createElement('a');
socialThirdLinkElement.setAttribute('href', 'https://twitter.com/?lang=bg');
socialThirdLinkElement.setAttribute('target', '_blank');
socialThirdLiElement.appendChild(socialThirdLinkElement);

let socialThirdIconElement = document.createElement('i');
socialThirdIconElement.setAttribute('class', 'fa-brands fa-twitter');
socialThirdLinkElement.appendChild(socialThirdIconElement);

let socialThirdSpanElement = document.createElement('span');
socialThirdSpanElement.textContent = 'Twitter';
socialThirdIconElement.appendChild(socialThirdSpanElement);

// Payment methods
let paymentDiv = document.createElement('div');
paymentDiv.setAttribute('class', 'payment-methods');
topMainDivElement.appendChild(paymentDiv);

let paymentHeadingElement = document.createElement('h3');
paymentHeadingElement.textContent = 'Payment methods';
paymentDiv.appendChild(paymentHeadingElement);