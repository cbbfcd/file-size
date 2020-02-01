import {Command, flags} from '@oclif/command'
import readPkgUp, {NormalizedReadResult} from 'read-pkg-up'
import gzipSize from 'gzip-size'
import {cpus} from 'os'
import {green, red} from 'kleur'
import bytes from 'bytes'

type Option = {
  path: string;
  maxSize: string;
  // https://nodejs.org/api/zlib.html#zlib_class_options
  level?: number;
}

const COMPRESSION_CONCURRENCY = cpus().length

class FileSize extends Command {
  static description = 'a super simple cli for file-size limit'

  static flags = {
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
  }

  async run() {
    // const { flags } = this.parse(FileSize)
    await this.compress(await readPkgUp())
  }

  async compress(pkg?: NormalizedReadResult) {
    if (!pkg)
      this.error(red('No recent package.json found'), {exit: 4})

    const {packageJson: {filesize = []} = {}} = pkg

    if (!(filesize as ReadonlyArray<Option>).length) // eslint-disable-line unicorn/explicit-length-check
      this.error(red('Must provide an array of filesize in package.json'), {exit: 5})

    for (let i = 0, len = filesize.length; i < len; i += COMPRESSION_CONCURRENCY)
      // An asynchronously resolved Promise if the iterable passed contains no promises.
      await Promise.all(filesize.slice(i, i + COMPRESSION_CONCURRENCY).map((opt: Option) => this.handler(opt))) // eslint-disable-line no-await-in-loop
  }

  async handler(opt: Option) {
    const {path, maxSize, level = 9} = opt

    const gs = await gzipSize.file(path, {level})
    const ms = bytes(`${maxSize}`)

    gs > ms ?
      this.error(red(`${path}: gzip size ${gs} more than the maxSize ${ms}`), {exit: 6}) :
      this.log(green(`${path}: gzip size ${gs} less than the maxSize ${ms}`))
  }

  // just for unit test
  static async test(opt?: any) {
    await this.prototype.compress(opt)
  }
}

export = FileSize
