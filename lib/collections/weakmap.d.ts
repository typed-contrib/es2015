// Type definitions for ES2015 WeakMap
// Specification: http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap-constructor
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/es2015

/// <reference path="iterator.d.ts" />

/**
 * The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced.
 * The keys must be objects and the values can be arbitrary values.
 */
declare class WeakMap<K, V> {
    /**
     * @constructor
     * Constructs a new WeakMap Object.
     * 
     * @param   [iterable]      Iterable is an Array or other iterable object whose elements are key-value pairs (2-element Arrays). 
     *                          Each key-value pair will be added to the new WeakMap. 
     *                          null is treated as undefined.
     */
    constructor(iterable?: Iterable<[K, V]>);
    
    /** 
     * The clear() method used to remove all elements from a WeakMap object, but is no longer part of ECMAScript and its implementations.
     * @obsolete                This feature is obsolete. Although it may still work in some browsers, its use is discouraged since it could be removed at any time. 
     *                          Try to avoid using it.
     */
    clear(): void;
    
    /**
     * The delete() method removes the specified element from a WeakMap object.
     * 
     * @param   key             The key of the element to remove from the WeakMap object.
     * @return                  Returns true if an element in the WeakMap object existed and has been removed, 
     *                          or false if the element does not exist.
     */
    delete(key: K): boolean;
    
    /**
     * The get() method returns a specified element from a WeakMap object.
     * 
     * @param   key             The key of the element to return from the WeakMap object.
     * @returns                 Returns the element associated with the specified key 
     *                          or undefined if the key can't be found in the WeakMap object.
     */
    get(key: K): V;
    
    /**
     * The has() method returns a boolean indicating whether an element with the specified key exists or not.
     * 
     * @param   key             The key of the element to test presence in the WeakMap object.
     * @returns                 Returns true if an element with the specified key exists in the WeakMap object; 
     *                          otherwise false.
     */
    has(key: K): boolean;
    
    /**
     * he set() method adds a new element with a specified key and value to a WeakMap object.
     * 
     * @param   key             The key of the element to add to the WeakMap object.
     * @param   value           The value of the element to add to the WeakMap object.
     * @returns                 The WeakMap object.
     */
    set(key: K, value?: V): this;
}
