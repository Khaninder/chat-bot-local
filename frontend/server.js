var express = require('express');
const app = express();
var path = require('path')
const server = require('http').createServer(app);
var cors = require('cors');
const router = express.Router();
const PORT = 3000;
server.listen(PORT);
console.log(`Server is running on port ${PORT}`);

app.use(cors())
app.use(express.static(path.join(__dirname, 'static')));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const fs = require('fs');

// const { Client } = require('pg');
// const connectionString = process.env.DATABASE_URL;
// const client = new Client({
//     connectionString: connectionString,
// });

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/consent.html');
});

app.get('/chatbot', (req, res) => {
    res.sendFile(__dirname + '/chatbot.html');
});

app.post('/panas', function(req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var uid = req.body.uid;
    console.log(firstName);
    console.log(lastName);
    console.log(uid);
});

app.get('/panas', function(req, res) {
    res.sendFile(__dirname + '/panas.html');
});

//app.post('http://chatbot_ui:3000/ajax_check', function (req, res) {
//    var panasscore = req.body.score;
//    let data = JSON.stringify({ score: panasscore });
//    fs.writeFileSync('panas.json', data);
//})

app.post('/panas-score', function(req, res) {
    global.panasscore = req.body;
    console.log(global.panasscore);
})

app.get('/panas-score', function(req, res) {
    res.end(JSON.stringify(global.panasscore));
})