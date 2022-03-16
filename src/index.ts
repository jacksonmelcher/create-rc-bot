#!/usr/bin/env node
import commander from "commander";
import chalk from "chalk";
import * as packageJson from "../package.json";

// let proje÷ctName;

// function isUsingYarn() {
//   return (process.env.npm_config_user_agent || '').indexOf('yarn') === 0;
// }

// console.log(pack.version);
function init() {
  let projectName: string;

  const program = new commander.Command(packageJson.name)
    .version(packageJson.version)
    .arguments("<project-directory>")
    .usage(`${chalk.green("<project-directory>")}`)
    .action((name) => {
      projectName = name;
    })
    .parse(process.argv)
    .allowUnknownOption()
    .on("--help", () => {
      console.log(
        `    Only ${chalk.green("<project-directory>")} is required.`
      );
      console.log();
      console.log(
        "    If you have any problems, do not hesitate to file an issue:"
      );
      console.log(`      ${chalk.cyan(packageJson.bugs.url)}`);
      console.log();
    });

  if (typeof projectName === "undefined") {
    console.error("Please specify the project directory:");
    console.log(
      `  ${chalk.cyan(program.name())} ${chalk.green("<project-directory>")}`
    );
    console.log();
    console.log("For example:");
    console.log(
      `  ${chalk.cyan(program.name())} ${chalk.green("my-ringcentral-bot")}`
    );
    console.log();
    console.log(
      `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
    );
    process.exit(1);
  }
  process.exit(1);
}

init();
