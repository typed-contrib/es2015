/** Samples from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from */
(function() {
    // Array-like object (arguments) to Array
    function f(...args: any[]);
    function f() {
        return Array.from(arguments);
    }

    f(1, 2, 3);
    // [1, 2, 3]


    // Any iterable object...
    // Set
    var s = new Set(["foo", window]);
    Array.from(s);
    // ["foo", window]


    // Map
    var m = new Map([[1, 2], [2, 4], [4, 8]]);
    Array.from(m);
    // [[1, 2], [2, 4], [4, 8]]  


    // String
    Array.from("foo");
    // ["f", "o", "o"]


    // Using an arrow function as the map function to
    // manipulate the elements
    Array.from([1, 2, 3], x => x + x);
    // [2, 4, 6]


    // Generate a sequence of numbers
    Array.from({ length: 5 }, (v, k) => k);
// [0, 1, 2, 3, 4]
})();

/** Samples from https://github.com/zloirock/core-js#ecmascript-6-array */
(function() {
    Array.from(new Set([1, 2, 3, 2, 1]));      // => [1, 2, 3]
    Array.from({0: 1, 1: 2, 2: 3, length: 3}); // => [1, 2, 3]
    Array.from('123', Number);                 // => [1, 2, 3]
    Array.from('123', 
        it => Number(it) * Number(it));        // => [1, 4, 9]

    Array.of(1);       // => [1]
    Array.of(1, 2, 3); // => [1, 2, 3]

    var array = ['a', 'b', 'c'];

    // for(var val of array)console.log(val);          // => 'a', 'b', 'c'
    // for(var val of array.values())console.log(val); // => 'a', 'b', 'c'
    // for(var key of array.keys())console.log(key);   // => 0, 1, 2
    // for(var [key, val] of array.entries()){
    // console.log(key);                             // => 0, 1, 2
    // console.log(val);                             // => 'a', 'b', 'c'
    // }

    function isOdd(val){
        return val % 2 !== 0;
    }
    
    [4, 8, 15, 16, 23, 42].find(isOdd);      // => 15
    [4, 8, 15, 16, 23, 42].findIndex(isOdd); // => 2
    [4, 8, 15, 16, 23, 42].find(isNaN);      // => undefined
    [4, 8, 15, 16, 23, 42].findIndex(isNaN); // => -1

    Array(5).fill(42); // => [42, 42, 42, 42, 42]

    [1, 2, 3, 4, 5].copyWithin(0, 3); // => [4, 5, 3, 4, 5]
})();