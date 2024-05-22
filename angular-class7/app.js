var start = angular.module("routingApp" , ['ngRoute']);
start.config(function($routeProvider){
    $routeProvider.
    when("/about" , {
        templateUrl : "about.html"
    }).
    when("/trainer" , {
        templateUrl : "trainer.html"
    }).
    when("/pakages" , {
        templateUrl : "pakages.html"
    }).
    otherwise( {
        template: "<h1> page khali hai</h1>"
    })
})