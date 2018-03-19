
/*
    When we call this method one more time, the value of privateValue will change to
    20. This is because after the first call to publicFunc the value of privateValue has
    been preserved (thanks to the created Closure).
* */

function myClosedObject() {
    var privateValue = 5;

    function privateFunction() {
        privateValue *= 2;
        return privateValue;
    }

    this.publicFunction = function () {
        return privateFunction()
    }
}

var firstObj = new myClosedObject();

console.log( firstObj.publicFunction() );
console.log( firstObj.publicFunction() );
console.log( firstObj.publicFunction() );
console.log( firstObj.publicFunction() );