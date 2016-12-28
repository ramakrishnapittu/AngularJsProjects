//directive area
function dropzone() {
    
}

var fileAppDirectives = angular.module('fileAppDirectives', []);

            fileAppDirectives.directive('dropzone', function() {
                return {
                    restrict: 'C',
                    link: function(scope, element, attrs) {

                        var config = {
                            url: 'C:\\Users\\Dell\\Documents\\AngularJs\\AngularJsProjects\\GroceriesProject\\Uploads\\',
                            maxFilesize: 100, //MB
                            paramName: "uploadfile",
                            maxThumbnailFilesize: 10,
                            parallelUploads: 1,
                            autoProcessQueue: false
                        };

                        var eventHandlers = {
                            'addedfile': function(file) {
                                scope.file = file;
                                if (this.files[1]!=null) {
                                    this.removeFile(this.files[0]);
                                }
                                scope.$apply(function() {
                                    scope.fileAdded = true;
                                });
                            },

                            'success': function (file, response) {
                                console.log(response);
                            }

                        };

                        dropzone = new Dropzone(element[0], config);

                        angular.forEach(eventHandlers, function(handler, event) {
                            dropzone.on(event, handler);
                        });

                        scope.processDropzone = function() {
                            dropzone.processQueue();
                        };

                        scope.resetDropzone = function() {
                            dropzone.removeAllFiles();
                        }
                    }
                }
            });