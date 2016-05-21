/** https://github.com/zloirock/core-js#ecmascript-6-string */

(function () {
    for (var val of 'a𠮷b') {
        console.log(val); // => 'a', '𠮷', 'b'
    }

    'foobarbaz'.includes('bar');      // => true
    'foobarbaz'.includes('bar', 4);   // => false
    'foobarbaz'.startsWith('foo');    // => true
    'foobarbaz'.startsWith('bar', 3); // => true
    'foobarbaz'.endsWith('baz');      // => true
    'foobarbaz'.endsWith('bar', 6);   // => true

    'string'.repeat(3); // => 'stringstringstring'

    '𠮷'.codePointAt(0); // => 134071
    String.fromCodePoint(97, 134071, 98); // => 'a𠮷b'

    const name = 'Bob';
    String.raw`Hi\n${name}!`;           // => 'Hi\\nBob!' (ES6 template string syntax)
    String.raw({ raw: 'test' }, 0, 1, 2); // => 't0e1s2t'

    'foo'.bold();                     // => '<b>foo</b>'
    'bar'.anchor('a"b');              // => '<a name="a&quot;b">bar</a>'
    'baz'.link('http://example.com'); // => '<a href="http://example.com">baz</a>'
})();

/** https://github.com/zloirock/core-js#ecmascript-6-regexp */

(function () {
    RegExp(/./g, 'm'); // => /./m

    /foo/.flags;    // => ''
    /foo/gim.flags; // => 'gim'

    // 'foo'.match({ [Symbol.match]: _ => 1 });     // => 1
    // 'foo'.replace({ [Symbol.replace]: _ => 2 }); // => 2
    // 'foo'.search({ [Symbol.search]: _ => 3 });   // => 3
    // 'foo'.split({ [Symbol.split]: _ => 4 });     // => 4

    RegExp.prototype.toString.call({ source: 'foo', flags: 'bar' }); // => '/foo/bar'
})();