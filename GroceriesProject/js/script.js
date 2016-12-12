var myApp = angular.module("myApp",[]);

myApp.controller("myController",function ($scope){
    var items = [{name:"CHEESE",likes:0,dislikes:0},
                    {name:"EGG",likes:0,dislikes:0},
                    {name:"ICE CREAM",likes:0,dislikes:0},
                    {name:"POTATO",likes:0,dislikes:0},
                    {name:"BREAD",likes:0,dislikes:0}];
    $scope.items = items;

    $scope.IncrementLIkes = function (item){
        item.likes++;
    }
    $scope.IncrementDisLikes = function (item){
        item.dislikes++;
    }
});