// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
    // console.log(message);
    // let messageObj = {
    //   username: App.username,
    //   text: message,
    //   roomname: Rooms.currentRoom
    // };
    $.ajax({
      url: Parse.server,
      type: 'POST',
      // data: { order: '-createdAt' },
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB || function(res) {
        // console.log(res[0]);
        Messages.add(res[0]);
      },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};