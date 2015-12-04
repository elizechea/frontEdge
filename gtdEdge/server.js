"use strict";

var http = require('http'),
	url = require('url'),
	path = require('path'),
	fs = require('fs');

var mimeTypes = {
	"html": "text/html",
	"png": "image/png",
	"js": "text/javascript",
	"css": "text/css"
};

http.createServer(staticServer).listen(3000);

function staticServer(req, res) {
	var urlParseada = url.parse(req.url);
	var pathname = urlParseada.pathname;
	fileServer(res, pathname);
}

function fileServer(res, pathname) {
	if(pathname==="/") pathname = "/index.html";
	var filename = path.join(process.cwd(), pathname);
	var extension = path.extname(filename).split(".")[1];
	if (!extension) {
		extension = "html";
		filename += "." + extension;
	}
	fs.exists(filename, ifExists);

	function ifExists(exists) {
		if (exists) {
			sendFile(res, extension, filename);
		} else {
			console.log("no encuentro: " + filename);
			notFound(res);
		}
	}
}

function sendFile(res, extension, filename) {
	var mimeType = mimeTypes[extension];
	res.writeHead(200, {
		'Content-Type': mimeType
	});
	fs.createReadStream(filename).pipe(res);
}

function notFound(res) {
	res.writeHead(404, {
		'Content-Type': 'text/html'
	});
	res.write("<html>");
	res.write("<head>");
	res.write("<meta charset='utf-8'>");
	res.write("<title>Front Edge Server</title>");
	res.write("</head>");
	res.write("<body>");
	res.write('<h1>404</h1> Nada por aquí :-(');
	res.write("</body>");
	res.write("</html>");
	res.end();
}
