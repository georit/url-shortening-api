/* *****variables***** */
const mobileNavToggle = document.getElementById("icon-mobile-nav-toggle");
const mobileNav = document.getElementById("nav-links");

/* *****functions***** */
function displayMobileNav() {
  // change icon to times
  mobileNavToggle.className = "far fa-times icon-mobile-nav-toggle";
  // show mobile nav
  mobileNav.classList.add("active");
}

function hideMobileNav() {
  // change icon to bars
  mobileNavToggle.className = "far fa-bars icon-mobile-nav-toggle";
  // hide mobile nav
  mobileNav.classList.remove("active");
}

/* *****event listeners***** */
// show/hide mobile navigation
mobileNavToggle.addEventListener("click", () => {
  if (mobileNavToggle.classList.contains("fa-bars")) {
    displayMobileNav();
  } else {
    hideMobileNav();
  }
});

// simulate nav link functionality
mobileNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    hideMobileNav();
  }
});
