/**
 *
 * */
function CreatePerson ( personData ) {
    this.name = personData.Name;
    this.job = personData.Job;
}

var personOneData = {
    Name: "Tom",
    Job: "Software Developer"
};

var personTwoData = {
    Name: "John",
    Job: "Software Architect"
}


var firstPerson = new CreatePerson( personOneData );

var secondPerson = new CreatePerson( personTwoData );

console.log( firstPerson.name );
console.log( firstPerson.job );

console.log( secondPerson.name );
console.log( secondPerson.job );

