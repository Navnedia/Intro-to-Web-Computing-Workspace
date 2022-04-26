function getCurvedSurface() {
    var radius = document.getElementById("numRadius").valueAsNumber;
    var height = document.getElementById("numHeight").valueAsNumber;

    var curvedSurfaceArea = 2 * Math.PI * radius * height;
    document.getElementById("calculationResults").innerHTML = "<p>The Curved Surface Area is: " + curvedSurfaceArea +"</p>"; 
}

function getTotalSurface() {
    var radius = document.getElementById("numRadius").valueAsNumber;
    var height = document.getElementById("numHeight").valueAsNumber;
    
    var totalSurfaceArea = 2 * Math.PI * radius * (radius + height);
    document.getElementById("calculationResults").innerHTML = "<p>The Total Surface Area is: "+ totalSurfaceArea +"</p>";
}