var _ = require("lodash");
var config = require("../settings/server");
var connect = require("connect");
var fs = require("fs");
var io = require("socket.io");

var sockets = null;

module.exports = function(port, host) {
    config.port = port;
    config.host = host;

    var app = connect()
        .use(index)
        .use(connect.static("client"))
        .listen(config.port, config.host);

    sockets = io(app);
    sockets.on("connect", function(socket) {
        init(socket);
    });

    console.log("");
    console.log("Fibber is now running on http://" + config.host + ":" + config.port + "/");
    console.log("Press CTRL-C to stop");
    console.log("");
}

function index(req, res, next) {
    if (req.url != "/") return next();
    return fs.readFile("../client/index.html", "utf-8", function(err, file) {
        var data = _.merge(
            config
        );
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(_.template(
            file,
            data
        ));
    });
}

function init(socket, client) {

}