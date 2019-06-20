var ex = require("express");
var app = ex();
app.use(require("serve-static")(__dirname + "/static"));
var server = require('http').createServer(app);
server.listen(80, function() {
  console.log(`Server running~`);
});
