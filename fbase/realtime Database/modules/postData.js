import submitForm from "./form.js";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form").addEventListener("submit", submitForm);
});

//function to post to db
function postToFirebase(obj){
    let reference =firebase.database().ref("users/").push();
    reference.set({
        name:obj.name,
        email:obj.email,
        phone:obj.phone,
        comment:obj.comment
    });
}

export default postToFirebase;