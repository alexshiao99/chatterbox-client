// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class="username <%= Friends.check(github_handle) ? 'friend' : 'not-friend' %>"><%= github_handle %></div>
        <div class="timestamp"><%= created_at %></div>
        <div class="text"><%= text %></div>
      </div>
    `)

};