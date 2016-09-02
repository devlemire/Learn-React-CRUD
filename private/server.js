var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgress://jameslemire@localhost/sandbox";
var massiveInstance = massive.connectSync({connectionString : connectionString});
var config = require('./config.js');

var app = module.exports = express();
app.set('db', massiveInstance);

var peopleCtrl = require('./controller/peopleCtrl.js');

app.use(cors(config.corsOptions));
app.use(bodyParser.json());
app.use(express.static('../public'));

app.post('/api/people', peopleCtrl.createPerson);
app.get('/api/people', peopleCtrl.readPeople);
app.put('/api/person/:personId', peopleCtrl.updatePerson);
app.delete('/api/person/:personId', peopleCtrl.deletePerson);

app.listen(config.port, function() { console.log('Server initiated on port', config.port); });
