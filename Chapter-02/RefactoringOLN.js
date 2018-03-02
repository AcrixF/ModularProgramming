function CreatePerson( personData ) {
    var person = {}; //Object literal

    person.name = personData.Name;
    person.job = personData.Job;

    return person;
}

var personData = {
    Name: "Tom",
    Job: "Software Developer"
};


var firstPerson = new CreatePerson( personData );

console.log( firstPerson.name);