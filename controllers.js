weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
    $scope.city= cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
    
    $scope.submit = function(){
        $location.path('/forecast');
    }
        
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', '$filter', 'cityService', 'weatherService', function($scope, $routeParams, $filter, cityService, weatherService){
    $scope.city = cityService.city;
    
    $scope.forecastDays = $routeParams.days || '2';
    
    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.forecastDays )
        
    $scope.convertToFahrenheit = function (degK){
        return Math.round((degK * (9/5)) - 459.67);
    }
    $scope.convertToDate = function(ms){
        return new Date(ms * 1000);
    }


}]);
