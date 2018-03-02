
//Object constructor

var myObj = new Object();

myObj.value = "My first value";
myObj.method = function () {
    return this.value;
};

console.log( myObj.method() );

/**********************************************************************************************************************/

//Object Literal notation

var MyFirstObj = {
    myFirstValue :  2,
    mySecondValue : 5,

    addValues: function () {
        return this.myFirstValue + this.mySecondValue;
    }
};

console.log("Result<>: " + MyFirstObj.addValues() );

/**********************************************************************************************************************/

//Function as object constructor

function MyObjectDefinition() {
    var myFirstValue = 2;
    var mySecondValue = 5;

    this.addValues = function () {
        return myFirstValue + mySecondValue;
    };
}

var myFirstObj = new MyObjectDefinition();
console.log( "Result(): " + myFirstObj.addValues() );


/**********************************************************************************************************************/

//Function as static objects

function MyObjDefinitionStatic() {
    MyObjDefinitionStatic.myFirstValue = 2;
    MyObjDefinitionStatic.mySecondValue =  5;
}

MyObjDefinitionStatic.addValues = function () {
    return this.myFirstValue + this.mySecondValue;
};

MyObjDefinitionStatic();

console.log( "Result[]: " + MyObjDefinitionStatic.addValues() );

var anotherObj = new MyObjDefinitionStatic();

//console.log( "Result ¡!: " + anotherObj.addValues());


