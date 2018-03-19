function BaseType() {
    this.baseValue = 2;
    this.secondBaseValue = 99;
}

BaseType.prototype.getBaseValue = function () {
    return this.baseValue;
};

function ChildType() {
    BaseType.call( this );
    this.childTypeValue = 50;
}

ChildType.prototype = BaseType.prototype;

ChildType.prototype.getChildTypeValue = function () {
    return this.childTypeValue;
};



var childInstance1 = new ChildType();
var childInstance2 = new ChildType();

childInstance1.baseValue = 100;
childInstance2.baseValue = 55;


console.log( childInstance1.getBaseValue() );
console.log( childInstance1 .getChildTypeValue());
console.log( childInstance1.secondBaseValue);

console.log( childInstance2.getBaseValue() );
console.log( childInstance2 .getChildTypeValue());
console.log( childInstance2.secondBaseValue);