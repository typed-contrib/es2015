/** Samples from: https://github.com/zloirock/core-js#weakset */

(function () {
    const
        a = [1], 
        b = [2], 
        c = [3];

    var wset = new WeakSet([a, b, a]);
    wset.add(c).add(b).add(c);
    
    console.log(wset.has(b));   // => true
    console.log(wset.has([2])); // => false
    
    wset.delete(b);
    
    console.log(wset.has(b));   // => false
})();