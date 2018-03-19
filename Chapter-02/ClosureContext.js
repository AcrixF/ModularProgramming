function setTestValue( value ) {
    var firstNum = value || 2;

    console.log("F: " + firstNum );

    return function ( secondNum ) {

        console.log( "S: " + secondNum );

        if( firstNum > secondNum ) {
            return firstNum;
        } else if (firstNum < secondNum ){
            return secondNum;
        } else {
            return "";
        }
    };
}

var theNumberExaminer = setTestValue( 6 );
var result = theNumberExaminer( 2 );
console.log( result );

console.log(setTestValue(4)(2));