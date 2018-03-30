var myCarFactoryModule = function () {
    var createdCars = [];
    function carFactory() {
        var newCar = new Object();

        newCar.type = arguments[0];
        newCar.color = arguments[1];
        newCar.gearType = arguments[2];
        newCar.cylinder = arguments[3];
        createdCars.push(  newCar );

        return newCar;
    }

    return {
        createCar :function ( type, color, gearType, cylinder ) {
            return carFactory(  type, color, gearType, cylinder );
        },
        getCarCount: function () {
            return createdCars.length;
        },
        removeCar: function ( index ) {
            createdCars.splice( index, 1  );
        }
    }
}();


var myFirstCar = myCarFactoryModule.createCar("Sedan", "red", "automatic",4);
var mySecondCar = myCarFactoryModule.createCar("SUV", "Silver", "Standard",6);

console.log( "Color: " + myFirstCar.color );
console.log("Type: " + mySecondCar.gearType);

var myTotalCars = myCarFactoryModule.getCarCount();
console.log( "Total cars: " + myTotalCars );

myCarFactoryModule.removeCar( 0 );

var myTotalCars = myCarFactoryModule.getCarCount();
console.log("Total cars: " + myTotalCars );