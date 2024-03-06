console.log("Test");

function validateForm(){
let personName = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phoneNumber = document.getElementById("phoneNumber").value;
let currentHome = document.getElementById("currentHome").value;
let fence = document.getElementById("fence").value;
console.log(personName, email, phoneNumber, currentHome, fence);

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let phoneNumberError = document.getElementById("phoneNumberError");
let currentHomeError = document.getElementById("currentHomeError");
let fenceError = document.getElementById("fenceError");

let valid= 0;

if (personName == ""){
    nameError.innerHTML = "Name is REQUIRED";

    document.getElementById("name").focus();
    document.getElementById("name").classList.add("invalid-field");

    valid ++;
}
else if(!validateName(personName)){
    nameError.innerHTML = "Please enter valid name";

    document.getElementById("name").focus();
    document.getElementById("name").classList.add("invalid-field");

    valid ++;
}
else{
    document.getElementById("name").classList.remove("invalid-field");
    nameError.innerHTML = "";
}
// if (personName == ""){
//     window.alert("Name is REQUIRED");
//     document.getElementById("name").classList.add("invalid-field");
//     if(valid){
//         document.getElementById("name").focus();
//     }
//     valid = false;
// }
// else if (checkName.test(personName)){
//     nameError.innerHTML="";
//     document.getElementById("name").classList.remove("invalid-field")
// }





//validate for email
if (email == ""){
    emailError.innerHTML = "Email is REQUIRED";
    document.getElementById("email").classList.add("invalid-field");
    valid ++;
    document.getElementById("email").focus();

}
else if(!validateEmail(email)){
    emailError.innerHTML = "Please enter a valid email";
    document.getElementById("email").classList.add("invalid-field");
        document.getElementById("email").focus();
    valid ++;
}
else{
    emailError.innerHTML="";
    document.getElementById("email").classList.remove("invalid-field");
}







//validate phoneNumber
if (phoneNumber == ""){
    phoneNumberError.innerHTML = "Phone Number is REQUIRED";
    document.getElementById("phoneNumber").classList.add("invalid-field");
        document.getElementById("phoneNumber").focus();
    valid ++;
}
else if(phoneNumber.length !== 10){
    phoneNumberError.innerHTML = "Phone Number is REQUIRED to be 10 numbers";
    document.getElementById("phoneNumber").classList.add("invalid-field");
        document.getElementById("phoneNumber").focus();
    valid ++;
}
else{
    phoneNumberError.innerHTML="";
    document.getElementById("phoneNumber").classList.remove("invalid-field");
}



//validate home

if (currentHome == ""){
    currentHomeError.innerHTML = "Selection is REQUIRED";
    document.getElementById("currentHome").classList.add("invalid-field");
        document.getElementById("currentHome").focus();
    valid ++;
}
else{
    currentHomeError.innerHTML="";
    document.getElementById("currentHome").classList.remove("invalid-field");
}



//validate fence

if (fence == ""){
    fenceError.innerHTML = "Selection is REQUIRED";
    document.getElementById("fence").classList.add("invalid-field");
        document.getElementById("fence").focus();
    valid ++;
}
else{
    fenceError.innerHTML="";
    document.getElementById("fence").classList.remove("invalid-field");
}



console.log(valid);
if(valid == 0){
    return true;
}
else{
    return false;    
}

}



function validateEmail(email){
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function validateName(Name){
    let checkName = /^[a-zA-Z]+$/;
    return checkName.test(Name);
}