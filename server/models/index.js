var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('models messages.get');
      var queryStr = "select messages.id, messages.text, messages.roomname from messages \
                      left outer join users on (messages.userId = users.id) \
                      order by messages.id desc";
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      var queryStr = "insert into messages(text, userId, roomname) \
                      value (?, 0, ?)";
      //(select id from users where username = ? limit 1);
      db.query(queryStr, data, function(err, results) {
        callback(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

