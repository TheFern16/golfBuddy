const bcrypt = require('bcrypt');
const Bag = require('../db/models/bag.js');
const statsController = require('../controllers/statsController.js');
const saltRounds = require('../secret/secret.js');

module.exports = {
  createUser: function(req, res) {
    Bag.find({ username: req.body.username }, (err, response) => {
      if (err) return console.error(err);
      if (response.length > 0) return res.json('USER EXISTS - Please choose a different username.');
      bcrypt.genSalt(saltRounds.saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
          var newBag = new Bag();
          newBag.username = req.body.username;
          newBag.password = hash;
          newBag.save((err, data) => {
            if (err) return console.error(err);
            data.password = '';
            res.json(data);
          });
        });
      });
    });
  },
  login: function(req, res) {
    Bag.find({ username: req.body.username }, (err, response) => {
      if (err) return console.error(err);
      if (response.length === 0) {
        return res.json(response);
      }
      bcrypt.compare(req.body.password, response[0].password, (err, passwordMatch) => {
        if (!passwordMatch) return res.send('PASSWORDS DID NOT MATCH - Please re enter your password.')
        if (passwordMatch) {
          response[0].password = '';
          return res.json(response[0]);
        }
      });
    });
  }
};