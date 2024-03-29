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
menuSecondLinkElement.setAttribute('href', '../pages/menu.html');
menuSecondLinkElement.textContent = 'Menu';
menuSecondLiElement.appendChild(menuSecondLinkElement);

let menuThirdLiElement = document.createElement('li');
menuUlElement.appendChild(menuThirdLiElement);

let menuThirdLinkElement = document.createElement('a');
menuThirdLinkElement.setAttribute('href', '../pages/reservation.html');
menuThirdLinkElement.textContent = 'Reservation';
menuThirdLiElement.appendChild(menuThirdLinkElement);

let menuFourthLiElement = document.createElement('li');
menuUlElement.appendChild(menuFourthLiElement);

let menuFourthLinkElement = document.createElement('a');
menuFourthLinkElement.setAttribute('href', '../pages/about.html');
menuFourthLinkElement.textContent = 'About Us';
menuFourthLiElement.appendChild(menuFourthLinkElement);

let menuFifthLiElement = document.createElement('li');
menuUlElement.appendChild(menuFifthLiElement);

let menuFifthLinkElement = document.createElement('a');
menuFifthLinkElement.setAttribute('href', '../pages/contacts.html');
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
contactsFirstParagraph.textContent = 'Phone: ';
contactsElement.appendChild(contactsFirstParagraph);

let contactsFirstStrongTag = document.createElement('strong');
contactsFirstStrongTag.textContent = '+359 898 70 20 30';
contactsFirstParagraph.appendChild(contactsFirstStrongTag);

let contactsSecondParagraph = document.createElement('p');
contactsSecondParagraph.textContent = 'Email: ';
contactsElement.appendChild(contactsSecondParagraph);

let contactsSecondStrongTag = document.createElement('strong');
contactsSecondStrongTag.textContent = 'order@imoogi.bg';
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
socialThirdIconElement.setAttribute('class', 'fa-brands fa-x-twitter');
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

let paymentUlElement = document.createElement('ul');
paymentDiv.appendChild(paymentUlElement);

let payFirstLiElement = document.createElement('li');
payFirstLiElement.setAttribute('class', 'pay');
paymentUlElement.appendChild(payFirstLiElement);

let payFirstLinkElement = document.createElement('a');
payFirstLinkElement.setAttribute('href', 'https://usa.visa.com/');
payFirstLinkElement.setAttribute('target', '_blank');
payFirstLiElement.appendChild(payFirstLinkElement);

let payFirstIconElement = document.createElement('i');
payFirstIconElement.setAttribute('class', 'fa-brands fa-cc-visa');
payFirstLinkElement.appendChild(payFirstIconElement);

let payFirstSpanElement = document.createElement('span');
payFirstSpanElement.textContent = 'Visa';
payFirstIconElement.appendChild(payFirstSpanElement);

let paySecondLiElement = document.createElement('li');
paySecondLiElement.setAttribute('class', 'pay');
paymentUlElement.appendChild(paySecondLiElement);

let paySecondLinkElement = document.createElement('a');
paySecondLinkElement.setAttribute('href', 'https://www.mastercard.com/global/en.html');
paySecondLinkElement.setAttribute('target', '_blank');
paySecondLiElement.appendChild(paySecondLinkElement);

let paySecondIconElement = document.createElement('i');
paySecondIconElement.setAttribute('class', 'fa-brands fa-cc-mastercard');
paySecondLinkElement.appendChild(paySecondIconElement);

let paySecondSpanElement = document.createElement('span');
paySecondSpanElement.textContent = 'Mastercard';
paySecondIconElement.appendChild(paySecondSpanElement);

let payThirdLiElement = document.createElement('li');
payThirdLiElement.setAttribute('class', 'pay');
paymentUlElement.appendChild(payThirdLiElement);

let payThirdLinkElement = document.createElement('a');
payThirdLinkElement.setAttribute('href', 'https://www.paypal.com/bg/home');
payThirdLinkElement.setAttribute('target', '_blank');
payThirdLiElement.appendChild(payThirdLinkElement);

let payThirdIconElement = document.createElement('i');
payThirdIconElement.setAttribute('class', 'fa-brands fa-cc-paypal');
payThirdLinkElement.appendChild(payThirdIconElement);

let payThirdSpanElement = document.createElement('span');
payThirdSpanElement.textContent = 'PayPal';
payThirdIconElement.appendChild(payThirdSpanElement);

let payFourthLiElement = document.createElement('li');
payFourthLiElement.setAttribute('class', 'pay');
paymentUlElement.appendChild(payFourthLiElement);

let payFourthLinkElement = document.createElement('a');
payFourthLinkElement.setAttribute('href', '#');
payFourthLiElement.appendChild(payFourthLinkElement);

let payFourthIconElement = document.createElement('i');
payFourthIconElement.setAttribute('class', 'fa-solid fa-hand-holding-dollar');
payFourthLinkElement.appendChild(payFourthIconElement);

let payFourthSpanElement = document.createElement('span');
payFourthSpanElement.textContent = 'Cash';
payFourthIconElement.appendChild(payFourthSpanElement);

// Horizontal line
let horizontalLineElement = document.createElement('hr');
footerElement.appendChild(horizontalLineElement);

let bottomMainDivElement = document.createElement('div');
bottomMainDivElement.setAttribute('class', 'footer-extra-info');
footerElement.appendChild(bottomMainDivElement);

let footerLogoDivElement = document.createElement('div');
footerLogoDivElement.setAttribute('class', 'footer-logo');
bottomMainDivElement.appendChild(footerLogoDivElement);

let logoImgElement = document.createElement('img');
logoImgElement.setAttribute('src', '../images/imoogi-logo.png');
logoImgElement.setAttribute('alt', 'imoogi-logo');
footerLogoDivElement.appendChild(logoImgElement);

let infoDivElement = document.createElement('div');
infoDivElement.setAttribute('class', 'more-info');
bottomMainDivElement.appendChild(infoDivElement);

let infoFirstLinkElement = document.createElement('a');
infoFirstLinkElement.setAttribute('href', '#');
infoFirstLinkElement.textContent = 'Terms and Conditions';
infoDivElement.appendChild(infoFirstLinkElement);

let infoSecondLinkElement = document.createElement('a');
infoSecondLinkElement.setAttribute('href', '#');
infoSecondLinkElement.textContent = 'Privacy Policy';
infoDivElement.appendChild(infoSecondLinkElement);

let copyrightDivElement = document.createElement('div');
copyrightDivElement.setAttribute('class', 'footer-copyright');
bottomMainDivElement.appendChild(copyrightDivElement);

let copyrightFirstParagraphElemenet = document.createElement('p');
copyrightFirstParagraphElemenet.textContent = '\u00A9 2021-2024 - IMOOGI Korean Restaurant';
copyrightDivElement.appendChild(copyrightFirstParagraphElemenet);

let copyrightSecondParagraphElemenet = document.createElement('p');
copyrightSecondParagraphElemenet.textContent = 'All rights reserved. Web design by ';
copyrightDivElement.appendChild(copyrightSecondParagraphElemenet);

let copyrightLinkElement = document.createElement('a');
copyrightLinkElement.setAttribute('href', 'https://github.com/yopopova');
copyrightLinkElement.setAttribute('target', '_blank');
copyrightLinkElement.textContent = 'Yoanna Popova';
copyrightSecondParagraphElemenet.appendChild(copyrightLinkElement);