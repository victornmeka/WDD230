function toggleMenu(){
    document.getElementById("nav-list").classList.toggle("open");
    document.getElementById("navigation-button").classList.toggle("open");
}

const switchToX = document.getElementById("navigation-button");
switchToX.onclick = toggleMenu;

const dateformat = new Intl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(new Date);
document.querySelector("#header-fulldate").innerHTML = dateformat;

const options = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-us', options)
const date = new Date(document.lastModified);
document.getElementById('date').textContent = date;