
//Mobile navbar functionality

function navToggle() {
  const navbar = document.querySelector("[data-navbar]");
  const navToggler = document.querySelector("[data-nav-toggler]"); 
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const overlay = document.querySelector("[data-overlay]");
   
  navToggler.addEventListener("click" , (event) => {   
   event.preventDefault();
   navbar.classList.toggle("active"); 
   overlay.classList.toggle("active");
  })

  navLinks.forEach((link) => {
    link.addEventListener("click" , (event) => {
      event.preventDefault();
      navbar.classList.remove("active")
      overlay.classList.remove("active");
    })
  })

}

navToggle();

