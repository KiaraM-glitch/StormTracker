var apiKey= "79bacef9311082ecf6542c737b74c55f";


        //   event.preventDefault();
  //btn function      


var userInput= "";

//funciton that runs the weather
function postWeather(){

//query urls for current weather
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=79bacef9311082ecf6542c737b74c55f" + userInput + apiKey;
//ajax call for currrent  weather
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
        
        var windShield = response.wind.speed;

       
        
        
       


        $("#weather-stats").append("<li>" + "City: " + name + "</li>");
        $("#weather-stats").append("<li>" + "Current Date:" + date + "</li>");
        $("#weather-stats").append("<li>" + "Temperature Fahrenheit: " + tempF + "</li>");
        $("#weather-stats").append("<li>" + "Temperature Kelvin: " + temp + "</li>");
        $("#weather-stats").append("<li>" + "Humidity: " + humidity + "</li>");
        $("#weather-stats").append("<li>" + "Wind Shield: " + windShield + "</li>");
        $("#weather-stats").append("<li>" + "UV Index " + uvIndex + "</li>");
        

//making ajax call for uv
    //     $.ajax({
    //         url: uvIndex,
    //         method: 'GET',

    //     }).then(function(request) {
            
    //         var date = request.date_iso;
            
    //         var uvIndex = request.value;
    //         var lng = response.coord.lon;

    //         var lat = response.coord.lat;
     
    //         var uvIndex = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=79bacef9311082ecf6542c737b74c55f" + lat + "&lon=" + lng + apiKey;
    //    //closes ajx call for uv
    //     })
        

    //close ajax call for current weather
        });


//ajax call for forecast
// var fiveDay =
//     "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=79bacef9311082ecf6542c737b74c55f" +
//     userInput +
//     "&appid=" +
//     apiKey;
//         $.ajax({
//             url: fiveDay,
//             method: 'GET',

//         }).then(function(forecast) {
            
            
            
//             for (var i = 0; i < forecast.list.length; i++) {
                
                
                

//                }
//              })
           }

           $("#searchBtn").on("click", function(event) {
            event.preventDefault;
        console.log("you click")
        var userInput = $("#user-input").val().trim();
                    console.log(userInput);
        //             localStorage.setItem("City:", userInput);
        // var getUserInput = localStorage.getItem("City:");
        // $("#city-data").append(getUserInput);
postWeather();
        })

         
       
    