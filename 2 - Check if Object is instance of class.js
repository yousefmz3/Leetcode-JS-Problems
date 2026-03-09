// Write a function that checks if a given value is an instance of a given class
// or superclass. For this problem, an object is considered an instance of a given
// class if that object has access to that class's methods.

// There are no constraints on the data types that can be passed
// to the function. For example, the value or the class could be undefined.

/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if ( obj == null || typeof classFunction !== "function") return false ;
    if ( obj instanceof classFunction ) return true ;
    if ( typeof obj !== "object" ){
        return Object(obj) instanceof classFunction
    }
    return false ;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */