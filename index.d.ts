// Type definitions for ES2015
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

interface Math {
    /** The Math.acosh() function returns the hyperbolic arc-cosine of a number. */
    acosh(x: number): number;
    
    /** The Math.asinh() function returns the hyperbolic arcsine of a number. */
    asinh(x: number): number;
    
    /** The Math.atanh() function returns the hyperbolic arctangent of a number. */
    atanh(x: number): number;
    
    /** The Math.cbrt() function returns the cube root of a number. */
    cbrt(x: number): number;

    /** The Math.clz32() function returns the number of leading zero bits in the 32-bit binary representation of a number.. */
    clz32(x: number): number;

    /** The Math.cosh() function returns the hyperbolic cosine of a number. */
    cosh(x: number): number;

    /** The Math.expm1() function returns e^x - 1, where x is the argument, and e the base of the natural logarithms. */
    expm1(x: number): number;

    /** The Math.fround() function returns the nearest single precision float representation of a number. */
    fround(x: number): number;

    /** The Math.hypot() function returns the square root of the sum of squares of its arguments. */
    hypot(...values: number[]): number;

    /** The Math.imul() function returns the result of the C-like 32-bit multiplication of the two parameters. */
    imul(a: number, b: number): number;

    /** The Math.log10() function returns the base 10 logarithm of a number. */
    log10(x: number): number;

    /** The Math.log1p() function returns the natural logarithm (base e) of 1 + a number. */
    log1p(x: number): number;

    /** The Math.log2() function returns the base 2 logarithm of a number. */
    log2(x: number): number;

    /** 
     * The Math.sign() function returns the sign of a number, indicating whether the number is positive, negative or zero.
     * 
     * Because sign() is a static method of Math, you always use it as Math.sign(), rather than as a method of a Math object you created (Math is not a constructor).
     * This function has 5 kinds of return values, 1, -1, 0, -0, NaN, which represent "positive number", "negative number", "positive zero", "negative zero" and NaN respectively.
     * The argument passed to this function will be converted to x type implicitly.
     */
    sign(x: number): number;

    /** The Math.sinh() function returns the hyperbolic sine of a number. */
    sinh(x: number): number;

    /** The Math.tanh() function returns the hyperbolic tangent of a number. */
    tanh(x: number): number;

    /** The Math.trunc() function returns the integral part of a number by removing any fractional digits. */
    trunc(x: number): number;
}
interface Number {
    /**
     * The toFixed() method formats a number using fixed-point notation.
     * 
     * @param       [digits]        The number of digits to appear after the decimal point; 
     *                              this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. 
     *                              If this argument is omitted, it is treated as 0.
     */
    toFixed(digits?: string): string;
    
    /**
     * The toPrecision() method returns a string representing the Number object to the specified precision.
     * 
     * @param       [precision]     An integer specifying the number of significant digits.
     */
    toPrecision(precision?: string): string;
}

interface NumberConstructor {
    /**
     * The Number.EPSILON property represents the difference between one and the smallest value greater than one that can be represented as a Number.
     * You do not have to create a Number object to access this static property (use Number.EPSILON).
     */
    EPSILON: number;
    
    /** The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (2^53 - 1). */
    MAX_SAFE_INTEGER: number;
    
    /** The Number.MIN_SAFE_INTEGER constant represents the minimum safe integer in JavaScript (-(2^53 - 1)). */
    MIN_SAFE_INTEGER: number;
    
    /**
     * The Number.isFinite() method determines whether the passed value is a finite number.
     * 
     * In comparison to the global isFinite() function, this method doesn't forcibly convert the parameter to a number. 
     * This means only values of the type number, that are also finite, return true.
     */
    isFinite(value: number): boolean;
    
    /**
     * The Number.isNaN() method determines whether the passed value is NaN.
     * More robust version of the original global isNaN().
     * 
     * In comparison to the global isNaN() function, Number.isNaN() doesn't suffer the problem of forcefully converting the parameter to a number. 
     * This means it is now safe to pass values that would normally convert to NaN, but aren't actually the same value as NaN. This also means that 
     * only values of the type number, that are also NaN, return true.
     */
    isNaN(value: number): boolean;
    
    /**
     * The Number.isInteger() method determines whether the passed value is an integer.
     * If the target value is an integer, return true, otherwise return false. 
     * If the value is NaN or infinite, return false.
     */
    isInteger(value: number): boolean;
    
    /**
     * The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer. A safe integer is an integer that
     * can be exactly represented as an IEEE-754 double precision number, and whose IEEE-754 representation cannot be the result of rounding any other 
     * integer to fit the IEEE-754 representation.
     * 
     * For example, 2^53 - 1 is a safe integer: it can be exactly represented, and no other integer rounds to it under any IEEE-754 rounding mode. 
     * In contrast, 2^53 is not a safe integer: it can be exactly represented in IEEE-754, but the integer 2^53 + 1 can't be directly represented in IEEE-754 
     * but instead rounds to 2^53 under round-to-nearest and round-to-zero rounding.
     * 
     * The safe integers consist of all integers from -(2^53 - 1) inclusive to 2^53 - 1 inclusive.
     */
    isSafeInteger(value: number): boolean;
    
    /**
     * The Number.parseFloat() method parses a string argument and returns a floating point number.
     * This method behaves identically to the global function parseFloat() and is part of ECMAScript 6 (its purpose is modularization of globals).
     */
    parseFloat(str: string): number;
    
    /**
     * The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.
     */
    parseInt(str: string): number;
}
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

declare class Promise<T> implements PromiseLike<T> {
	/**
	 * When the `resolve` function is called in the body of the `executor` function passed to the constructor,
	 * the Promise is fulfilled with result object passed to `resolve`.
     *
	 * When the `reject` function is called, the promise is rejected with the `error` passed to `reject`.
	 * For consistency and debugging (eg stack traces), `error` should be an instanceof `Error`.
     * 
	 * Any errors thrown in the constructor callback will be implicitly passed to `reject`.
	 */
	constructor(executor: (resolve : (value?: T | PromiseLike<T>) => void, reject: (error?: any) => void) => void);

	/**
	 * `onFulfilled` is called when/if Promise resolves.
     * `onRejected` is called when/if Promise rejects.
     * 
	 * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
	 * Both callbacks have a single parameter, the fulfillment value or rejection reason.
	 * 
     * `then` returns a new Promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
	 * If an error is thrown in the callback, the returned Promise rejects with that error.
	 *
	 * @param [onFulfilled]     called when/if Promise resolves
	 * @param [onRejected]      called when/if Promise rejects
	 */
    then<U>(onFulfilled?: (value: T) => U | PromiseLike<U>, onRejected?: (error: any) => U | PromiseLike<U>): Promise<U>;
    then<U>(onFulfilled?: (value: T) => U | PromiseLike<U>, onRejected?: (error: any) => void): Promise<U>;

	/**
	 * Sugar for promise.then(undefined, onRejected)
	 *
	 * @param [onRejected]      called when/if Promise rejects
	 */
	catch<U>(onRejected?: (error: any) => U | PromiseLike<U>): Promise<U>;
    
    /** Makes a new empty Promise. */
    static resolve(): Promise<any>;
	/** 
     * Make a new promise from the Thenable. 
     * A Thenable is Promise-like in as far as it has a `then` method. 
     */
    static resolve<T>(value?: T | PromiseLike<T>): Promise<T>;
    
    /** Make a Promise that rejects to `err`. For consistency and debugging (eg stack traces), `err` should be an instanceof Error. */
	static reject(error: any): Promise<any>;
	/** Make a Promise that rejects to `err`. For consistency and debugging (eg stack traces), `err` should be an instanceof Error. */
	static reject<T>(error: T): Promise<T>;
    
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
	static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3, T4, T5, T6>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3, T4, T5>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>]): Promise<[T1, T2, T3, T4, T5]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3, T4>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>]): Promise<[T1, T2, T3, T4]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<[T1, T2, T3]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<[T1, T2]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T>(values: (T | PromiseLike<T>)[]): Promise<T[]>;

	/**
	 * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
	 */
	static race<T>(promises: (T | PromiseLike<T>)[]): Promise<T>;
}

interface Reflect {
    
}
interface String {
    /**
     * The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
     * 
     * @param       searchString        A string to be searched for within this string.
     * @param       [position]          The position in this string at which to begin searching for searchString; defaults to 0.
     */
    includes(searchString: string, position?: number): boolean;
    
    /**
     * The startsWith() method determines whether a string begins with the characters of another string, returning true or false as appropriate.
     * 
     * @param       searchString        The characters to be searched for at the start of this string.
     * @param       [position]          The position in this string at which to begin searching for searchString; defaults to 0.
     */
    startsWith(searchString: string, position?: number): boolean;
    
    /**
     * The endsWith() method determines whether a string ends with the characters of another string, returning true or false as appropriate.
     * 
     * @param       searchString        The characters to be searched for at the end of this string.
     * @param       [position]          Search within this string as if this string were only this long; 
     *                                  defaults to this string's actual length, clamped within the range established by this string's length.
     */
    endsWith(searchString: string, position?: number): boolean;
    
    /**
     * The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
     * 
     * @param       count               An integer between 0 and +∞: [0, +∞), indicating the number of times to repeat the string in the newly-created string that is to be returned.
     */
    repeat(count?: number): string;
    
    /**
     * The codePointAt() method returns a non-negative integer that is the Unicode code point value.
     * 
     * @param       pos                 Position of an element in the String to return the code point value from.
     */
    codePointAt(pos: number): number;
    
    /**
     * The normalize() method returns the Unicode Normalization Form of a given string (if the value isn't a string, it will be converted to one first).
     * 
     * @param       [form]              One of "NFC", "NFD", "NFKC", or "NFKD", specifying the Unicode Normalization Form. 
     *                                  If omitted or undefined, "NFC" is used.
     *                                      * NFC - Normalization Form Canonical Composition.
     *                                      * NFD - Normalization Form Canonical Decomposition.
     *                                      * NFKC - Normalization Form Compatibility Composition.
     *                                      * NFKD - Normalization Form Compatibility Decomposition.
     */
    normalize(form?: "NFC" | "NFD" | "NFKC" | "NFKD"): void;
    
    anchor(name: string): string;
    big(): string;
    blink(): string;
    bold(): string;
    fixed(): string;
    fontcolor(color: string): string;
    fontsize(size: number): string;
    italics(): string;
    link(url: string): string;
    small(): string;
    strike(): string;
    sub(): string;
    sup(): string;
}

interface StringConstructor {
    /**
     * The static String.fromCodePoint() method returns a string created by using the specified sequence of code points.
     * 
     * @param       ...nums             A sequence of code points.
     */
    fromCodePoint(...nums: number[]): string;
    
    /**
     * The static String.raw() method is a tag function of template literals, similar to the r prefix in Python 
     * or the @ prefix in C# for string literals (yet there is a difference: see explanations in this issue). 
     * It's used to get the raw string form of template strings (that is, the original, uninterpreted text).
     * 
     * @param       callSite            Well-formed template call site object, like { raw: 'string' }.
     * @param       ...substitutions    Contains substitution values.
     */
    raw(callSite: { raw: string; }, ...substitutions: any[]): string;
}

interface RegExpConstructor {
    new (pattern: RegExp, flags?: string): RegExp;
    (pattern: RegExp, flags?: string): RegExp;
}

interface RegExp {
    flags: string;
}
/** 
 * A symbol is a unique and immutable data type and may be used as an identifier for object properties. 
 * The symbol object is an implicit object wrapper for the symbol primitive data type.
 */
interface Symbol {
    /** 
     * To create a new primitive symbol, you write Symbol() with an optional string as its description.
     * @param       [description]   A description of the symbol which can be used for debugging but not to access the symbol itself.
     */
    (description?: string): symbol;
    
    /**
     * The Symbol.for(key) method searches for existing symbols in a runtime-wide symbol registry with the given key and returns it if found. 
     * Otherwise a new symbol gets created in the global symbol registry with this key.
     * 
     * @param       key             The key for the symbol (and also used for the description of the symbol).
     */
    for(key: string): symbol;
    
    /**
     * The Symbol.keyFor(sym) method retrieves a shared symbol key from the global symbol registry for the given symbol.
     * 
     * @param       symbol          The symbol to find a key for.
     */
    keyFor(symbol: symbol): string;
    
    hasInstance: symbol;
    isConcatSpreadable: symbol;
    iterator: symbol;
    match: symbol;
    replace: symbol;
    search: symbol;
    species: symbol;
    split: symbol;
    toPrimitive: symbol;
    toStringTag: symbol;
    unscopables: symbol;
}

declare var Symbol: Symbol;

interface Object {
    getOwnPropertySymbols(obj: any): symbol[];
}
