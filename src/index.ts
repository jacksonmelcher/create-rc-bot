#!/usr/bin/env node
import commander, { description } from "commander";
import chalk from "chalk";
import * as packageJson from "../package.json";
import { clear } from "console";
import figlet from "figlet";
import fs from "fs-extra";
import path from "path";

// let proje÷ctName;

function isUsingYarn() {
  return (process.env.npm_config_user_agent || "").indexOf("yarn") === 0;
}

// console.log(pack.version);
// function init() {
//   let projectName;

//   const program = new commander.Command(packageJson.name)
//     .version(packageJson.version)
//     .arguments("<project-directory>")
//     .usage(`${chalk.green("<project-directory>")}`)
//     .action((name) => {
//       projectName = name;
//     })
//     .parse(process.argv)
//     .allowUnknownOption()
//     .on("--help", () => {
//       console.log(
//         `    Only ${chalk.green("<project-directory>")} is required.`
//       );
//       console.log();
//       console.log(
//         `    If you have any problems, do not hesitate to file an issue:`
//       );
//       console.log(`      ${chalk.cyan(packageJson.bugs.url)}`);
//       console.log();
//     });

//   if (typeof projectName === "undefined") {
//     console.error("Please specify the project directory:");
//     console.log(
//       `  ${chalk.cyan(program.name())} ${chalk.green("<project-directory>")}`
//     );
//     console.log();
//     console.log("For example:");
//     console.log(
//       `  ${chalk.cyan(program.name())} ${chalk.green("my-ringcentral-bot")}`
//     );
//     console.log();
//     console.log(
//       `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
//     );
//     process.exit(1);
//   }
//   process.exit(1);
// }

// init();
clear();

console.log(
  chalk.blue(
    figlet.textSync("create-rc-bot", {
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  )
);
let projectName;

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
    console.log(`    Only ${chalk.green("<project-directory>")} is required.`);
    console.log();
    console.log(
      `    If you have any problems, do not hesitate to file an issue:`
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

// let package = {
//   name: projectName,
//   version: "1.0.0",
//   description: description === undefined ? "" : description,
//   main: "src/express.js",
//   scripts: {
//     start: "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/express.ts",
//     build: "rm -rf dist && tsc",
//   },
//   dependencies: {
//     axios: "^0.26.1",
//     pg: "^8.7.3",
//     "ringcentral-chatbot": "^1.11.0",
//   },
//   devDependencies: {
//     "@types/node": "^17.0.21",
//     "dotenv-override-true": "^6.2.2",
//     ngrok: "^4.3.1",
//     sqlite3: "^5.0.2",
//     "ts-node": "^10.7.0",
//     "ts-node-dev": "^1.1.8",
//     typescript: "^4.6.2",
//     "yarn-upgrade-all": "^0.6.1",
//   },
//   repository: {
//     type: "git",
//     url: "git+https://github.com/jacksonmelcher/ringcentral-bot-template-ts.git",
//   },
//   keywords: ["template", "ringcentral", "bot", "typescript"],
//   author: "Jackson Melcher",
//   license: "MIT",
//   bugs: {
//     url: "https://github.com/jacksonmelcher/ringcentral-bot-template-ts/issues",
//   },
//   homepage:
//     "https://github.com/jacksonmelcher/ringcentral-bot-template-ts#readme",
// };

// console.log(__dirname);
fs.copySync(path.join(__dirname, "..", "main-template"), projectName);
