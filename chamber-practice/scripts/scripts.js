function toggleMenu() {
    document.getElementsByClassName("navigation-bar").classList.toggle("open");
    document.getElementById("nav-button").classList.toggle("open");
}

const x = document.getElementById("nav-button");
x.onclick = toggleMenu;