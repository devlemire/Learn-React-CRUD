var app = require('../server.js');
var db = app.get('db');

module.exports = {
  createPerson: function(req, res) {
    db.createPerson([req.body.first_name, req.body.last_name], function(err, r) {
      db.readPeople(function(err, r) {
        res.json(r);
      })
    })
  },
  readPeople: function(req, res) {
    db.readPeople(function(err, r) {
      res.json(r);
    })
  },
  updatePerson: function(req, res) {
    //req.params.personId
    db.updatePerson([req.params.personId, req.body.first_name, req.body.last_name], function(err, r) {
      db.readPeople(function(err, r) {
        res.json(r);
      })
    })
  },
  deletePerson: function(req, res) {
    //req.params.personId
    db.deletePerson([req.params.personId], function(err, r) {
      db.readPeople(function(err, r) {
        res.json(r);
      })
    })
  }
}
