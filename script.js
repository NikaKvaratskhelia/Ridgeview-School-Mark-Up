// header dissapear

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

// burger menu

document.getElementById('burger-menu').addEventListener('click', function() {
  document.getElementById('burger-menu-list').style.display = 'flex';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('burger-menu-list')) {
      document.getElementById('burger-menu-list').style.display = 'none';
  }
});


document.getElementById('closeBurger-menu').addEventListener('click', function() {
  document.getElementById('burger-menu-list').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('burger-menu-list')) {
      document.getElementById('burger-menu-list').style.display = 'flex';
  }
});
