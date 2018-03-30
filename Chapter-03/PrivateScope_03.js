/*
* Module pattern enables us to create a private scope for our code inside a function
while providing controlled access to such a private scope through an interface. This
interface can be in the form of a returned singleton object.
* */

var mySingletonObj = function () {

    var name = "Sansa";
    var title = "Software Developer";

    return {
        name: "Tom",
        getOuterName: function(){
            return name;
        },
        getInnerName: function () {
            return this.name;
        },
        getTitle: function () {
            return title;
        }
    };

}();
console.log( mySingletonObj.name );
console.log( mySingletonObj.getInnerName() );
console.log( mySingletonObj.getOuterName());

mySingletonObj.name = "Alexander";
console.log("*********************************************");
console.log( mySingletonObj.name );
console.log(mySingletonObj.getOuterName());

/**
 *Remember, when we use the module pattern in JavaScript and return a singleton
 object from it (as an interface to the containing object/function), there are two
 contexts that are at play.
 * */