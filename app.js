var express = require('express');

var backend = express();

backend.get('/', function(req, res){
    res.sendFile(__dirname + "/html/index.html")
});

backend.listen(8090, function(){console.log('Servidor funcionando porta 8090')});

