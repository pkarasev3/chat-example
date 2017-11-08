var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);        
    console.log('sending message: ' + msg)        
  });
  console.log('some clown connected...');
  var interval = setInterval(function(str1, str2) {
  socket.emit( str1 + str2 );
  console.log('grbg');
    }, 200, "Hello.", "How are you?");
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});



