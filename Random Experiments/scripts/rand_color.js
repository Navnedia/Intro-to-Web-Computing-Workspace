randColorBG(false); // Run on page load without logging click.

function randColorBG(logClick) {
    hexCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = hexCode;

    if (logClick) {addClick();} // This allows us to not log page reloads as clicks.
    updateCounter();
}

function addClick() {
    var clicks = parseInt(localStorage.getItem("clicks"));
    if (isNaN(clicks)) {clicks = 0;}
    localStorage.setItem("clicks", ++clicks);
}

function updateCounter() {
    var clicks = localStorage.getItem("clicks");
    document.getElementById("clickCounter").innerHTML = clicks;
}