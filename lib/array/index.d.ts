// Type definitions for ES2015 Array
// Specification: http://www.ecma-international.org/ecma-262/6.0/
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/es2015

/// <reference path="../collections/iterator.d.ts" />

interface ArrayConstructor {
    /**
     * The Array.from() method creates a new Array instance from an array-like or iterable object.
     * @param       iterable        An array-like or iterable object to convert to an array.
     */
    from<T>(iterable: Iterable<T>): Array<T>;
    /**
     * The Array.from() method creates a new Array instance from an array-like or iterable object.
     * @param       iterable        An array-like or iterable object to convert to an array.
     * @param       mapFn           Map function to call on every element of the array.
     * @param       [thisArg]       Value to use as this when executing mapFn.
     */
    from<T, U>(iterable: Iterable<T>, mapFn: (value: T, index: number) => U, thisArg?: any): Array<U>;
    
    /** The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. */
    of<T1, T2, T3, T4, T5, T6, T7>(e1: T1, e2: T2, e3: T3, e4: T4, e5: T5, e6: T6, e7: T7): [T1, T2, T3, T4, T5, T6, T7];
    /** The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. */
    of<T1, T2, T3, T4, T5, T6>(e1: T1, e2: T2, e3: T3, e4: T4, e5: T5, e6: T6): [T1, T2, T3, T4, T5, T6];
    /** The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. */
    of<T1, T2, T3, T4, T5>(e1: T1, e2: T2, e3: T3, e4: T4, e5: T5): [T1, T2, T3, T4, T5];
    /** The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. */
    of<T1, T2, T3, T4>(e1: T1, e2: T2, e3: T3, e4: T4): [T1, T2, T3, T4];
    /** The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. */
    of<T1, T2, T3>(e1: T1, e2: T2, e3: T3): [T1, T2, T3];
    /** The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. */
    of<T1, T2>(e1: T1, e2: T2): [T1, T2];
    /** The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments. */
    of<T>(...elements: T[]): Array<T>;
}

interface Array<T> {
    /**
     * The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.
     * 
     * @param       target      Zero based index at which to copy the sequence to. If negative, target will be counted from the end.
     *                          If target is at or greater than arr.length, nothing will be copied. If target is positioned after start, 
     *                          the copied sequence will be trimmed to fit arr.length.
     * @param       [start]     Zero based index at which to start copying elements from. If negative, start will be counted from the end.
     *                          If start is omitted, copyWithin will copy from the start (defaults to 0).
     * @param       [end]       Zero based index at which to end copying elements from. copyWithin copies up to but not including end. 
     *                          If negative, end will be counted from the end.
     *                          If end is omitted, copyWithin will copy until the end (default to arr.length).
     * @returns                 The current Array.
     */
    copyWithin(target: number, start?: number, end?: number): this;
    
    /**
     * The fill() method fills all the elements of an array from a start index to an end index with a static value.
     * 
     * @param       value       Value to fill an array.
     * @param       [start]     Start index. (defaults to 0).
     * @param       [end]       End index. (default to arr.length).
     * @returns                 The current Array.
     */
    fill(val: T, start?: number, end?: number): this;
    
    /**
     * The find() method returns a value in the array, if an element in the array satisfies the provided testing function. 
     * Otherwise undefined is returned.
     * 
     * @param       callback    Function to execute on each value in the array, taking three arguments:
     *                              element - The current element being processed in the array.
     *                              index - The index of the current element being processed in the array.
     *                              array - The array find was called upon.
     * @param       [thisArg]   Object to use as this when executing callback.
     */
    find(callback: (val: T, index: number, list: this) => boolean, thisArg?: any): T;
    
    /**
     * The findIndex() method returns an index in the array, if an element in the array satisfies the provided testing function.
     * Otherwise -1 is returned.
     * 
     * @param       callback    Function to execute on each value in the array, taking three arguments:
     *                              element - The current element being processed in the array.
     *                              index - The index of the current element being processed in the array.
     *                              array - The array find was called upon.
     * @param       [thisArg]   Object to use as this when executing callback.
     */
    findIndex(callback: (val: T, index: number, list: this) => boolean, thisArg?: any): number;
    
    /** The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array. */
    entries(): Iterator<[number, T]>;
    /** The keys() method returns a new Array Iterator that contains the keys for each index in the array. */
    keys(): Iterator<number>;
    /** The values() method returns a new Array Iterator object that contains the values for each index in the array. */
    values(): Iterator<T>;
}
