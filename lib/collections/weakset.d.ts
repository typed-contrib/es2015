// Type definitions for ES2015 WeakSet
// Specification: http://www.ecma-international.org/ecma-262/6.0/#sec-weakset-constructor
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/es2015

/// <reference path="iterator.d.ts" />

/**
 * The WeakSet object lets you store weakly held objects in a collection.
 */
declare class WeakSet<T> {
    /**
     * @constructor
     * Constructs a new WeakSet Object.
     * 
     * @param   [iterable]      If an iterable object is passed, all of its elements will be added to the new WeakSet.
     *                          null is treated as undefined.
     */
    constructor(iterable?: Iterable<T>);
    
    /**
     * The add() method appends a new object to the end of a WeakSet object.
     * 
     * @param   value           The value of the element to add to the WeakSet object.
     * @returns                 The WeakSet object.
     */
    add(value: T): this;
    
    /** 
     * The clear() method used to remove all elements from a WeakSet object, but is no longer part of ECMAScript and its implementations.
     * @obsolete                This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. 
     *                          Try to avoid using it.
     */
    clear(): void;
    
    /**
     * The delete() method removes the specified element from a WeakSet object.
     * 
     * @param   value           The value of the element to remove from the WeakSet object.
     * @returns                 Returns true if an element in the WeakSet object has been removed successfully; 
     *                          otherwise false.
     */
    delete(value: T): boolean;
    
    /**
     * The has() method returns a boolean indicating whether an element with the specified value exists in a WeakSet object or not.
     * 
     * @param   value           The value to test for presence in the WeakSet object.
     * @returns                 Returns true if an element with the specified value exists in the WeakSet object; otherwise false.
     */
    has(value: T): boolean;
}
