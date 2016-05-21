// Type definitions for ES2015 Set
// Specification: http://www.ecma-international.org/ecma-262/6.0/#sec-set-constructor
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/es2015

/// <reference path="iterator.d.ts" />

/**
 * The Set object lets you store unique values of any type, whether primitive values or object references.
 */
declare class Set<T> {
    /**
     * The size accessor property returns the number of elements in a Set object.
     * @readonly
     */
    size: number;
    
    /**
     * @constructor
     * Constructs a new Set Object.
     * 
     * @param   [iterable]      If an iterable object is passed, all of its elements will be added to the new Set. 
     *                          null is treated as undefined.
     */
    constructor(iterable?: Iterable<T>);
    
    /**
     * The add() method appends a new element with a specified value to the end of a Set object.
     * 
     * @param   value           The value of the element to add to the Set object.
     * @returns                 The Set object.
     */
    add(value: T): this;
    
    /** The clear() method removes all elements from a Set object. */
    clear(): void;
    
    /**
     * The delete() method removes the specified element from a Set object.
     * 
     * @param   value           The value of the element to remove from the Set object.
     * @returns                 Returns true if an element in the Set object has been removed successfully; 
     *                          otherwise false.
     */
    delete(value: T): boolean;
    
    /**
     * The forEach() method executes a provided function once per each value in the Set object, in insertion order.
     * 
     * @param   callback        Function to execute for each element.
     * @param   [thisArg]       Value to use as this when executing callback.
     */
    forEach(callback: (value: T, index: T, set: Set<T>) => void, thisArg?: any): void;
    
    /**
     * The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.
     * 
     * @param   value           The value to test for presence in the Set object.
     * @returns                 Returns true if an element with the specified value exists in the Set object; otherwise false.
     */
    has(value: T): boolean;
    
    /**
     * The entries() method returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. 
     * For Set objects there is no key like in Map objects. However, to keep the API similar to the Map object, each entry has the same value for its key and value here, 
     * so that an array [value, value] is returned.
     */
    entries(): Iterator<[T, T]>;
    
    /**
     * The keys() method is an alias for this method (for similarity with Map objects); it behaves exactly the same and returns values of Set elements.
     */
    keys(): Iterator<T>;
    
    /**
     * The values() method returns a new Iterator object that contains the values for each element in the Set object in insertion order.
     */
    values(): Iterator<T>;
}
