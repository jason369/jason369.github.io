var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    console.log(request.response);

    //franklin
    var town = request.response.towns[0].name;
    console.log(town);
    document.getElementById("name0").innerHTML = town;

    var motto = request.response.towns[0].motto;
    document.getElementById("motto0").innerHTML = motto;



    var yearFounded = request.response.towns[0].yearFounded;

    document.getElementById("yf0").innerHTML = yearFounded;



    var currentPopulation = request.response.towns[0].currentPopulation;

    document.getElementById("cp0").innerHTML = currentPopulation;

    var averageRainfall = request.response.towns[0].averageRainfall;

    document.getElementById("ar0").innerHTML = averageRainfall;




    //Greenville

    var town1 = request.response.towns[1].name;
    console.log(town);
    document.getElementById("name1").innerHTML = town1;

    var motto1 = request.response.towns[1].motto;
    document.getElementById("motto1").innerHTML = motto1;



    var yearFounded1 = request.response.towns[1].yearFounded;

    document.getElementById("yf1").innerHTML = yearFounded1;



    var currentPopulation1 = request.response.towns[1].currentPopulation;

    document.getElementById("cp1").innerHTML = currentPopulation1;

    var averageRainfall1 = request.response.towns[1].averageRainfall;

    document.getElementById("ar1").innerHTML = averageRainfall1;








    //Springfield



    var town2 = request.response.towns[3].name;
    console.log(town);
    document.getElementById("name2").innerHTML = town2;

    var motto2 = request.response.towns[3].motto;
    document.getElementById("motto2").innerHTML = motto2;



    var yearFounded2 = request.response.towns[3].yearFounded;

    document.getElementById("yf2").innerHTML = yearFounded2;



    var currentPopulation2 = request.response.towns[3].currentPopulation;

    document.getElementById("cp2").innerHTML = currentPopulation2;

    var averageRainfall2 = request.response.towns[3].averageRainfall;

    document.getElementById("ar2").innerHTML = averageRainfall2;

}
