function BaseType() {
    this.baseValue = 2;
}

function ChildType() {
    BaseType.call( this );
}

ChildType.prototype.getBaseTypeValue = function () {
    return this.baseValue;
};

var instanceObj = new ChildType();

console.log( instanceObj.getBaseTypeValue() );