import postToFirebase from "./postData.js";

// get user input

function getFormInput(id){
    return document.getElementById(id).value;

}

// function to get data
function submitForm(event){
    event.preventDefault();
    let obj={
        name: getFormInput("user-name"),
        email: getFormInput("user-email"),
        phone: getFormInput("user-phone"),
        comment: getFormInput("user-comment"),
    }
    console.log(obj);
    postToFirebase(obj);
    document.getElementById("user-name").value="";
    document.getElementById("user-email").value="";
    document.getElementById("user-phone").value="";
    document.getElementById("user-comment").value="";

}

export default submitForm;
