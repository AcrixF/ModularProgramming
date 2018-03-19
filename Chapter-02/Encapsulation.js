
/*
*   As you can see, the thirdValue variable has been defined within the for loop block,
    but we can access it after the end of the for loop, since in JavaScript the scope of
    variables is bound to the scope of the container function and not the container block.
**/
function simpleFunction() {
    var firstValue = 1;
    var secondValue = 2;

    this.instanceValue = 100;

    for( var i = 0; i < 50; i++){
        var thirdValue = firstValue + secondValue + i;
    }
    console.log("The final value for the thirdValue is: " + thirdValue);
}

simpleFunction();

/*
*As you know, when we define a variable with the this keyword, it is copied to the
instances of the object and hence testObj has a copy of it and we can access it from
the outside code.
**/

var testOjb = new simpleFunction();
console.log( testOjb.firstValue);
console.log( testOjb.instanceValue);



/*
* The code above shows an immediately invoked anonymous function (also known
as IIFE) inside our simpleFunc function, and even though this function has
access to the execution context of its containing function, the containing function
( simpleFunc) cannot access the variables and methods inside this inner function.
In fact, we have created a private namespace inside our simpleFunc that is
completely hidden from the outside world.
* */

function simpleFunc() {
    var firstValue = 1;
    (function () {
        var secondValue = 2;
        this.instanceValue = 100;
        console.log( firstValue );
    })();
    //Error
    //console.log( secondValue );
}
//-->Error
//simpleFunc();

var testObj1 = new simpleFunc();

console.log("Reading instance value: " + testObj1.instanceValue);

/**
 *As you can see, while JavaScript may not have the same form of encapsulation
 as classical object oriented languages, we can still create private scopes, and
 define variables and methods inside that scope that are not accessible from
 the outside code.
 **/



function  simpleFunPublic() {

    var privateValue = 1;
    this.readPrivateValue = function () {
        return privateValue;
    };
}

var testReadPrivateValue = new simpleFunPublic();
console.log( "Reading a private variable: " + testReadPrivateValue.readPrivateValue());

/*
* In this constructor, we have created a private member privateValue that is not
accessible from the outside world. However, we have created a public method this.
readPrivateValue, which can be accessed by the external code and can access the
value of this private member.
* */