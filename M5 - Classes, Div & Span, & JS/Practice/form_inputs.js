function alertColor() {
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;

    var userFavColor = document.getElementById("selFavColor").value;

    alert("Hi " + firstName + " " + lastName + "! My name is Aiden V.");

    if (userFavColor === "blue") {
        alert("We both love the color blue!");
    } else {
        alert("I see you like the color " + userFavColor + ". My favorite color is blue!");
    }
}