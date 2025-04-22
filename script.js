"use strict";
const body = document.querySelector("body");
const btnLogin = document.querySelector(".btn__login");
const modelForm = document.querySelector(".model__form");
const overlay = document.querySelector(".overlay");
const svgClos = document.querySelector(".svg__clos");
const WindowTapeLinksResponsive = document.querySelector(
  ".Window--Tape--Links--Responsive"
);
const svgOpenWindowTapeLinks = document.querySelector(
  ".svg--open--Window--Tape--Links"
);
const svgClosWindowTapeLinks = document.querySelector(
  ".svg--clos--Window--Tape--Links"
);
const svgTopBott = document.querySelector(".svg__top--bott");
const contentHeader = document.querySelector(".content__header");
const Section1NavigationLink = document.querySelector(
  ".Section1_navigation_link"
);
const sectio1 = document.querySelector("#section--1");
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelector(".nav__links");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const cart_1 = document.querySelector(".cart_1");
const cart_2 = document.querySelector(".cart_2");
const cart_3 = document.querySelector(".cart_3");
const box_carts_section1 = document.querySelector(".box_carts_section1");
const boxCartDoctor = document.querySelector(".box_cart_Doctor");
const cartDoctor1 = document.querySelector(".cart_Doctor--1");
const cartDoctor2 = document.querySelector(".cart_Doctor--2");
const cartDoctor3 = document.querySelector(".cart_Doctor--3");
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/// Form Window JavaScript Codes:
const ClosModel = function () {
  modelForm.classList.add("display__none");
  overlay.classList.add("display__none");
  WindowTapeLinksResponsive.classList.add("clos--Window--Tape--Links");
  svgTopBott.classList.add("transform--rotate");
};
btnLogin.addEventListener("click", function (e) {
  modelForm.classList.remove("display__none");
  overlay.classList.remove("display__none");
});
svgClos.addEventListener("click", ClosModel);
overlay.addEventListener("click", ClosModel);
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////// Links bar JavaScript codes:
svgOpenWindowTapeLinks.addEventListener("click", function (e) {
  WindowTapeLinksResponsive.classList.remove("clos--Window--Tape--Links");
  svgTopBott.classList.remove("transform--rotate");
  overlay.classList.remove("display__none");
});
svgClosWindowTapeLinks.addEventListener("click", function (e) {
  WindowTapeLinksResponsive.classList.add("clos--Window--Tape--Links");
  svgTopBott.classList.add("transform--rotate");
  overlay.classList.add("display__none");
});
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
///// JavaScript code for displaying website header content:
window.addEventListener("load", function (e) {
  contentHeader.classList.remove("transform--opacity");
});
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
///// Section 1 navigation link:
Section1NavigationLink.addEventListener("click", function (e) {
  e.preventDefault();
  sectio1.scrollIntoView({ behavior: "smooth" });
});
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
/////// Smooth scrolling of sections nav link:
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target.classList.contains("nav__link__home")) {
    const idHome = e.target.getAttribute("href");
    document.querySelector(idHome).scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
/////Smooth scrolling of sections from the links window:
WindowTapeLinksResponsive.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("Window--Tape--Link--home")) {
    const idHomeWindowTape = e.target.getAttribute("href");
    document
      .querySelector(idHomeWindowTape)
      .scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.classList.contains("link__Window--Tape--Links")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
const functionInterSection = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
const intersectionNavLink = new IntersectionObserver(functionInterSection, {
  root: null,
  threshold: 0,
});
intersectionNavLink.observe(header);
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
const functionInterSection1 = function (entries, observe) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  cart_1.classList.add("transform__translateY-0");
  setTimeout(() => {
    cart_2.classList.add("transform__translateY-0");
  }, 800);
  setTimeout(() => {
    cart_3.classList.add("transform__translateY-0");
  }, 1200);
};
const intersectionSection1 = new IntersectionObserver(functionInterSection1, {
  root: null,
  threshold: 0.5,
});
intersectionSection1.observe(box_carts_section1);
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
const functionSections = function (entries, observe) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.add("transform__translateY-0");
  observe.unobserve(entry.target);
};
const newIntersectionObserverSections = new IntersectionObserver(
  functionSections,
  {
    root: null,
    threshold: 0.15,
  }
);
sections.forEach((section) => {
  newIntersectionObserverSections.observe(section);
});
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
const IntersectionObserverboxCartDoctor = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  cartDoctor1.classList.add("transform__translateY-0");
  setTimeout(() => {
    cartDoctor2.classList.add("transform__translateY-0");
  }, 800);
  setTimeout(() => {
    cartDoctor3.classList.add("transform__translateY-0");
  }, 1200);
};
const intersectionboxCartDoctor = new IntersectionObserver(
  IntersectionObserverboxCartDoctor,
  {
    root: null,
    threshold: 0.3,
  }
);
intersectionboxCartDoctor.observe(boxCartDoctor);
