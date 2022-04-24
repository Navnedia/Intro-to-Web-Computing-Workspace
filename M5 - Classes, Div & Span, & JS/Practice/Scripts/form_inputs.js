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

function doMath() {
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var operator = document.getElementById("selMathOperation").value;
    var result;

    if (isNaN(num1)) {num1 = 0;}
    if (isNaN(num2)) {num2 = 0;}
    
    switch (operator) {
        case "+":
            result = num1 + num2;

            break;
        case "-":
            result = num1 - num2;

            break;
        case "*":
            result = num1 * num2;
        
            break;
        case "/":
            result = num1 / num2;

            break;
    }

    alert(num1 + " " + operator + " " + num2 + " = " + result);
}