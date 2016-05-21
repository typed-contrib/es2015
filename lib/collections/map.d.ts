// Type definitions for ES2015 Map
// Specification: http://www.ecma-international.org/ecma-262/6.0/#sec-map-constructor
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/es2015

/// <reference path="iterator.d.ts" />

/**
 * The Map object is a simple key/value map. 
 * Any value (both objects and primitive values) may be used as either a key or a value.
 */
declare class Map<K, V> {
    /**
     * The size accessor property returns the number of elements in a Map object.
     * @readonly
     */
    size: number;
    
    /**
     * @constructor
     * Constructs a new Map Object.
     * 
     * @param   [iterable]      Iterable is an Array or other iterable object whose elements are key-value pairs (2-element Arrays).
     *                          Each key-value pair is added to the new Map. 
     *                          null is treated as undefined.
     */
    constructor(iterable?: Iterable<[K, V]>);
    
    /** The clear() method removes all elements from a Map object. */
    clear(): void;
    
    /**
     * The delete() method removes the specified element from a Map object.
     * 
     * @param   key             The key of the element to remove from the Map object.
     * @return                  Returns true if an element in the Map object existed and has been removed, 
     *                          or false if the element does not exist.
     */
    delete(key: K): boolean;
    
    /**
     * The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.
     * 
     * @param   callback        Function to execute for each element.
     * @param   [thisArg]       Value to use as this when executing callback.
     * @returns                 Returns true if an element in the Map object existed and has been removed, 
     *                          or false if the element does not exist.
     */
    forEach(callback: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
    
    /**
     * The get() method returns a specified element from a Map object.
     * 
     * @param   key             The key of the element to return from the Map object.
     * @returns                 Returns the element associated with the specified key 
     *                          or undefined if the key can't be found in the Map object.
     */
    get(key: K): V;
    
    /**
     * The has() method returns a boolean indicating whether an element with the specified key exists or not.
     * 
     * @param   key             The key of the element to test presence in the Map object.
     * @returns                 Returns true if an element with the specified key exists in the Map object; 
     *                          otherwise false.
     */
    has(key: K): boolean;
    
    /**
     * he set() method adds a new element with a specified key and value to a Map object.
     * 
     * @param   key             The key of the element to add to the Map object.
     * @param   value           The value of the element to add to the Map object.
     * @returns                 The Map object.
     */
    set(key: K, value?: V): this;
    
    /**
     * The entries() method returns a new Iterator object that contains the [key, value] pairs 
     * for each element in the Map object in insertion order.
     */
    entries(): Iterator<[K, V]>;
    
    /**
     * The keys() method returns a new Iterator object that contains the keys for each element in the Map object 
     * in insertion order.
     */
    keys(): Iterator<K>;
    
    /**
     * The values() method returns a new Iterator object that contains the values for each element in the Map object 
     * in insertion order.
     */
    values(): Iterator<V>;
}
