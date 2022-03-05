// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  add: function(message) {
    Messages._data[message['message_id']] = message;
    MessagesView.renderMessage(message);
  },

  update: function(data) {
    data.forEach(function(message) {
      let messageId = message['message_id'];
      if (!(messageId in Messages._data)) {
        Messages.add(message);
      }
    });
    MessagesView.render();
  },

  getData: function() {
    let res = [];

    for (let key in Messages._data) {
      res.push(Messages._data[key]);
    }

    return res;
  }
};