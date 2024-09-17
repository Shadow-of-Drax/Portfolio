// form-validation.js

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Simple validation
  if (name.value === '' || email.value === '' || message.value === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (!validateEmail(email.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // If validation passes
  contactForm.submit();
});

function validateEmail(email) {
  // Simple email regex
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}