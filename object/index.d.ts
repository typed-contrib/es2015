// Type definitions for ES2015 Object
// Specification: http://www.ecma-international.org/ecma-262/6.0/
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/es2015

interface ObjectConstructor {
    /**
     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
     * It will return the target object.
     */
    assign<T1, T2, T3, T4, T5, T6, T7>(target: T1, a: T2, b: T3, c: T4, d: T5, e: T6, f: T7): T1 & T2 & T3 & T4 & T5 & T6 & T7;
    /**
     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
     * It will return the target object.
     */
    assign<T1, T2, T3, T4, T5, T6>(target: T1, a: T2, b: T3, c: T4, d: T5, e: T6): T1 & T2 & T3 & T4 & T5 & T6;
    /**
     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
     * It will return the target object.
     */
    assign<T1, T2, T3, T4, T5>(target: T1, a: T2, b: T3, c: T4, d: T5): T1 & T2 & T3 & T4 & T5;
    /**
     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
     * It will return the target object.
     */
    assign<T1, T2, T3, T4>(target: T1, a: T2, b: T3, c: T4): T1 & T2 & T3 & T4;
    /**
     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
     * It will return the target object.
     */
    assign<T1, T2, T3>(target: T1, a: T2, b: T3): T1 & T2 & T3;
    /**
     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
     * It will return the target object.
     */
    assign<T, U>(target: T, src: U): T & U;
    /**
     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
     * It will return the target object.
     * 
     * @param       target      The target object.
     * @param       ...sources  The source object(s).
     * @returns The target object gets returned.
     */
    assign(target: any, ...sources: any[]): any;
    /**
     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
     * It will return the target object.
     * 
     * @param       target      The target object.
     * @param       ...sources  The source object(s).
     * @returns The target object gets returned.
     */
    assign<T>(target: any, ...sources: any[]): T;
    
    /**
     * The Object.is() method determines whether two values are the same value.
     * 
     * @param       value1      The first value to compare.
     * @param       value2      The second value to compare.
     * @returns                 A Boolean indicating whether or not the two arguments are the same value.
     */
    is(value1: any, value2: any): boolean;
    
    /**
     * The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
     * 
     * @param       obj         The object which is to have its prototype set.
     * @param       prototype   The object's new prototype (an object or null).
     */
    setPrototypeOf<T, U>(obj: T, prototype: U): T & U;
}
