var config = require("../settings/server");
var program = require("commander");
var server = require("../server/fibber");

program
    .command("start")
    .description("Starts the node server that will be catering data for all clients")
    .option("-h, --host <ip>", "host")
    .option("-p, --port <port>", "port")
    .action(function() {
        var host = program.host || process.env.IP || config.host;
        var port = program.port || process.env.PORT || config.port;
        server(port, host);
    });