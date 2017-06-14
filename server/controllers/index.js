var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results) {
        // res.json(results);
        console.log(results);
        res.send(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var data = '';
      req.on('data', function(chunk) {
        data += chunk;
      });
      req.on('end', function() {
        data = JSON.parse(data); 
        var params = [ data.text, data.username, data.roomname ];
        models.messages.post(params, function(err, results) {
          if (err) {
            throw err;
          }
          res.sendStatus(201);
        });
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      
    },
    post: function (req, res) {
      
    }
  }
};

