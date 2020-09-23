const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page.jpg",

    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2020",
  },
};

// write your code here

const mainDaiv = document.querySelector(".container");


const navBarLinks = document.getElementsByTagName("a");

navBarLinks[0].textContent = siteContent.nav["nav-item-1"];
navBarLinks[1].textContent = siteContent.nav["nav-item-2"];
navBarLinks[2].textContent = siteContent.nav["nav-item-3"];
navBarLinks[3].textContent = siteContent.nav["nav-item-4"];
navBarLinks[4].textContent = siteContent.nav["nav-item-5"];
navBarLinks[5].textContent = siteContent.nav["nav-item-6"];

const navBar = document.querySelector("body > div > header > nav");
const a1 = document.createElement("a");
a1.textContent = "Hello word";
const a2 = document.createElement("a");
a2.textContent = "Thank you";

navBar.appendChild(a1);
navBar.appendChild(a2);

for (let a of navBarLinks) {
  a.style.color = "green";
}

const imgLogo = document.querySelector(".logo");
imgLogo.src = siteContent.nav["img-src"];

const ctaH1 = document.getElementsByTagName("h1")[0];
ctaH1.textContent = siteContent.cta.h1;

const ctaButton = document.getElementsByTagName("button")[0];
ctaButton.textContent = siteContent.cta.button;

const ctaImag = document.querySelector("#cta-img");
ctaImag.src = siteContent.cta["img-src"];

const featuresH4 = document.querySelector(
  "body > div > section.main-content > div.top-content > div:nth-child(1) > h4"
);
featuresH4.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelector(
  "body > div > section.main-content > div.top-content > div:nth-child(1) > p"
);
featuresContent.textContent = siteContent["main-content"]["features-content"];

const aboutH4 = document.querySelector(
  "body > div > section.main-content > div.top-content > div:nth-child(2) > h4"
);
aboutH4.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelector(
  "body > div > section.main-content > div.top-content > div:nth-child(2) > p"
);
aboutContent.textContent = siteContent["main-content"]["about-content"];

const middleImgSrc = document.querySelector("#middle-img");
middleImgSrc.src = siteContent["main-content"]["middle-img-src"];

const servicesH4 = document.querySelector(
  "body > div > section.main-content > div.bottom-content > div:nth-child(1) > h4"
);
servicesH4.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelector(
  "body > div > section.main-content > div.bottom-content > div:nth-child(1) > p"
);
servicesContent.textContent = siteContent["main-content"]["services-content"];

const productH4 = document.querySelector(
  "body > div > section.main-content > div.bottom-content > div:nth-child(2) > h4"
);
productH4.textContent = siteContent["main-content"]["product-h4"];

const productContent = document.querySelector(
  "body > div > section.main-content > div.bottom-content > div:nth-child(2) > p"
);
productContent.textContent = siteContent["main-content"]["product-content"];

const visionH4 = document.querySelector(
  "body > div > section.main-content > div.bottom-content > div:nth-child(3) > h4"
);
visionH4.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelector(
  "body > div > section.main-content > div.bottom-content > div:nth-child(3) > p"
);
visionContent.textContent = siteContent["main-content"]["vision-content"];

const contactH4 = document.querySelector("body > div > section.contact > h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelector(
  "body > div > section.contact > p:nth-child(2)"
);
contactAddress.textContent = siteContent["contact"]["address"];

const contactPhone = document.querySelector(
  "body > div > section.contact > p:nth-child(3)"
);
contactPhone.textContent = siteContent["contact"]["phone"];

const contactEmail = document.querySelector(
  "body > div > section.contact > p:nth-child(4)"
);
contactEmail.textContent = siteContent["contact"]["email"];

const footerP = document.querySelector("body > div > footer > p");
footerP.textContent = siteContent["footer"]["copyright"];
