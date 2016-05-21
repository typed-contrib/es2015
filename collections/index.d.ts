// Type definitions for ES2015 Collections
// Specification: http://www.ecma-international.org/ecma-262/6.0/
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/es2015


interface IteratorResult<T> {
    done: boolean;
    value?: T;
}

interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

declare type Iterable<T> = 
    Iterator<T> | 
    { [x: number]: T; length: number; } | 
    { forEach(callbackfn: (value: T) => void): void; } | 
    string;

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
