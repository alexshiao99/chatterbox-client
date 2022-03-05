// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: new Set(),

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  add: function(user) {
    Friends._data.add(user);
    // re-render Messages?
  },

  toggle: function(user) {
    if (Friends._data.has(user)) {
      Friends._data.delete(user);
    } else {
      Friends._data.add(user);
    }
    // re-render Messages?
    MessagesView.render();
  },

  check: function(user) {
    return Friends._data.has(user);
  }

};