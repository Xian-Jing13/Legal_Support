// ==========================================
// LEGAL SUPPORT - MAIN JAVASCRIPT
// ==========================================


// ================================
// MOBILE NAVIGATION
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("show");
        });

    }

});


// ================================
// SCROLL TO TOP
// ================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

});