/** Samples from: https://github.com/zloirock/core-js#ecmascript-6-promise */

(function () {
    let $: any;

    /*
     * Basic example:
     */
    function sleepRandom(time) {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, time * 1e3, 0 | Math.random() * 1e3);
        });
    }

    console.log('Run');                    // => Run
    sleepRandom(5).then(function (result) {
        console.log(result);                 // => 869, after 5 sec.
        return sleepRandom(10);
    }).then(function (result) {
        console.log(result);                 // => 202, after 10 sec.
    }).then(function () {
        console.log('immediately after');    // => immediately after
        throw Error('Irror!');
    }).then(function () {
        console.log('will not be displayed');
    }).catch(x => console.log(x));         // => => Error: Irror!

    /*
     * Promise.resolve and Promise.reject example:
     */
    Promise.resolve(42).then(x => console.log(x)); // => 42
    Promise.reject(42).catch(x => console.log(x)); // => 42

    Promise.resolve($.getJSON('/data.json')); // => ES6 promise

    /*
     * Promise.all example:
     */
    Promise.all([
        'foo',
        sleepRandom(5),
        sleepRandom(15),
        sleepRandom(10)             // after 15 sec:
    ]).then(x => console.log(x)); // => ['foo', 956, 85, 382]

    /**
     * Promise.race example:
     */
    function timeLimit(promise, time) {
        return Promise.race([promise, new Promise(function (resolve, reject) {
            setTimeout(reject, time * 1e3, Error('Await > ' + time + ' sec'));
        })]);
    }

    timeLimit(sleepRandom(5), 10).then(x => console.log(x));   // => 853, after 5 sec.
    timeLimit(sleepRandom(15), 10).catch(x => console.log(x)); // Error: Await > 10 sec
})();