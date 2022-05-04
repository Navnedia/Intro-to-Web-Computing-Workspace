randColorBG(); // Run on page load.

function randColorBG() {
    hexCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = hexCode;
}