// Type definitions for ES2015 Number
// Specification: http://www.ecma-international.org/ecma-262/6.0/
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/es2015

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