window.onscroll = function() {
    removeStickyFunction();
};

function removeStickyFunction() {
    const header = document.getElementById('header');
    const scrollThreshold = 300;
    
    if (window.innerWidth < 541) {
        if (window.scrollY > scrollThreshold) {
            header.classList.remove('visible');
            header.style.position = 'static';
        } else {
            header.classList.add('visible');
            header.style.position = 'sticky';
        }
    }
}

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
