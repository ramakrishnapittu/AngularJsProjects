///// <reference path="script.js" />
myApp.filter("CapitalizeFirstLetter",function(){
    return function(str){
        var tmpString = str.toLowerCase();
        tmpString = tmpString[0].toUpperCase()+tmpString.slice(1,tmpString.length);
        return tmpString;
    }
}
);