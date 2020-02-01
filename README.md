file-size
=========

a super simple cli for file-size limit

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/file-size.svg)](https://npmjs.org/package/file-size)
[![Downloads/week](https://img.shields.io/npm/dw/file-size.svg)](https://npmjs.org/package/file-size)
[![License](https://img.shields.io/npm/l/file-size.svg)](https://github.com/cbbfcd/file-size/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->


# Usage
<!-- usage -->
```sh-session
$ npm install --save-dev file-size
```

**Super simple, Just two steps**

- add filesize in package.json

```json
{
  "name": "file-size",
  "description": "a super simple cli for file-size limit",
  "version": "1.0.0",
  "filesize": [
    {
      "maxSize": "1kb", // string, can be "1kb", "1mb", "1024" ...
      // also can path.resolve(__dirname, "./sss")
      "path": "./test/index.test.ts", 
      "level": 9 // optional, default is 9
    }
  ]
}
```

- add script in package.json

```json
{
  "scripts": {
    "filesize": "npx file-size"
  }
}
```
- demos

[demo](https://github.com/cbbfcd/didyoumean3)

<!-- usagestop -->


# Commands
<!-- commands -->
It works well now, maybe we need more in future, not now
<!-- commandsstop -->
