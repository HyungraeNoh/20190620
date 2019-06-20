var app = {
  urlPattern : () => {
    var app = require("express")();
    app.use(require("serve-static")(require("path").join(__dirname, "../static")));
    return app;
  },
  server : () => {
    return require('http').createServer(app.urlPattern());
  },
  start : (port) => {
    app.server().listen(port, () => {console.log('Server running~');});
  }
}

module.exports = app;
