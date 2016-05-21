/** Samples from: https://github.com/zloirock/core-js#map */

(function () {
    const a = [1];

    const map = new Map<any, number>([['a', 1], [42, 2]]);
    map.set(a, 3).set(true, 4);

    console.log(map.size);        // => 4
    console.log(map.has(a));      // => true
    console.log(map.has([1]));    // => false
    console.log(map.get(a));      // => 3

    map.forEach(function (val, key) {
        console.log(val);           // => 1, 2, 3, 4
        console.log(key);           // => 'a', 42, [1], true
    });

    map.delete(a);

    console.log(map.size);        // => 3
    console.log(map.get(a));      // => undefined
    console.log(Array.from(map)); // => [['a', 1], [42, 2], [true, 4]]

    // var map = new Map([['a', 1], ['b', 2], ['c', 3]] as [string, number][]);

    // for(var [key, val] of map){
    //   console.log(key);                           // => 'a', 'b', 'c'
    //   console.log(val);                           // => 1, 2, 3
    // }
    // for(var val of map.values())console.log(val); // => 1, 2, 3
    // for(var key of map.keys())console.log(key);   // => 'a', 'b', 'c'
    // for(var [key, val] of map.entries()){
    //   console.log(key);                           // => 'a', 'b', 'c'
    //   console.log(val);                           // => 1, 2, 3
    // }
})();