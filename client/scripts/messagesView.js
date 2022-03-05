// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.empty();
    let messages = (Rooms.currentRoom === 'lobby')
      ? Messages.getData()
      : Messages.getData().filter(msg => msg.roomname === Rooms.currentRoom);

    messages.forEach(message => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let newMessage = MessageView.render(message);
    MessagesView.$chats.append(newMessage);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    let $user = $(event.target);
    // console.log(event.target.parentElement);
    console.log(event);
    Friends.toggle($user.text());
    console.log('Friends: ', Friends._data);
  }
};