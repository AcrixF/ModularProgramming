var name = "The window global";

var myOwnObject = {
    name: "My own Object",
    getName: function() {
        return this.name;
    }

};

console.log( myOwnObject.getName() );
console.log( (myOwnObject.getName = myOwnObject.getName)() );