// const chalk = require("chalk");

function log(print, color) {
  console.log(print, color);
  // const log = console.log;
  // switch (color) {
  //   case "green":
  //     log(chalk.green(print));
  //     break;
  //   case "yellow":
  //     log(chalk.yellow(print));
  //     break;
  //   case "blue":
  //     log(chalk.blue(print));
  //     break;
  //   case "magenta":
  //     log(chalk.magenta(print));
  //     break;
  //   case "cyan":
  //     log(chalk.cyan(print));
  //     break;
  //   case "red":
  //     log(chalk.red(print));
  //     break;
  //   default:
  //     log(chalk.white(print));
  // }
}

module.exports = log;
