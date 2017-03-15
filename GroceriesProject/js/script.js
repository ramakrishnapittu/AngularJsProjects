var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope) {
    var items = [{ name: "C", likes: 0, dislikes: 0 },
    { name: "JAVA", likes: 0, dislikes: 0 },
    { name: "C#", likes: 0, dislikes: 0 },
    { name: "PHP", likes: 0, dislikes: 0 },
    { name: "HTML", likes: 0, dislikes: 0 }];

    $scope.items = items;

    $scope.IncrementLIkes = function (item) {
        item.likes++;
    }
    $scope.IncrementDisLikes = function (item) {
        item.dislikes++;
    }
    $scope.InsertItem = function (item) {
        item = item.toUpperCase();
        if (!DuplicatePresent(item)) {
            var newItem = { name: item, likes: 0, dislikes: 0 };
            items.push(newItem);
        }
        //Uncomment this else if you want to write message to the user when entered tech is already there.
        /*else{
            $scope.error = "Technology already present in list";
            setTimeout(function() {
                $scope.error = "";
                console.log("error : "+$scope.error);
            },3000);
        }*/
    }
    $scope.RemoveItem = function (item) {
        items.splice(items.indexOf(item), 1);
    }
    $scope.EditItem = function (item) {

    }
    function DuplicatePresent(item) {
        var blnDontInsert = false;
        angular.forEach(items, function (keyitem) {
            if (keyitem.name == item) blnDontInsert = true;
        });
        return blnDontInsert;
    }
});

myApp.controller("EmployeesController", function ($scope) {
    var employees = [{ name: "RK", dob: new Date(Date.now()), gender: "male", salary: 25000 },
    { name: "Leela", dob: new Date(Date.now()), gender: "female", salary: 25000 },
    { name: "Satti", dob: new Date(Date.now()), gender: "male", salary: 30000 },
    { name: "Rama", dob: new Date(Date.now()), gender: "female", salary: 27000 },
    { name: "Madhu", dob: new Date(Date.now()), gender: "male", salary: 29000 },];
    $scope.employees = employees;

    $scope.limitNumber = 5;

    $scope.sortColumn = "name";
    $scope.descend = "+";

    $scope.employeeView = "employees.html";
});

myApp.service("random", function () {
    var num = Math.ceil(Math.random() * 10);
    this.generateRandom = function () {
        return num;
    }
});

myApp.factory("randomObj", function () {
    var randomObject = {};
    var num = Math.ceil(Math.random() * 10);
    randomObject.generateRandom = function () {
        return num;
    }
    return randomObject;
});

myApp.provider("randomProvider", function () {
    var num = Math.ceil(Math.random() * 10);
    return {
        $get: function () {
            return {
                number: num
            }
        }
    };
});

myApp.controller("serviceController", function ($scope, random, randomObj, randomProvider) {
    $scope.GenerateRandomNumber = function () {
        $scope.RandomNumber = random.generateRandom();
    };
    $scope.GenerateRandomNumberByFactory = function () {
        $scope.RandomNumberTwo = randomObj.generateRandom();
    };
    $scope.GenerateRandomNumberByProvider = function () {
        $scope.RandomNumberThree = randomProvider.number;
    };
});
