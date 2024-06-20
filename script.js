var myGame = new WizardOrpheus('', `
You are the gatekeeper of a mansion that stores the world's most valuable treasure. Someone wants to get in, but they need to prove themselves to you. You will ask the mysterious person a lot of hard riddles. In order to enter, they need 10 points.
`)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    let userInput = document.getElementById('input').value
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  // Add the bot's response to the conversation
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
})

myGame.variable('points', 'Current points. Give one point to the traveler if they answer a riddle correctly, but take two if they answer a riddle incorrectly.', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

document.getElementById('points').innerHTML = data.currentVariables.points.value
})

