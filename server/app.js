// ----- pkg -----
const fs           = require('fs');
const http         = require('http');
const https        = require('https');
const express      = require('express');
const cookieParser = require('cookie-parser');

var privateKey  = fs.readFileSync('server/cert/key.pem', 'utf8');
var certificate = fs.readFileSync('server/cert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(3000);
//httpsServer.listen(process.env.PORT || 3000);
httpsServer.listen(3001);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded( { extended:true } ));
app.use(express.static( 'public' ))
app.use(cookieParser());

app.get("/", (req, res) => {
    var savedNick = req.cookies['nick'];
    res.render('index', { savedNick } );
});

console.log("Server set up.");
