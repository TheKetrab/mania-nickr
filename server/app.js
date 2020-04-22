// ----- pkg -----
const fs           = require('fs');
const http         = require('http');
//const https        = require('https');
const express      = require('express');
const expressip    = require('express-ip');
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
app.use(expressip().getIpInfoMiddleware);
app.use(express.urlencoded( { extended:true } ));
app.use(express.static( 'public' ))
app.use(cookieParser());

app.get("/", (req, res) => {
    var visited = req.cookies['visited'];
    if (!visited) {
        let country = req.ipInfo['country'];
        let date = getDate();
        addVisitor(date,country);
        res.cookie('visited',true,{maxAge: 900000}) // 1000*60*15=15min
    }

    var savedNick = req.cookies['nick'];
    res.render('index', { savedNick } );
});

app.get("/31f8ff737d3501130026", (req, res) => {
    var visitors = fs.readFileSync(visitorsPath, 'utf8');
    var donoors = fs.readFileSync(donoorsPath, 'utf8');
    var msg = `visitors:${visitors}donoors: ${donoors}`;
    res.render('index',{ msg });
});


app.post("/donate", (req, res) => {
    addDonoor();
    res.redirect("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QEM6B9Z67JKGS&source=url");
});

console.log("Server set up.");


const visitorsPath = 'server/visitors.json';
function addVisitor(date,country) {

    if (!country) country = "UNKNOWN";
    if (!date) date = "UNKNOWN";

    console.log("adding visitor");
    var visitors = JSON.parse(fs.readFileSync(visitorsPath, 'utf8'));

    var countryCnt = visitors.Countries[country];
    if (countryCnt) visitors.Countries[country] = countryCnt+1;
    else visitors.Countries[country] = 1;

    var dateCnt = visitors.Visitors[date];
    if (dateCnt) visitors.Visitors[date] = dateCnt+1;
    else visitors.Visitors[date] = 1;

    fs.writeFileSync(visitorsPath,JSON.stringify(visitors));
}

const donoorsPath = 'server/donoors.json';
function addDonoor() {
    console.log("adding donoor");
    var donoors = JSON.parse(fs.readFileSync(donoorsPath, 'utf8'));
    donoors['Donoors'] += 1;
    fs.writeFileSync(donoorsPath,JSON.stringify(donoors));
}


function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return `${yyyy}/${mm}/${dd}`;
}

