/** Samples from: https://github.com/zloirock/core-js#weakmap */

(function () {
    const
        a = [1],
        b = [2],
        c = [3];

    const wmap = new WeakMap([[a, 1], [b, 2]]);
    wmap.set(c, 3).set(b, 4);

    console.log(wmap.has(a));   // => true
    console.log(wmap.has([1])); // => false
    console.log(wmap.get(a));   // => 1

    wmap.delete(a);

    console.log(wmap.get(a));   // => undefined

    // Private properties store:
    const Person = (function () {
        const names = new WeakMap();

        function Person(name) {
            names.set(this, name);
        }
        Person.prototype.getName = function () {
            return names.get(this);
        };

        return Person;
    })();

    const person = new Person('Vasya');
    console.log(person.getName());          // => 'Vasya'

    for (let key in person)
        console.log(key); // => only 'getName'
})();