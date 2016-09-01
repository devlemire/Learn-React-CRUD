var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgress://jameslemire@localhost/sandbox'
var massiveInstance = massive.connectSync({connectionString : connectionString});
var app = express();
var db = massiveInstance;

app.use(cors({origin: 'http://localhost:3000/'}));
app.use(bodyParser.json());
app.use(express.static('../public'));

app.post('/api/add/person', function(req, res) {
  db.addPerson([req.body.first_name, req.body.last_name], function(err, r) {
    res.status(200).send('Person created');
  });
})

app.get('/api/people', function(req, res) {
  db.getPeople(function(err, r) {
    res.json(r);
  });
});

app.post('/api/update/person', function(req, res) {
  db.updatePerson([req.body.first_name, req.body.last_name], function(err, r) {
    res.status(200).send('Person updated');
  })
})

app.delete('/api/person/:personId', function(req, res) {
  db.deletePerson([req.params.personId], function(err, r) {
    res.status(200).send('Person deleted');
  })
})

app.listen(3000, function() { console.log('Server started on port 3000'); });
