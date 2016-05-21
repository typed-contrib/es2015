/** Samples from https://github.com/zloirock/core-js#ecmascript-6-object */

(function() {
    const
        foo = {q: 1, w: 2}, 
        bar = {e: 3, r: 4}, 
        baz = {t: 5, y: 6};
        
    Object.assign(foo, bar, baz); // => foo = {q: 1, w: 2, e: 3, r: 4, t: 5, y: 6}

    Object.is(NaN, NaN); // => true
    Object.is(0, -0);    // => false
    Object.is(42, 42);   // => true
    Object.is(42, '42'); // => false

    function Parent(){}
    function Child(){}
    Object.setPrototypeOf(Child.prototype, Parent.prototype);
    
    new Child instanceof Child;  // => true
    new Child instanceof Parent; // => true

    Object.keys('qwe'); // => ['0', '1', '2']
    Object.getPrototypeOf('qwe') === String.prototype; // => true
})();