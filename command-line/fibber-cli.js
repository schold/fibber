var program = require("commander");
var pkg = require("../package.json");

// Server commands are defined here
require("./start");


program.parse(process.argv);

// If no arguments are given, default to "start" directive
if (!program.args.length) {
    program.parse(process.argv.concat("start"));
}