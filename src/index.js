var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url==="/welcome"){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("Welcome to Dominos!");
        res.end();
    }
    else if(req.url==="/contact"){
        res.writeHead(200, {'Content-Type':'application/json'});
        const contact={
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }
        res.write(JSON.stringify(contact));
        res.end();
    }
    else{
        res.StatusCode=404;
        res.end();
    }
}

httpServer.listen(8081);
module.exports = httpServer;