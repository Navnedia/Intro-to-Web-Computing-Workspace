function solveMiniEquation() {
    var num1 = parseFloat(document.getElementById("txtFirstNum").value);
    var num2 = parseFloat(document.getElementById("txtSecondNum").value);
    var num3 = parseFloat(document.getElementById("txtThirdNum").value);
    var answer = (num1 + num2) * num3;

    var output = "<p>The sum of " + num1 + " and " + num2 + 
                 ", multiplied by " + num3 + " is: " + answer +"</p>"
    document.getElementById().innerHTML = output;
}

function summarizeUser() {

}