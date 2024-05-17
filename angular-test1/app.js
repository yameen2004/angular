var app = angular.module('clothingApp', []);

app.controller('clothingCtrl', function($scope) {

    //  top selling products

    $scope.topSellingProducts = [
        {
            name: "Suits 3 Piece Slim",
            price: "12000 Pkr",
            image: "images/top-sell1.jpg",
            description: "Buy Wangyue Mens Suits 3 Piece Slim Fit Suits for Men Double Breasted Suit Men Business Wedding"
        },
        {
            name: "Mens Office Wear",
            price: "8000 Pkr",
            image: "images/top-sell2.webp",
            description: "Mens Office Wear - How To Style Office Dress For Men | Beyoung Blog"
        },
        {
            name: "Jeans",
            price: "6000 Pkr",
            image: "images/top-sell3.jpg",
            description: "Trending 15 Blue Jeans Matching Shirt Ideas for Men With Pics"
        }
    ];

    //  data for shirts
    $scope.shirtData = {
        polo: {
            name: "Polo Shirt",
            image: "images/polo.jpg",
            description: "Polo shirts are a knitted fabric form of shirt with a collar and placket with 2 or 3 buttons,"
        },
        printed: {
            name: "Printed Shirt",
            image: "images/printed.jpg",
            description: "T-shirt printing, otherwise known as screen printing, is a simple and inexpensive method of printing your own custom designs or logos onto a t-shirt."
        },
        "semi-formal": {
            name: "Semi-Formal Shirt",
            image: "images/semi formal.jpg",
            description: "For men seeking a versatile and polished look, semi-formal check shirts are the perfect choice."
        },
        formal: {
            name: "Formal Shirt",
            image: "images/formal.webp",
            description: "A formal shirt – otherwise known as the dress shirt – can be identified by its stiff collar, lustrous fabric, long tails and single or double cuffs."
        }
    };

    // data for pants
    $scope.pantData = {
        jeans: {
             name: "Polo Shirt",
            image: "images/jeans.jpg",
            description: "Jeans are a type of pants traditionally made from denim (a kind of cotton fabric). "
        },
        denim: {
             name: "Polo Shirt",
            image: "images/denim.jpg",
            description: "Today, men's jeans are offered in a variety of styles and fits such as loose fit, straight fit, or slim fit. In general,"
        },
        trouser: {
             name: "Polo Shirt",
            image: "images/trouser.webp",
            description: "Trousers are worn on the hips or waist and are often held up by buttons, elastic, a belt or suspenders (braces)."
        },
        "formal-office": {
             name: "Polo Shirt",
            image: "images/formal-office.jpg",
            description: "Formal trousers, also known as formal striped trousers or colloquially spongebag trousers,"
        }
    };

    // selected shirt and pant

    $scope.selectedShirt = "";
    $scope.selectedShirtData = null;

    $scope.selectedPant = "";
    $scope.selectedPantData = null;

    $scope.updateSelectedShirt = function() {
        $scope.selectedShirtData = $scope.shirtData[$scope.selectedShirt];
    };

    $scope.updateSelectedPant = function() {
        $scope.selectedPantData = $scope.pantData[$scope.selectedPant];
    };
});
