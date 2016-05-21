// Type definitions for ES2015 Promise
// Specification: http://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/es2015

interface Thenable<T> {
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
}

declare class Promise<T> implements Thenable<T> {
	/**
	 * When the `resolve` function is called in the body of the `executor` function passed to the constructor,
	 * the Promise is fulfilled with result object passed to `resolve`.
     *
	 * When the `reject` function is called, the promise is rejected with the `error` passed to `reject`.
	 * For consistency and debugging (eg stack traces), `error` should be an instanceof `Error`.
     * 
	 * Any errors thrown in the constructor callback will be implicitly passed to `reject`.
	 */
	constructor(executor: (resolve : (value?: T | Thenable<T>) => void, reject: (error?: any) => void) => void);

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
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void): Promise<U>;

	/**
	 * Sugar for promise.then(undefined, onRejected)
	 *
	 * @param [onRejected]      called when/if Promise rejects
	 */
	catch<U>(onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
    
    /** Makes a new empty Promise. */
    static resolve(): Promise<void>;
	/** 
     * Make a new promise from the Thenable. 
     * A Thenable is Promise-like in as far as it has a `then` method. 
     */
    static resolve<T>(value: T | Thenable<T>): Promise<T>;
    
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
	static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>, T10 | Thenable<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3, T4, T5, T6>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3, T4, T5>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>]): Promise<[T1, T2, T3, T4, T5]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3, T4>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>]): Promise<[T1, T2, T3, T4]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2, T3>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>]): Promise<[T1, T2, T3]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T1, T2>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>]): Promise<[T1, T2]>;
	/**
	 * Make a Promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
	 * The array passed to all can be a mixture of Promise-like objects and other objects.
     * 
	 * The fulfillment value is an array (in order) of fulfillment values.
     * The rejection value is the first rejection value.
	 */
    static all<T>(values: (T | Thenable<T>)[]): Promise<T[]>;

	/**
	 * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
	 */
	static race<T>(promises: (T | Thenable<T>)[]): Promise<T>;
}
