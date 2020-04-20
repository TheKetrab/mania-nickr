// ----- pkg -----
const fs           = require('fs');
const http         = require('http');
//const https        = require('https');
const express      = require('express');
const cookieParser = require('cookie-parser');

var privateKey  = fs.readFileSync('server/cert/key.pem', 'utf8');
var certificate = fs.readFileSync('server/cert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var app = express();

var httpServer = http.createServer(app);
httpServer.listen(process.env.PORT || 5000);

//var httpsServer = https.createServer(credentials, app);
//httpsServer.listen(process.env.PORT || 5000);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded( { extended:true } ));
app.use(express.static( 'public' ))
app.use(cookieParser());

app.get("/", (req, res) => {
    var savedNick = req.cookies['nick'];
    var visited = req.cookies['visited'];
    if (!visited) {
        addVisitor();
        res.cookie('visited',true,{maxAge: 900000}) // 1000*60*15=15min
    }
    res.render('index', { savedNick } );
});

app.post("/donate", (req, res) => {
    addDonoor();
    res.redirect("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QEM6B9Z67JKGS&source=url");
});

console.log("Server set up.");


const visitorsPath = 'server/visitors.txt';
function addVisitor() {
    console.log("adding visitor");
    var num = fs.readFileSync(visitorsPath, 'utf8');
    num = +num + 1;
    fs.writeFileSync(visitorsPath,num.toString() + '\n');
}

const doonorsPath = 'server/donoors.txt';
function addDonoor() {
    console.log("adding donoor");
    var num = fs.readFileSync(doonorsPath, 'utf8');
    num = +num + 1;
    fs.writeFileSync(doonorsPath,num.toString() + '\n');
}
