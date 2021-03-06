const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

 //Example: Update the img src for the logo
 let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//end logo image

//begin CTA
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])
//end cta image

//Nav a
let navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
})
//The string literal is the same as a for loop 

//CTA
let ctaSection = document.querySelector(".cta");
let ctaText = ctaSection.querySelector(".cta-text h1");

ctaText.innerHTML = `DOM<p> Is</p> Awesome`;

let ctaBtn = ctaSection.querySelector(".cta-text button");

ctaBtn.textContent = `Get Started`;
// end cta text and button


//Main-Content
let allText = document.querySelectorAll(".text-content");
allText[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];

allText[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];

allText[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
allText[1].getElementsByTagName("p")[0].innerHTML = siteContent['main-content']["about-content"];
allText[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
allText[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
allText[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
allText[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];
allText[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
allText[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];
//end content top and middle  that was a lot of typing had errors for vision ugh!


//middle image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//contact I tried using tag but it was confusing
let contact = document.getElementsByClassName("contact")[0];
contact.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"];
contact.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"];
contact.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"];
contact.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"];


//footer a simple query selector without the all 
let footer = document.querySelector("footer");
footer.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];

