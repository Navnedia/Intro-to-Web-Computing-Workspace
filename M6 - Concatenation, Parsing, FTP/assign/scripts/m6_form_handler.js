function solveMiniEquation() {
    var num1 = parseFloat(document.getElementById("txtFirstNum").value);
    var num2 = parseFloat(document.getElementById("txtSecondNum").value);
    var num3 = parseFloat(document.getElementById("txtThirdNum").value);
    var answer = (num1 + num2) * num3;

    var output = "<p>The sum of " + num1 + " and " + num2 
               + ", multiplied by " + num3 + " is: " + answer +"</p>"
    document.getElementById("calculationResult").innerHTML = output;
}

function summarizeUser() {
    var name = document.getElementById("txtName").value;
    var favColor = document.getElementById("selFavColor").value;

    var output = "<p>Your name is: " + name + " and your favorite color is: " + favColor +".</p>";
    document.getElementById("userInfo").innerHTML = output;
}