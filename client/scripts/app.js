// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  _fetchInterval: 5000,

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    setInterval(App.fetch, App._fetchInterval);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request :
      data = data.map(obj => {
        var newObj = { ...obj };
        for (key in obj) {
          newObj[key] = filterXSS(obj[key]);
        }
        return newObj;
      });
      Rooms.updateRooms(data);
      Messages.update(data);
      // console.log(data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
