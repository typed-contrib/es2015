/** Samples from: https://github.com/zloirock/core-js#set */

(function () {
    const set = new Set(['a', 'b', 'a', 'c']);

    set.add('d').add('b').add('e');

    console.log(set.size);        // => 5
    console.log(set.has('b'));    // => true

    set.forEach(function (it) {
        console.log(it);            // => 'a', 'b', 'c', 'd', 'e'
    });

    set.delete('b');

    console.log(set.size);        // => 4
    console.log(set.has('b'));    // => false

    console.log(Array.from(set)); // => ['a', 'c', 'd', 'e']

    // var set = new Set([1, 2, 3, 2, 1]);

    // for(var val of set)console.log(val);          // => 1, 2, 3
    // for(var val of set.values())console.log(val); // => 1, 2, 3
    // for(var key of set.keys())console.log(key);   // => 1, 2, 3
    // for(var [key, val] of set.entries()){
    //   console.log(key);                           // => 1, 2, 3
    //   console.log(val);                           // => 1, 2, 3
    // }
})();
