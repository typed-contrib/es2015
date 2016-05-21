// Type definitions for ES2015 Math
// Specification: http://www.ecma-international.org/ecma-262/6.0/
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/es2015

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