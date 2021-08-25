import { Command } from "@oclif/command";

export default class Begin extends Command {
  static description = "this command starts the quiz game";

  static args = [{ name: "file" }];

  async run() {
    const { args } = this.parse(Begin);

    this.log(`Let's begin.`);
  }
}
