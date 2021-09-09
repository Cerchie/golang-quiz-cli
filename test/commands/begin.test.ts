import {expect, test} from '@oclif/test'

describe('begin', () => {
  test
    .stdout()
    .command(['begin', '--stage', 'arrays'])
    .it('runs arrays --stage arrays', (ctx) => {
      expect(ctx.stdout).to.contain(
        'Can the length of an array in Golang be changed?'
      )
    })
  test
    .stdout()
    .command(['begin', '--stage', 'maps'])
    .it('runs maps --stage maps', (ctx) => {
      expect(ctx.stdout).to.contain(
        'Do maps consume more or less memory than arrays'
      )
    })
})
