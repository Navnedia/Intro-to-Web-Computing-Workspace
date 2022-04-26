function ozToGrams() {
    var ounces = document.getElementById("txtOunces").value;
    var grams = ounces * 28.35;

    document.getElementById("results").innerHTML = "<p>Result in Grams: "+ grams +"</p>";
}