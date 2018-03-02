var name = "The Window Global";

/**
 *   The innermost function is an anonymous function inside another anonymous
 *   function, the context of the innermost function is different from the object that is
 *   hosting it.Therefore, 'this' in this context is referencing the global context.
 **/
var myOwnObject = {
    name :"My own Object",
    getName :function () {
            return function () {
                return this.name;
            };
    }
};

console.log( myOwnObject.getName()());


/**
 *  In order to preserve the context of myOwnObject, we can create a context in the first
 *  inner function and let the innermost function access this context.
 **/

var myOwnObjectTwo = {
    name : "My Own Object",
    getName : function () {
        var that = this;
        return function () {
            return that.name;
        }
    }
};

console.log(myOwnObjectTwo.getName()() );