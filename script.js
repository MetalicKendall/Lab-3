function validateForm(){
let personName = document.getElementById("name").value;
let checkName = /^[a-zA-Z]+$/;
let email = document.getElementById("email").value;
let phoneNumber = document.getElementById("phoneNumber").value;
let dob = document.getElementById("dob").value;
console.log(personName, email, phoneNumber, phoneNumber, dob);

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let phoneNumberError = document.getElementById("phoneNumberError");
let dobError = document.getElementById("dobError");
console.log(nameError, emailError, phoneNumberError, phoneNumberError, dobError);

let valid= true;


if (personName == ""){
    window.alert("Name is REQUIRED");
    document.getElementById("name").classList.add("invalid-field");
    if(valid){
        document.getElementById("name").focus();
    }
    valid = false;
}
else if (checkName.test(personName)){
    nameError.innerHTML="";
    document.getElementById("name").classList.remove("invalid-field")
}

//validate for email
if (email === ""){
    emailError.innerHtml = "Email is REQUIRED";
    document.getElementById("email").classList.add("invalid-field");
    if(valid){
        document.getElementById("name").focus();
    }
    valid = false;
}
else if(!validateEmail(email)){
    emailError.innerHtml = "Please enter a valid email";
    document.getElementById("email").classList.add("invalid-field");
    if(valid){
        document.getElementById("name").focus();
    }
    valid = false;
}
else{
    emailError.innerHTML="";
    document.getElementById("email").classList.remove("invalid-field")
}


//validate phoneNumber
if (email === ""){
    emailError.innerHtml = "phoneNumber is REQUIRED";
    document.getElementById("phoneNumber").classList.add("invalid-field");
    if(valid){
        document.getElementById("phoneNumber").focus();
    }
    valid = false;
}
else if(phoneNumber.length !== 10){
    emailError.innerHtml = "Phone Number is REQUIRED to be 10 numbers";
    document.getElementById("phoneNumber").classList.add("invalid-field");
    if(valid){
        document.getElementById("phoneNumber").focus();
    }
    valid = false;
}
return valid;
}

function validateEmail(email){
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}