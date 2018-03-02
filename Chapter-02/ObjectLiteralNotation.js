//Object Factory Pattern


var firstPerson = CreatePerson( "Tom", "Software Developer" );

function CreatePerson( personName, personJob ) {
    var person = new Object();

    person.name = personName;
    person.job = personJob;

    return person;
}

console.log( firstPerson.name );

//This throw a error wee can not set a property to the object before the object definition.
//Tom.age = 36;

var Tom = {
   name : "Tom"
};

Tom.job = "Software Developer";

console.log( Tom.job );
console.log( Tom.name );