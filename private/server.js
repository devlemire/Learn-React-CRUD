var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgress://jameslemire@localhost/sandbox'
var massiveInstance = massive.connectSync({connectionString : connectionString});
var app = express();
app.set('db', massiveInstance);

app.use(cors({origin: 'http://localhost:3000/'}));
app.use(bodyParser.json());

app.get('/api/data', function() {

});

app.listen(3000, function() { console.log('Server started on port 3000'); });
