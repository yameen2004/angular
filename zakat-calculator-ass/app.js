angular.module("myApp", []).controller("ctrl_one", function ($scope) {
    $scope.calculateZakat = function () {
        // Gold calculation
        if ($scope.gold >= 7) {
            $scope.goldPrice = $scope.gold * 240500;
            $scope.goldZakat = ($scope.goldPrice * 2.5) / 100;
        } else {
            $scope.goldPrice = 0;
            $scope.goldZakat = 0;
        }

        // Silver calculation
        if ($scope.silver >= 52) {
            $scope.silverPrice = $scope.silver * 3270;
            $scope.silverZakat = ($scope.silverPrice * 2.5) / 100;
        } else {
            $scope.silverPrice = 0;
            $scope.silverZakat = 0;
        }

        // Assets calculation
        if ($scope.assets >= 171675) {
            $scope.assetsZakat = ($scope.assets * 2.5) / 100;
        } else {
            $scope.assetsZakat = 0;
        }

        // Total Zakat calculation
        $scope.totalZakat = $scope.goldZakat + $scope.silverZakat + $scope.assetsZakat;
    };
});