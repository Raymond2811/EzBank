let currentLanguage = 'english';

function toggleLanguage() {
  currentLanguage = currentLanguage === 'english' ? 'spanish' : 'english';

  updateLinkText();
  updateAboutUsLink();
  updateMainContent();
  updateFooterContent();
  updateNavLinksMargin();
}

function updateLinkText() {
  const link = document.getElementById('languageLink');
  link.innerText = currentLanguage === 'english' ? 'Español' : 'English';
}

const aboutUsLinkText = {
  english: 'About Us',
  spanish: 'Sobre Nosotros'
};

function updateAboutUsLink() {
  const aboutUsLink = document.getElementById('aboutUsLink');
  aboutUsLink.innerText = aboutUsLinkText[currentLanguage];
}
function updateNavLinksMargin() {
  const navLinks = document.querySelectorAll('nav a');
  const marginValue = currentLanguage === 'spanish' ? '100px' : '100px';

  navLinks.forEach(link => {
    link.style.marginRight = marginValue;
  });
}

const mainContent = {
  english: 'englishContent',
  spanish: 'spanishContent'
};

function updateMainContent() {
  Object.keys(mainContent).forEach((language) => {
    document.getElementById(mainContent[language]).style.display = 'none';
  });
  document.getElementById(mainContent[currentLanguage]).style.display = 'block';
}

const footerContent = {
  english: {
    contactHeader: 'Contact Us',
    contactUsText: 'For inquiries and assistance, feel free to reach out:',
    connectHeader: 'Connect With Us'
  },
  spanish: {
    contactHeader: 'Contáctenos',
    contactUsText: 'Para consultas y asistencia, no dude en comunicarse:',
    connectHeader: 'Conéctese con nosotros'
  }
};

function updateFooterContent() {
  const contactHeader = document.getElementById('contactHeader');
  const contactUsText = document.getElementById('contactUsText');
  const connectHeader = document.getElementById('connectHeader');

  contactHeader.innerText = footerContent[currentLanguage].contactHeader;
  contactUsText.innerText = footerContent[currentLanguage].contactUsText;
  connectHeader.innerText = footerContent[currentLanguage].connectHeader;
}