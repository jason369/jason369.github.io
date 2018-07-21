var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=55333,us&appid=799ce3b0d9d3990693365332738da1a8&units=imperial', true);

weatherObject.send();

weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log('weatherInfo:');
    console.log(weatherInfo);

    document.getElementById('max').innerHTML = weatherInfo.main.temp_max;

    document.getElementById('min').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('tempera').innerHTML = weatherInfo.main.temp;
    document.getElementById('windTemp').innerHTML = weatherInfo.wind.speed;
    document.getElementById('basic').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('descrip').innerHTML = weatherInfo.weather[0].description;



    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;





    var forecast = new XMLHttpRequest();
    forecast.responseType = 'json';
    forecast.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?zip=55333,us&appid=799ce3b0d9d3990693365332738da1a8&units=imperial', true);
    forecast.send();

    forecast.onload = function () {
        var forecastdata = forecast.response;
        console.log(forecastdata);

        var mytbody = document.querySelector('tbody');
        var mytr = document.createElement('tr');

        for (i = 0; i < 10; i++) //forecastdata.list.length; i++) 
        {
            var mytd = document.createElement('td');
            mytd.innerHTML = forecastdata.list[i].main.temp + '&deg;F'
            mytr.appendChild(mytd);

            mytbody.appendChild(mytr);
        }
        setWindChill();
    }

}
