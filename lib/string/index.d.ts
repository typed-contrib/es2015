// Type definitions for ES2015 String
// Specification: http://www.ecma-international.org/ecma-262/6.0/
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/es2015

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