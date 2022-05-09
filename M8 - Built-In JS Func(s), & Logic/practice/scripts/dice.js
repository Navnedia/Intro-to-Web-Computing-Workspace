function roll2() {
    var sides = parseInt(document.getElementById("txtSides").value);
    var roll1 = parseInt((Math.random() * sides) + 1);
    var roll2 = parseInt((Math.random() * sides) + 1);
    var sum = roll1 + roll2;

    var output = "<p>Rolling two dice with " + sides + " sides returned " + roll1 
               + ", and " + roll2 + " for a sum of: " + sum + "</p>"
    document.getElementById("roll2Result").innerHTML = output;
}