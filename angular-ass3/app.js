var app = angular.module('employeeApp', []);

app.controller('EmployeeController', ['$scope', function($scope) {
    $scope.employees = [
        {
            name: "Yameen",
            department: "HR",
            designation: "Manager",
            salary: 950000,
            gender: "Male",
            age: 20
        },
        {
            name: "Ahmed Raza",
            department: "IT",
            designation: "Developer",
            salary: 90000,
            gender: "Male",
            age: 19
        },
        {
            name: "Raza",
            department: "Finance",
            designation: "Analyst",
            salary: 60000,
            gender: "Male",
            age: 28
        },
        {
            name: "Hafsa",
            department: "Marketing",
            designation: "Executive",
            salary: 65000,
            gender: "Female",
            age: 20
        },
        {
            name: "Shazia",
            department: "Sales",
            designation: "Salesperson",
            salary: 55000,
            gender: "Female",
            age: 30
        },
        {
            name: "Adeel",
            department: "Legal",
            designation: "Lawyer",
            salary: 40000,
            gender: "Male",
            age: 35
        },
        {
            name: "Saqib",
            department: "Operations",
            designation: "Coordinator",
            salary: 58000,
            gender: "Male",
            age: 33
        }
    ];
}]);
