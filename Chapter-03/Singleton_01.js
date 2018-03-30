var mySingletonObj = {
    name: "Sansa",
    title: "Software Developer",
    getName : function () {
        return this.name;
    },
    getTitle: function () {
        return this.title;
    }
};

console.log( mySingletonObj.getName() );
console.log( mySingletonObj.getTitle() );

mySingletonObj.name = "John";

console.log( mySingletonObj.getName() );