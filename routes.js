weatherApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'parts/home.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'parts/forecast.htm',
        controller: 'forecastController'
    })
    
    .when('/forecast/:days', {
        templateUrl: 'parts/forecast.htm',
        controller: 'forecastController'
    });


});
