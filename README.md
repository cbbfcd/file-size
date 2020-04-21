simple-file-size
=========

a super simple cli for file-size limit

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/file-size.svg)](https://npmjs.org/package/file-size)
[![Downloads/week](https://img.shields.io/npm/dw/file-size.svg)](https://npmjs.org/package/file-size)
[![Build Status](https://travis-ci.org/cbbfcd/file-size.svg?branch=master)](https://travis-ci.org/cbbfcd/file-size)
[![License](https://img.shields.io/npm/l/file-size.svg)](https://github.com/cbbfcd/file-size/blob/master/package.json) [![Greenkeeper badge](https://badges.greenkeeper.io/cbbfcd/file-size.svg)](https://greenkeeper.io/)


# Usage
```sh-session
$ npm install --save-dev simple-file-size
```

**Super simple, Just two steps**

- add filesize in package.json

```json
{
  "name": "simple-file-size",
  "description": "a super simple cli for file-size limit",
  "version": "1.0.0",
  "filesize": [
    {
      "maxSize": "1kb",
      "path": "./test/index.test.ts", 
      "level": 9
    }
  ]
}
```
> - maxSize must be a string like '1kb', '1mb', '10244'
> - path, as you know, like './index.ts', path.resolve(__dirname, './a.js')
> - level is optional, default is 9


- add script in package.json

```json
{
  "scripts": {
    "filesize": "npx simple-file-size"
  }
}
```
**or download the simple-file-size in devDepencies, and then:**

```json
"scripts": {
    "filesize": "filesize"
  }
```
- demos

[demo](https://github.com/cbbfcd/didyoumean3/blob/master/package.json)

# Commands

It works well now, maybe we need more in future, not now
