randColorBG(false); // Run on page load without logging click.
document.onkeydown = KeyPress; // Set keydown function on page lood.

// Key combination handling:
function KeyPress(e) {
    if (e.keyCode == 67 && e.ctrlKey && e.altKey) { // If key combo is Ctrl + Alt + C, then ask if they want to rest counter.
        // Bring up confirmation box to confirm counter reset:
        if (confirm("You presses Ctrl + Alt + C: Do you want to reset the click counter?")) {
            clearCounter();
        }
    }
}

// Randomly Change Background color:
function randColorBG(logClick) {
    hexCode = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generate random hex.
    document.body.style.backgroundColor = hexCode; // Set background to hex.

    // Log click for counter:
    if (logClick) {addClick();} // This allows us to not log page reloads as clicks.
    updateCounter(); // Update the counter.
}

function addClick() {
    var clicks = parseInt(localStorage.getItem("clicks")); // Get current local storage counter value.
    if (isNaN(clicks)) {clicks = 0;} // If the local storage is empty (therefore NaN), then set the value to 0.
    localStorage.setItem("clicks", ++clicks); // Set the new click count to the old value + 1.
}

function clearCounter() {
    localStorage.setItem("clicks", 0);
    updateCounter();
}

function updateCounter() {
    var clicks = localStorage.getItem("clicks"); // Get value from local storage.
    document.getElementById("clickCounter").innerHTML = clicks; // Set innnerHTML counter to the retived value.
}