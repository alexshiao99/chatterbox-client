// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let message = $('input[name=message]').val();
    Parse.create({text: message, roomname: Rooms.currentRoom, username: App.username});
    $('#message').val('');
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};