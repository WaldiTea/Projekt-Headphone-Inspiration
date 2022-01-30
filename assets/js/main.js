let submitButton = document.getElementById('submit-button');
let inputName = document.getElementById('input-name');
let inputEmail = document.getElementById('input-email');
let inputMessage = document.getElementById('input-message');
let checkNewsletter = document.getElementById('check-newsletter');

let subscription;

function subscribe() {
  console.log('Name: ' + inputName.value);
  console.log('Email: ' + inputEmail.value);
  console.log('Message: ' + inputMessage.value);
  console.log('Subscription: ' + checkNewsletter.checked);
}
