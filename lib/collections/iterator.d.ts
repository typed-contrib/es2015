// Type definitions for ES2015 Iterator
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
