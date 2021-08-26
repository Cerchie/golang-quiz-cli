import { Command } from "@oclif/command";
import cli from "cli-ux";
const chalk = require("chalk");
export default class Begin extends Command {
  static description = "this command starts the quiz game";

  async run() {
    const answer = await cli.prompt(
      "Welcome to your Golang quiz! Would you prefer a quiz on arrays or maps?"
    );
    if (answer !== "arrays" || answer !== "maps") {
      this.error(
        chalk.red('Please enter a value of either "maps" or "arrays".')
      );
    }
    this.log(`Great, we'll test your knowledge on ${answer}.`);
  }
}
