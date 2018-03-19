function BaseType() {
    this.baseValue = 2;
}

BaseType.prototype.getBaseValue = function () {
    return this.baseValue;
};

function ChildType() {
    this.childTypeValue = 50;
}

ChildType.prototype = new BaseType();

ChildType.prototype.getChildTypeValue = function () {
    return this.childTypeValue;
};

ChildType.prototype.getBaseValue = function () {
    return this.childTypeValue;
}
var childInstance = new ChildType();

console.log( childInstance.getBaseValue() );
console.log( childInstance.getChildTypeValue());

/*
* The advantage of creating methods (properties) on prototype object as opposed to
on the constructor function itself is that by doing so, all the instances that are created
using the constructor share these methods. Therefore, these instances do not have to
have their own copy of these properties, thus optimizing our code's performance and
memory usage.


As you can see, there is quite a bit of searching taking place in order to find the
instance property. Also, keep in mind that if the property was not found in the
prototype of BaseType, the search would have continued to the prototype object of
the parent of all objects in JavaScript, the Object type. Let's talk about how that works.

It is very important to keep in mind that the search is ceased and will not continue
any further in the chain of protoypes, as soon as the property that the search is
being conducted for is found.

* */

console.log( childInstance instanceof Object);
console.log( childInstance instanceof BaseType);
console.log( childInstance instanceof ChildType);


/**
 *While prototype chaining has many advantages and allows us to create inheritance
 among our base objects and our child objects, it has the disadvantage that any
 changes to the base object's reference type properties are reflected in all the instances
 of the child classes. This at times may not be a desirable effect and you need to be
 aware of it.
 **/

/*
* Resetting the constructor property
* */

console.log(childInstance.constructor);

ChildType.prototype.constructor = ChildType;

console.log(childInstance.constructor);