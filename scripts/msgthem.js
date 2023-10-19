const themMessages = [
  'Message 1',
  'Message 2',
  'Message 3',
  'Message 4',
  'Message 5'
  // Add more messages as needed
];

let shownThemMessages = [];

function displayThemMessages() {
  // Check if all messages have been shown
  if (shownThemMessages.length === themMessages.length) {
    resetThemMessages();
    displayThemMessages();
    return;
  }

  // Select a random message that hasn't been shown recently
  let selectedThemMessage;
  do {
    selectedThemMessage = themMessages[Math.floor(Math.random() * themMessages.length)];
  } while (shownThemMessages.includes(selectedThemMessage));

  // Show the message
  document.getElementById('them-message').textContent = selectedThemMessage;

  // Add the message to the list of shown messages
  shownThemMessages.push(selectedThemMessage);
}
function resetThemMessages() {
  shownThemMessages = [];
}