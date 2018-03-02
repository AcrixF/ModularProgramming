function Person () {
    this.name = "Thom";
    this.job = "Software Devloper";
}

//Before init the function, only the Person property has been added to the window object which is the globla context,
//After init the function, the properties name and job are add to the window object.
Person();
console.log( this );

