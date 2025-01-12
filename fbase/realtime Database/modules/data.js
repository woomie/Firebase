let userRef = firebase.database().ref("users");
userRef.on("value", (data)=>{
    const response=data.val()
    console.log(response);
    Object.keys(response).forEach(key => {
        console.log(response[key].name);
        console.log(response[key].email);
        const name = document.getElementById("table-name");
        const email= document.getElementById("table-email");
        const phone= document.getElementById("table-phone");
        const comment = document.getElementById("table-comment")
        name.textContent=response[key].name;
        email.textContent=response[key].email;
        phone.textContent = response[key].phone;
        comment.textContent = response[key].comment;
        
    });
});

