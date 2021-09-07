const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "base number for the table",
  })
  .option("l", {
    alias: "list",
    demandOption: false,
    type: "boolean",
    default: false,
    description: "print on the console the result",
  })
  .option("u", {
    alias: "until",
    demandOption: false,
    default: 10,
    description: "set the top limit of the table",
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "Please enter a number as a parameter of -b or --base";
    }
    return true;
  }).argv;

module.exports = {
  argv,
};
