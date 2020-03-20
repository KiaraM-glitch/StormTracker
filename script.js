$(document).ready(function() {


          event.preventDefault();
        
$("#searchBtn").on("click", function(event) {
    event.preventDefault;

var userInput = $("#user-input").val();
            console.log(userInput);
            localStorage.setItem("City:", userInput);
var getUserInput = localStorage.getItem("City:");
$("#city-data").append(getUserInput);


var api = "79bacef9311082ecf6542c737b74c55f";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + apiKey;


    $.ajax({
        url: queryURL,
        method: "GET" 

    }).then(function(response) {
        console.log(response);
        console.log(queryURL);

        var name = response.name;

        var temp = (response.main.temp);
       //convert to Farenheight
        var tempF = (response.main.temp - 273.15) * 1.80 + 32; 

        var humidity = response.main.humidity
        
        var windSpeed = response.wind.speed;

        
        var uvIndex = "http://api.openweathermap.org/data/2.5/uvi?&lat="  + "&lon=" + apiKey;
//making ajax call to GET
        $.ajax({
            url: uvIndex,
            method: 'GET',

        }).then(function(request) {
            
            var date = request.date_iso;
            
            var uvIndex = request.value;
     

        $("#weather-stats").append("<li>" + "City: " + name + "</li>");
        $("#weather-stats").append("<li>" + "Current Date:" + date + "</li>");
        $("#weather-stats").append("<li>" + "Temperature Fahrenheit: " + tempF + "</li>");
        $("#weather-stats").append("<li>" + "Temperature Kelvin: " + temp + "</li>");
        $("#weather-stats").append("<li>" + "Humidity: " + humidity + "</li>");
        $("#weather-stats").append("<li>" + "Wind Speed: " + windSpeed + "</li>");
        $("#weather-stats").append("<li>" + "UV Index " + uvIndex + "</li>");

        

        var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?lat="  + apiKey;



        

        $.ajax({
            url: fiveDayForecast,
            method: 'GET',

        }).then(function(forecast) {
            console.log(forecast);
            
            console.log("temp: " + forecast.list[0].main.temp)
            console.log("temp min: " + forecast.list[0].main.temp_min)
            console.log("temp max: " + forecast.list[0].main.temp_max)
         
            for (var i = 0; i < forecast.list.length; i++) {
                var timeOfDay = forecast.list[i].dt_txt.substring(10);
                
                console.log(timeOfDay);
                console.log("Current temp:" + forecast.list[i].main.temp)
                console.log("Min temp" + forecast.list[i].main.temp_min)
                console.log("Max temp" + forecast.list[i].main.temp_max)
                var minTemp = forecast.list[i].main.temp.temp_min;
                var maxTemp = forecast.list[i].main.temp.temp_max;

                var forecastMin = minTemp.map(function (temp) {
                    return forecastMin.list[i].main.temp_min === "Min Temp";
                    
               
                }); 
                console.log(forecastMin);
                var forecastMax = forecast.filter(function (temp) {
                    return temp.list[i].main.temp_max === "Max Temp";
                } )
                
                console.log(forecastMax);
                var midday = (forecast.dates.indexOf("12:00:00") > -1);
                if (timeOfDay === "12:00:00") {
                    ;
                }
                console.log(midday);
                if (i === 5) {
                    break;
                } 
               }
             })
           })
         });
       });
      
   })

 
 
      
// //}