const myMessages = [
  'Sorry po sa mga nagagawa ko minsan (madalas) para malungkot ka :( ',
  'I love you Kukyyyyyy <333 ',
  'I want to be with you for a very long time ;)',
  'Thank you for everything na ginagawa mo para/dahil sakin hehe',
  'Sana maging masaya for the most part ng iyong lifee',
  'You deserve everything na gusto mo love (including me)',
  'You inspire me to be better at everything I do :D',
  'You make me happy palagi, mwa mwa'

  // Add more messages as needed
];

let shownMyMessages = [];

function displayMyMessages() {
  // Check if all messages have been shown
  if (shownMyMessages.length === myMessages.length) {
    resetMyMessages();
    displayMyMessages();
    return;
  }

  // Select a random message that hasn't been shown recently
  let selectedMyMessage;
  do {
    selectedMyMessage = myMessages[Math.floor(Math.random() * myMessages.length)];
  } while (shownMyMessages.includes(selectedMyMessage));

  // Show the message
  document.getElementById('my-message').textContent = selectedMyMessage;

  // Add the message to the list of shown messages
  shownMyMessages.push(selectedMyMessage);
}

function resetMyMessages() {
  shownMyMessages = [];
}


  