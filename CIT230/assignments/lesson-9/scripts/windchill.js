var windTemp = windChill(13, 34);

document.getElementById("windTemp").innerHTML = windTemp;


function windChill(s, t) {
    var f = 35.74 + (0.6215 * 5) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    return f;
}


//var windchill = windTemp(get("franklin windspeed"), 27);
