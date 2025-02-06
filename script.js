let lastScrollTop = 0;
const header = document.getElementById("header");
 
function removeStickyFunction() {
  if (!header) return;
 
  let scrollTop = window.scrollY;
  let isSmallScreen = window.innerWidth < 541;
 
  if (scrollTop > 500 && isSmallScreen && scrollTop > lastScrollTop) {
    header.style.transform = "translateY(-100%)";
    header.style.transition = "transform 0.3s ease";
  }
 
  if (scrollTop < lastScrollTop - 50) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.transform = "translateY(0%)";
  }
 
  lastScrollTop = scrollTop;
}
 
 
window.addEventListener("scroll", removeStickyFunction);
 
 

// document.addEventListener("DOMContentLoaded", () => {
//     const animatedElements = document.querySelectorAll(".animated");

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("inview");
//             }
//         });
//     }, { threshold: 0.001 });

//     animatedElements.forEach(el => observer.observe(el));
// });
