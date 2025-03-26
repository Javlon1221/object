document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu");
    const navbarUl = document.querySelector(".navbar_ul");

    menuButton.addEventListener("click", function () {
        navbarUl.style.display = navbarUl.style.display === "flex" ? "none" : "flex";
    });
});
