// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm['username'].value;
    const password = loginForm['password'].value;

    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        console.log(cred.user);
        // close the signup modal & reset form
        // const modal = document.querySelector('#modal-login');
        // M.Modal.getInstance(modal).close();
        loginForm.reset();
        window.location.href = 
        'index.html';
        
    });

    

});




// var objPeople = [{ // Object @ 0 index
//         username: "luna",
//         password: "bos"
//     },
//     { // Object @ 2 index
//         username: "dani",
//         password: "bos"
//     }
// ]



// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();

//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     for (var i = 0; i < objPeople.length; i++) {
//         if (username === objPeople[i].username && password === objPeople[i].password) {
//             window.location.href = '/index.html';

//             return
//         }
//     }
//     alert("incorrect username or password");
// })