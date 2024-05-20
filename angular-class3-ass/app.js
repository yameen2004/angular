var app = angular.module('calculateApp', []);

app.controller('CalculatorController', function($scope) {
    $scope.calculate = function() {
        if ($scope.english < 100 && $scope.urdu < 100 && $scope.math < 100) {
            $scope.error = "";
        } else {
            $scope.bgColor = "rgb(214, 45, 45)";
            $scope.color = "white";
            $scope.error = "Marks can't be entered greater than 100";
        }

        // Calculate total marks and percentage
        $scope.totalMarks = ($scope.english || 0) + ($scope.urdu || 0) + ($scope.math || 0);
        $scope.percentage = (($scope.totalMarks * 100) / 300).toFixed(2);

        // Grade
        if ($scope.percentage >= 90) {
            $scope.rank = "A++";
            $scope.bgColor = "green";
            $scope.color = "white";
        } else if ($scope.percentage >= 80) {
            $scope.rank = "A+";
            $scope.bgColor = "blue";
            $scope.color = "white";
        } else if ($scope.percentage >= 70) {
            $scope.rank = "A";
            $scope.bgColor = "yellow";
            $scope.color = "black";
        } else if ($scope.percentage >= 60) {
            $scope.rank = "B";
            $scope.bgColor = "orange";
            $scope.color = "black";
        } else if ($scope.percentage >= 50) {
            $scope.rank = "C";
            $scope.bgColor = "gray";
            $scope.color = "white";
        } else {
            $scope.rank = "F";
            $scope.bgColor = "red";
            $scope.color = "white";
        }
    };
});
