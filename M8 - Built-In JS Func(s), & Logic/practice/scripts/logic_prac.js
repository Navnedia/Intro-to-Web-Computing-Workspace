function getPayMeter() {
    var day = document.getElementById("selDay").value;

    var output;
    if (day == "Sunday") {
        output = "<p>No need to pay the meter!</p>";
    } else {
        output = "<p>Beter get some quarters!</p>";
    }

    document.getElementById("meterPayResult").innerHTML = output;
}

function canVote() {
    var age = parseFloat(document.getElementById("txtAge").value);
    var registered = document.getElementById("chkRegistered");
    var citizen = document.getElementById("chkCitizen");
    var notFelon = document.getElementById("chkNotFelon");

    var output;
    if (age >= 18 && registered.checked && citizen.checked && notFelon.checked) {
        output = "<p>You may vote</p>";
    } else {
        output = "<p>You may not vote</p>";
    }

    document.getElementById("canVoteResult").innerHTML = output;
}