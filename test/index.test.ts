import {expect, test} from '@oclif/test'
import path from 'path'

import cmd = require('../src')

describe('file-size unit test', () => {
  test
  .stdout()
  .do(() => cmd.run())
  .it('runs file-size success via package.json: gzip size less than the max size', ctx => {
    expect(ctx.stdout).to.contain('less than')
  })

  const successOpts = {
    packageJson: {
      filesize: [
        {
          maxSize: '1kb',
          path: path.resolve(__dirname, './index.test.ts'),
        },
      ],
    },
  }

  test
  .stdout()
  .do(() => cmd.test(successOpts))
  .it('runs file-size success: gzip size less than the max size', ctx => {
    expect(ctx.stdout).to.contain('less than')
  })

  const errorOpts = {
    packageJson: {
      filesize: [
        {
          maxSize: '100',
          path: path.resolve(__dirname, './index.test.ts'),
        },
      ],
    },
  }

  test
  .stderr()
  .do(() => cmd.test(errorOpts))
  .exit(6)
  .it('runs file-size error: gzip size more than the max size')

  test
  .stderr()
  .do(() => cmd.test())
  .exit(4)
  .it('runs file-size error: no package.json found')

  test
  .stderr()
  .do(() => cmd.test({packageJson: {}}))
  .exit(5)
  .it('runs file-size error: no filesize property in package.json found')

  test
  .stderr()
  .do(() => cmd.test({packageJson: {filesize: []}}))
  .exit(5)
  .it('runs file-size error: filesize can not be empty')
})
