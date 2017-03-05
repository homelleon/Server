var http = require('http');
var fs = require('fs');
var events = require('events');
var EventEmitter = events.EventEmitter;

var test = new EventEmitter();
test.on('myEvent', onMyEvent);

function onMyEvent(param){
	console.log(arguments[0].name, arguments[1]);
}

var server = http.createServer().listen(8080);

server.on('request', function(req, res){
	if(req.url == '/watashihaebidesu'){
		req.connection.destroy();
		server.close();
	}else{
		res.writeHead(200,
		{'Content-type':'text/html;charset=utf-8'});
		//res.write('Hello!');
		fs.readFile('app/index.html', function(err, content){	
			res.write(decodeURIComponent(content));
			res.end();
		});	
		{'Content-type':'text/css;charset=utf-8'});
		fs.readFile('app/css/style.css', function(err, content){	
			res.write(decodeURIComponent(content));
			res.end();
		});
	}
});

server.on('request', function(req, res){
	var x = require('url').parse(req.url, true);
	console.log(x);
	console.log('[CONSOLE]: Request:', req.method, req.url);
	console.log('[CONSOLE]: STATUS:', res.statusCode);
});

server.on('listening', function(){
	console.log('[CONSOLE]: Listening on 8080...');
});

server.on('connection', function(){
	console.log('[CONSOLE]: Connect...');
});

server.on('close', function(){
	console.log('[CONSOLE]: stop');
});

