ltc Message
=======

[![NPM Package](https://img.shields.io/npm/v/ltc-message.svg?style=flat-square)](https://www.npmjs.org/package/ltc-message)
[![Build Status](https://img.shields.io/travis/owstack/ltc-message.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/ltc-message)
[![Coverage Status](https://img.shields.io/coveralls/owstack/ltc-message.svg?style=flat-square)](https://coveralls.io/r/owstack/ltc-message?branch=master)

Adds support for verifying and signing bitcoin messages in [Node.js](http://nodejs.org/) and web browsers.

## Getting Started

```sh
npm install @owstack/ltc-message
```

To sign a message:

```javascript
var ltcLib = require('@owstack/ltc-lib');
var Message = require('@owstack/ltc-message');

var privateKey = ltc.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/owstack/ltc/blob/master/CONTRIBUTING.md) on the main ltc repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/ltc/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack.

