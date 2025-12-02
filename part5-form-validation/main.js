// Form validation for Part 5

const emailInput = document.getElementById('emailInput');
const ageInput = document.getElementById('ageInput');
const validateBtn = document.getElementById('validateBtn');
const message = document.getElementById('message');

// When the button is clicked, check the email and age
validateBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const age = Number(ageInput.value);

  // Basic email check
  const emailValid = email.includes('@') && email.includes('.');

  // Age check: must be 18 or older
  const ageValid = age >= 18;

  if (!emailValid) {
    message.textContent = 'Please enter a valid email address.';
  } else if (!ageValid) {
    message.textContent = 'You must be at least 18 years old.';
  } else {
    message.textContent = 'Form looks good!';
  }
});
