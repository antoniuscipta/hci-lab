var form = document.forms["register"]
var errorName = document.getElementById("errorName")
var errorMail = document.getElementById("errorEmail")
var errorGender = document.getElementById("errorGender")
var errorAddress = document.getElementById("errorAddress")
var errorCity = document.getElementById("errorCity")
var errorCheck = document.getElementById("errorCheck")

function resetError(){
    errorName.innerHTML = "";
    errorMail.innerHTML = "";
    errorGender.innerHTML = "";
    errorAddress.innerHTML = "";
    errorCity.innerHTML = "";
    errorCheck.innerHTML = "";
}

function test(){
    e.preventDefault
    return false;
}

function submitted(e){

    // alert("Hello")
    resetError();
    console.log(form["agree"].checked);
    var eMsg = " * Required Field ";

    if(form["username"].value == ""){
        // $("#errorName").innerText = eMsg
        errorName.innerText = eMsg
        e.preventDefault();
    }

    if(form["email"].value == ""){
        errorEmail.innerText = eMsg
        e.preventDefault();
    }

    if(form["email"].value.includes("@") === false){
        errorEmail.innerText = "Email must be include @ in it";
        e.preventDefault();
    }

    if(form["gender"].value == "default"){
        errorGender.innerText = "Select the gender!";
        e.preventDefault();
    }

    if(form["address"].value == ""){
        errorAddress.innerText = eMsg
        e.preventDefault();
    }

    if(form["city"].value == "default"){
        errorCity.innerText = eMsg
        // $("#errorCity").innerText = eMsg
        // $("#errorCity").innerHtml = eMsg
        e.preventDefault();
    }

    if(form["username"].value.length < 4){
        errorName.innerText = " *minimum 4 karakter";
        isValid = false;
        e.preventDefault();
    }
    if(form["agree"].checked === false){
        errorCheck.innerText = "Must be Checked";
        e.preventDefault();
    }
    return true;
}