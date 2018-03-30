var ApplicationInitModule = function () {
    var registeredModules = [];

    return{
        registerModule : function ( module ) {
            registeredModules.push( module );
        },
        getAppModulesCount: function () {
            return registeredModules.length;
        },
        removeRegisteredModule : function ( index ) {
            registeredModules.splice( index, 1 );
        },
        initializeAllModules : function () {
            for( var module in registeredModules){
                registeredModules[ module ].initialize();
            }
        }
    };
}();

var GlobalApp = (function () {
   var registerModule = ApplicationInitModule.registerModule;
   return {
       registerModule : registerModule
   };
})();


var testModule1 = (function () {
    var self = {};
    var moduleName = "Module 1";

    self.initialize = function () {
        console.log("testModule1 has been initialized!");
        console.log("module names is: " + moduleName );
    };

    (function () {
        GlobalApp.registerModule( self );
    })();

    return {
        initialize: self.initialize,
        getName : function () {
            return moduleName;
        }
    }
})();

var testModule2 = (function () {
    var moduleName = "Module 2";
    function initialize() {
        console.log("testmodule2 has been initialized!");
    }
    return {
        initialize : initialize
    };
})();

GlobalApp.registerModule( testModule2 );


ApplicationInitModule.initializeAllModules();