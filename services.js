weatherApp.service('cityService', function(){

    this.city = '';

});

weatherApp.service('weatherService', ['$resource', function($resource){

    this.getWeather = function(city, forecastDays){
        
           var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK"}, {get:                   {method: "JSONP"}});
    
            return weatherAPI.get({q: city, cnt: forecastDays, appid: '6c2d29ad734bedabf6e98e2dbcf9989d'});

    }

}]);