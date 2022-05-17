function getPayMeter() {
    var dayOfWeek = document.getElementById("selDayOfWeek").value;
    var resultsDiv = document.getElementById("payMeterResult");

    var outputStr;
    if (dayOfWeek == "Su") {
        // It's Sunday:
        resultsDiv.classList.remove("red-theme"); // Remove the opposite color (red) theme if present.
        resultsDiv.classList.add("green-theme"); // Add the green theme.

        outputStr = "<p>You DON'T need to pay the meter!</p>";
    } else {
        // Not Sunday:
        resultsDiv.classList.remove("green-theme"); // Remove the opposite color (green) theme if present.
        resultsDiv.classList.add("red-theme"); // Add the red theme.

        outputStr = "<p>You MUST need to pay the meter!</p>";
    }

    resultsDiv.innerHTML = outputStr;
}

function checkTeam() {
    var team = document.getElementById("selTeam").value;
    var output;

    if (team == "choose") {
        return;
    } else if (team == "NA") {
        output = "<p>Congrats, you picked the only correct answer!</p>";
    } else {
        output = "<p>Your favorite sports team is the Chicago " + team +"</p>";
    }

    document.getElementById("sportsTeamResult").innerHTML = output;
}