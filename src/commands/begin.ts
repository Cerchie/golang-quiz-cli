import { Command } from "@oclif/command";
import cli from "cli-ux";
const chalk = require("chalk");
export default class Begin extends Command {
  static description = "this command starts the quiz game";

  async run() {
    const answer = await cli.prompt(
      "Welcome to your Golang quiz! Would you prefer a quiz on arrays or maps?"
    );
    if (answer !== "arrays" && answer !== "maps") {
      this.error(
        chalk.red('Please enter a value of either "maps" or "arrays".')
      );
    }
    this.log(`Great, we'll test your knowledge on ${answer}.`);

    if (answer == "arrays") {
      const answer1 = await cli.prompt(
        "Can the length of an array in Golang be changed?"
      );
      const answer2 = await cli.prompt(
        "Let's say that we have two arrays of different lengths. Are they the same type?"
      );
      const answer3 = await cli.prompt(
        "In Golang, everything is passed by value. What does this mean for assigning the value of an array to another variable?"
      );
      const data = [answer1, answer2, answer3];
      cli.table(data, answer);
    }
  }
}
// https://www.sohamkamani.com/golang/arrays-vs-slices/ <- questions source
