 const from = document.getElementById('contact-from');
 const nameInput = from.name;
 const emailInput = from.email;
 const messageInput = from.message;
 const successMsg = document.getElementById('success-message');

 const nameError = document.getElementById('name-error');
 const emailError = document.getElementById('email-error');
 const messageError = document.getElementById('message-error');

 function validateEmail(email) {
    //Simpel regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 }

 from.addEventListener('submit', function (e) {
    e.preventDefault();
 

 //reset errors
 nameError.textContent='';
 emailError.textContent='';
 messageError.textContent='';
 successMsg.textContent='';

 let valid = true;

 if (nameInput.value.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    valid = false;
 }
 if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
 }
if (messageInput.value.trim() === '') {
    messageError.textContent = 'please enter your message.' ;
    valid = false;
}

if (valid) {
    //simulate sending message (no backend)
    successMsg.textContent = 'Thank you! Your message has been sent';
    from.reset();
}
});