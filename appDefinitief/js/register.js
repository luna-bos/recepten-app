//registreer
const signupForm = document.querySelector('#register-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['username'].value;
  const password = signupForm['password'].value;
  const passwordCheck = signupForm['passwordCheck'].value;

  // sign up the user
  if (password === passwordCheck){
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // close the signup modal & reset form
        // const modal = document.querySelector('#modal-signup');
        // M.Modal.getInstance(modal).close();
        signupForm.reset();
        window.location.href = 'index.html';

      });
      
  }
  else{
      alert('wachtwoorden komen niet overeen');
  }

});
