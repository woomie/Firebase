//web app configuration
const firebaseConfig = {
    apiKey: "ApI Key",
    authDomain: "fir-auth-demo-98abc.firebaseapp.com",
    projectId: "fir-auth-demo-98abc",
    storageBucket: "fir-auth-demo-98abc.firebasestorage.app",
    messagingSenderId: "443014072912",
    appId: "1:443014072912:web:818fc77c3fc06ef82b5f55"
  };

   // Initialize Firebase
   //const app = initializeApp(firebaseConfig);
   firebase.initializeApp(firebaseConfig)

   const auth =firebase.auth();
//    const registerEmail = document.getElementById("email-register");
//    const registerPassword = document.getElementById("password-register");
//    const btnRegister = document.getElementById("btnRegister");

//    btnRegister.addEventListener("click", event =>{
//     event.preventDefault();
//     const email = registerEmail.value;
//     const password = registerPassword.value;

//     auth.createUserWithEmailAndPassword(email, password)
//     .then((userCredentials) =>{
//         console.log(userCredentials)
//         let userRegistrationId = userCredentials.user.uid;
//         console.log("user has been created, :", userRegistrationId)

//     }).catch((e)=>{
//         console.log(e);
//     })
//    });


   
   const btnLogin = document.getElementById("btnLogin");
   if(btnLogin){
    btnLogin.addEventListener("click", (event)=>{
        event.preventDefault();
        let email = document.getElementById("email-login").value;
        let password = document.getElementById("password-login").value;
    
        auth.signInWithEmailAndPassword(email, password)
       .then((userCredentials)=>{
            console.log("user is logged in")
            window.location.href = 'userProfile.html';
    
       }).catch((e)=>{
            console.log(e);
       });
       })
   }
   

   auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("User is signed in:", user.email);
        document.getElementById("my-email").textContent=`Hello! ${user.email} Please enter your name below`;
        
    } else {
        console.log("No user signed in");
    }
    const update = document.getElementById("update")
    update.addEventListener("click", event =>{
    event.preventDefault();
    let newName = document.getElementById("name").value;
    user.updateProfile({
        displayName: newName
    }).then(()=>{
        const displayNameElement = document.getElementById("display-name");
        if (displayNameElement) {
            displayNameElement.textContent = `Hello ${newName}`;
        }
    
    })
})
});


