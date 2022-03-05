// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.empty();
    Rooms._data.forEach(roomName => RoomsView.renderRoom(roomName));
    RoomsView.$select.val(Rooms.currentRoom);
  },

  renderRoom: function(roomName) {
    // TODO: Render out a single room.
    let $option = $('<option>').val(roomName).text(roomName);
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms.changeRooms(event.target.value);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    let newRoomName = prompt('Enter New Room Name');
    if (Rooms._data.has(newRoomName)) {
      alert('Room already exists!');
    } else {
      Rooms.addRoom(newRoomName);
    }
  }

};
