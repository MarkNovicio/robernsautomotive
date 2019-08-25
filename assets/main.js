/*var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
*/
let section = {
  header: document.querySelector(".topHeader"),
  nav: document.querySelector(".lowerNav")
};
//Create targeted elements
let navMenu = {
  about: document.querySelector(".about"),
  services: document.querySelector(".services"),
  location: document.querySelector(".location"),
  contact: document.querySelector(".contact")
};

let elements = {
  aboutUs: document.querySelector(".about-us"),
  servicesSection: document.querySelector(".services-info"),
  location: document.querySelector(".middleHeaderlocation")
};

//end targeted elements

//create functions to show and hide
let showServices = element => {
  element.style.display = "flex";
  element.style.flexDirection = "row";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
  element.style.marginTop = "10%";
  element.style.width = "100%";
  element.style.fontWeight = "bold";
};

let showAbout = element => {
  element.style.display = "block";
};

let hide = element => {
  element.style.display = "none";
};

//end of show and hide functions

navMenu.services.addEventListener("click", function() {
  console.log("this works");
  hide(elements.aboutUs);
  hide(elements.location);
  showServices(elements.servicesSection);

  console.log("this doesn't work");
});

navMenu.about.addEventListener("click", function() {
  hide(elements.servicesSection);
  showAbout(elements.aboutUs);
});

navMenu.location.addEventListener("click", function() {
  console.log("works");
  hide(elements.aboutUs);
  hide(elements.servicesSection);
  showAbout(elements.location);
});
/*
navMenu.services.addEventListener("click", function() {
  console.log("this works");
  // navMenu.services.style.backgroundColor = "rgba(255, 255, 231, 0.5)";
  document.body.style.height = "100%";
  document.body.style.width = "100%";
  document.body.style.border = "5px solid black";
  document.body.style.fill = "rgba(0,0,0,0.5)";

  //document.body.style.backgroundColor = "rgba(55, 125, 255, 0.5)";
  console.log("this does not work");
});
*/
window.onload = function() {
  elements.servicesSection.style.display = "none";
  elements.location.style.display = "none";
};
