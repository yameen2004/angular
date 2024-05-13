var app = angular.module('circleApp', []);
        app.controller('circleCtrl', function($scope) {
            $scope.calculateArea = function() {
                return 3.14 * $scope.radius * $scope.radius;
            };

            $scope.calculateDiameter = function() {
                return 2 * $scope.radius;
            };

            $scope.calculateCircumference = function() {
                return 2 * 3.14 * $scope.radius;
            };

            $scope.calculateSurfaceArea = function() {
                return 4 * 3.14 * $scope.radius * $scope.radius;
            };
        });