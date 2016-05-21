// Type definitions for ES2015 Symbol
// Specification: http://www.ecma-international.org/ecma-262/6.0/
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/es2015

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
