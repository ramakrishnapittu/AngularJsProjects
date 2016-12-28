


fileApp.controller('fileCtrl', ['scope',
    function ($scope) {

        $scope.partialDownloadLink = '';
        $scope.filename = '';

        $scope.uploadFile = function () {
            $scope.processQueue();
        };

        $scope.reset = function () {
            $scope.resetDropzone();
        };
    }

]);