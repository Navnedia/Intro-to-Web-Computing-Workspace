randColorBG(); // Run on page load.

function randColorBG() {
    hexCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = hexCode;
    addClick()
}

function addClick() {
    var clicks = parseInt(localStorage.getItem("clicks"));
    if (isNaN(clicks)) {clicks = -1;}

    localStorage.setItem("clicks", ++clicks);
}