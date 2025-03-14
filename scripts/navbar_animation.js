const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > lastScrollY && currentScrollY > 0) {
    header.style.display = 'none';
  } else {
    header.style.display = 'flex';
  }
  
  lastScrollY = currentScrollY;
});

function removeAOSLink() {
  const screenWidth = window.innerWidth;
  const aosLink = document.querySelector('link[href="https://unpkg.com/aos@2.3.1/dist/aos.css"]');

  if (screenWidth < 768) { // Remove AOS if screen width is less than 768px
    if (aosLink) {
      aosLink.parentNode.removeChild(aosLink);
    }
  }
}

// Run when the page loads
removeAOSLink();

// Run when the window resizes
window.addEventListener("resize", removeAOSLink);