// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(['lobby']),

  currentRoom: 'lobby',

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  addRoom: function(roomName) {
    if (Rooms._data.has(roomName)) { return; }
    Rooms._data.add(roomName);
    RoomsView.renderRoom(roomName);
  },

  updateRooms: function(data) {
    let roomNames = _.uniq(_.pluck(data, 'roomname'));
    roomNames.forEach(room => Rooms._data.add(room));
    RoomsView.render();
    // We probably only need to re-render if _data has actually changed
  },

  changeRooms: function(roomName) {
    if (roomName === Rooms.currentRoom) { return; }
    Rooms.currentRoom = roomName;
    console.log(Rooms.currentRoom);
    MessagesView.render();
  }
};