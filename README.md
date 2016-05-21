# Typed ES2015 [![Build Status](https://travis-ci.org/typed-contrib/es2015.svg?branch=master)](https://travis-ci.org/typed-contrib/es2015)

Type definitions for [ES2015](http://www.ecma-international.org/ecma-262/6.0/).

## Installation

Installation can be done using [typings](https://github.com/typings/typings).

From the registry:
```bash
$ typings install env~es2015 --global --save
```

From the source:
```bash
$ typings install github:typed-contrib/es2015#0.1.0 --global --save
```

## Feature-by-Feature Installation

From the registry:
```bash
$ typings install env~es2015-promise env~es2015-math --global --save
```

From the source:
```bash
$ typings install github:typed-contrib/es2015/promise/typings.json#0.1.0 --global --save
```

## Contributing

Contributions are welcome !

```bash
# Installation
# Fork this repo (https://github.com/typed-contrib/es2015)
# Clone the fork (E.g. `https://github.com/<your_username>/es2015.git`)
cd es2015

# Install modules and dependencies
npm install

# Build typings (concatenate by using <reference> tags)
npm run build

# Test typings over core-js and MDN samples
npm test
```

Some resources to help writing Typescript type definitions:
 * [Writing Declaration Files](http://www.typescriptlang.org/docs/handbook/writing-declaration-files.html)
 * [typings examples](https://github.com/typings/typings/blob/master/docs/examples.md)

## Tests

This type definitions are tested using source `core-js` and `MDN` `samples`.
 * [core-js](https://github.com/zloirock/core-js)
 * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/)

## License

MIT

