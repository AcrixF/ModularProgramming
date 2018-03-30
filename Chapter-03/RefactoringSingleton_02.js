/*
* In the preceding code, we have created an Immediately Invoked Function
Expression (IIFE) and have assigned its return value (which is a singleton object) to
the variable mySingletonObj.
* */

var mySingleton = ( function () {

    var name = "Sansa";
    var title = "Software Developer";

    return {
        getName : function () {
            return name;
        },
        getTitle: function () {
            return title;
        }
    };

})();

console.log( mySingleton.getName() );
console.log( mySingleton.getTitle() );
console.log( mySingleton.name );