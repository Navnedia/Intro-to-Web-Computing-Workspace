randColorBG(false); // Run on page load without logging click.
document.onkeydown = KeyPress; // Set keydown function on page lood.

function KeyPress(e) {
    if (e.keyCode == 67 && e.ctrlKey && e.altKey) { // If keycombo is Ctrl + Alt + C, then ask if they want to rest counter.
        // Bring up confirmation box to confirm counter reset:
        if (confirm("You presses Ctrl + Alt + C: Do you want to reset the click counter?")) {
            clearCounter();
        }
    }
}

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

function clearCounter() {
    localStorage.setItem("clicks", 0);
    updateCounter();
}