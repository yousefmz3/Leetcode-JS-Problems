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
    if ( obj == null || typeof classFunction !== "function") return false ; // => ensures the right-hand side is a constructor function
    if ( obj instanceof classFunction ) return true ; // => Returns true if classFunction.prototype exists in the prototype chain of obj
    if ( typeof obj !== "object" ){ // => ensures obj is an object, as only objects can be instances of classes
        return Object(obj) instanceof classFunction  // => converts obj to an object (if it's a primitive) and checks if it's an instance of classFunction
    }
    return false ;
};

/** 
 * checkIfInstanceOf(new Date(), Date); // true
 */