import Command, {flags} from '@oclif/command'
import cli from 'cli-ux'

import * as inquirer from 'inquirer'
const chalk = require('chalk')

export default class Begin extends Command {
  static flags = {
    stage: flags.string({options: ['arrays', 'maps']}),
  }

  static description = 'this command starts the quiz game'

  async run() {
    const {flags} = this.parse(Begin)
    let stage = flags.stage
    if (!stage) {
      const responses: any = await inquirer.prompt([
        {
          name: 'stage',
          message:
            'Welcome to your Golang quiz! Would you prefer a quiz on arrays or maps?',
          type: 'list',
          choices: [{name: 'arrays'}, {name: 'maps'}],
        },
      ])
      stage = responses.stage
    }

    if (stage !== 'arrays' && stage !== 'maps') {
      this.error(
        chalk.red('Please enter a value of either "maps" or "arrays".')
      )
    }
    this.log(`Great, we'll test your knowledge on ${stage}.`)

    if (stage === 'arrays') {
      const answer1 = await cli.prompt(
        'Can the length of an array in Golang be changed?'
      )
      const answer2 = await cli.prompt(
        "Let's say that we have two arrays of different lengths. Are they the same type?"
      )
      const answer3 = await cli.prompt(
        'In Golang, everything is passed by value. What does this mean for assigning the value of an array to another variable?'
      )
      const data = [
        {your_answer: answer1, correct_answer: 'no'},
        {your_answer: answer2, correct_answer: 'no'},
        {your_answer: answer3, correct_answer: 'placeholder'},
      ]

      cli.table(data, {
        your_answer: {
          minWidth: 2,
        },
        correct_answer: {
          minWidth: 1,
        },
      })

      // output:

      // 0 1 2         3         4         5
      // ─ ─ ───────── ───────── ───────── ─────────
      // n o undefined undefined undefined undefined
      // n o undefined undefined undefined undefined
      // a s f         a         f         g
    }
  }
}
// https://www.sohamkamani.com/golang/arrays-vs-slices/ <- questions source
