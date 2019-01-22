var url = require('url');
var fs = require('fs');
//var mod1 = require('./module1');
//var mod2 = require('./module2');

function renderHTML(path, response){
	fs.readFile(path, null, function(error, data){
		if (error){
			response.writeHead(404);
			response.write("file not found sucka");

		}else{
			response.write(data);
			//response.write(mod2.myStr);
		}
		response.end();
	});
}
module.exports = {
	onRequest: function(request, response){
		response.writeHead(200, {'Content-Type': 'text/html'});
		var path = url.parse(request.url).pathname;
		switch(path){
			case '/':
				renderHTML('./index.html', response); 
				//mod1.myF(); 
				break;
			case '/login':
				renderHTML('./pages/login.html', response); break;
			case '/dashboard':
				renderHTML('./pages/dashboard.html', response); 
				break;				
				default:
				response.writeHead(404);
				response.write("request path not defined");
				response.end();

		}

	}
}
