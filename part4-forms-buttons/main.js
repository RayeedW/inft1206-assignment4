// script for Part 4

const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const outputText = document.getElementById('outputText');

// When the button is clicked, show a message using the name from the input
submitBtn.addEventListener('click', () => {
  const name = nameInput.value;

  if (name.trim() === '') {
    outputText.textContent = 'Please enter your name first.';
  } else {
    outputText.textContent = 'Hello, ' + name + '! Thanks for using the form.';
  }
});
