console.error("WARNING change graph-viz server.js to get config from ansible");

// WARNING: THIS FILE GETS OVER WRITTEN IN PRODUCTION.
// SEE ansible/roles/node-server/templates/config.j2

var _ = require('underscore');

module.exports = function() {
    var defaultOptions = {
        LISTEN_ADDRESS: 'localhost',
        LISTEN_PORT: 10000,
        MONGO_SERVER: 'localhost',
        DATABASE: 'graphistry-dev',
        HOSTNAME: 'localhost'
    };

    var commandLineOptions = process.argv.length > 2 ? JSON.parse(process.argv[2]) : {};

    var options = _.extend(defaultOptions, commandLineOptions);

    return options;
};
