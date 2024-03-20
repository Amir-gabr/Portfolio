//
//=========   menu icon nav-bar     ============//
let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".nav-bar");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle("active");
});
//=========   scroll active title section     ============//
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header  div  ul li  a ');
window.addEventListener("scroll",() => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".header div ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //=========   sticky  header     ============//
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
  //=========   remove menu when scroll     ============//
  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
});
//=========   scroll pragress   ============//
let scroller = document.querySelector("#scroller");
let height =  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.onscroll = () =>
{
  let scrolling = document.documentElement.scrollTop;
  scroller.style.width = `${(scrolling / height) * 100}%`
};
//=========   swiper  header     ============//
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
  //=========   dark mode     ============//
let darkMode = document.querySelector("#darkmode-icon");
darkMode.onclick = ()=>
{
  darkMode.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
}
  //=========   scroll revel    ============//
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  daly:200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img img,.services-container , .portfolio-box , .testimonial-wrapper ,.contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".about .about-img img", { origin: "right" });
ScrollReveal().reveal(".home-content h3,.home-content p,.about-content", {
  origin: "right",
});