function dollarsToPesos() {
    var usDollars = 20;
    var mexicanPesos = usDollars * 20.01;

    alert("$" + usDollars + " USD in Mexican pesos is: ₱" + mexicanPesos.toFixed(2));
}

function usDollarsToCanadian() {
    var usDollars = 50;
    var canadianDollars = usDollars * 1.25;

    alert("$" + usDollars + " USD in Canadian dollars is: $" + canadianDollars.toFixed(2) + " CAD");
}

function ouncesToPounds() {
    var ounces = 64;
    var pounds = ounces / 16;

    alert(ounces + " ounces is: " + pounds + " pounds");
}