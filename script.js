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
const section__1 = document.querySelector("#section--1");
const navLinks = document.querySelector(".nav__links");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
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
  section__1.scrollIntoView({ behavior: "smooth" });
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
