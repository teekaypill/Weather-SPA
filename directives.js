weatherApp.directive('weatherPanel', function(){
    return {
        restrict: 'AE',
        templateUrl: 'directives/weatherpanel.htm',
        replace: true,
        scope: {
            weatherObject: "=",
            weatherUnitFormat: "&",
            weatherDateFormat: "&",
            dateFormat: "@"
        },
        link: function(scope, elems, attrs){
            console.log("Linking");
        }
    };
});