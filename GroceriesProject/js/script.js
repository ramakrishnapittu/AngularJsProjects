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
        var blnDontInsert = false;
        angular.forEach(items, function (keyitem) {
            if (keyitem.name == item)
            { blnDontInsert = true; }
            else { console.log(keyitem.name); }
        });
        if (!blnDontInsert) {
            var newItem = { name: item, likes: 0, dislikes: 0 };
            items.push(newItem);
        }
    }
    $scope.RemoveItem = function (item) {
        items.splice(items.indexOf(item), 1);
    }
});