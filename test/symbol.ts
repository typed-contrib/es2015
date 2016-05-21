/** Samples from https://github.com/zloirock/core-js#ecmascript-6-symbol */
(function () {
    /**
     * Basic example:
     */
    const Person = (function () {
        const NAME = Symbol('name');
        function Person(name) {
            this[NAME] = name;
        }
        Person.prototype.getName = function () {
            return this[NAME];
        };
        return Person;
    })();

    const person = new Person('Vasya');
    console.log(person.getName());          // => 'Vasya'
    console.log(person['name']);            // => undefined
    console.log(person[Symbol('name')]);    // => undefined, symbols are uniq
    for (let key in person) console.log(key); // => only 'getName', symbols are not enumerable

    /**
     * Symbol.for & Symbol.keyFor example:
     */
    const symbol = Symbol.for('key');
    symbol === Symbol.for('key'); // true
    Symbol.keyFor(symbol);        // 'key'

    /**
     * Example with methods for getting own object keys:
     */
    const O = { a: 1 };
    Object.defineProperty(O, 'b', { value: 2 });
    O[Symbol('c')] = 3;
    Object.keys(O);                  // => ['a']
    Object.getOwnPropertyNames(O);   // => ['a', 'b']
    Object.getOwnPropertySymbols(O); // => [Symbol(c)]
    // Reflect.ownKeys(O);              // => ['a', 'b', Symbol(c)]
})();