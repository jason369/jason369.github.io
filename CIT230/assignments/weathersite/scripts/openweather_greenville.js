var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=27834,us&appid=799ce3b0d9d3990693365332738da1a8&units=imperial', true);

weatherObject.send();

weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log('weatherInfo:');
    console.log(weatherInfo);

    document.getElementById('max1').innerHTML = weatherInfo.main.temp_max;

    document.getElementById('min1').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('tempera1').innerHTML = weatherInfo.main.temp;
    document.getElementById('windTemp1').innerHTML = weatherInfo.wind.speed;
    document.getElementById('basic1').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('descrip1').innerHTML = weatherInfo.weather[0].description;



    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;



}
