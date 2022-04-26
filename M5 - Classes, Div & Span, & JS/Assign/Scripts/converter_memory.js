function ozToGrams() {
    var ounces = document.getElementById("txtOunces").value;
    var grams = ounces * 28.35;

    document.getElementById("conversionResults").innerHTML = "<p>Result in Grams: "+ grams +"</p>";
}