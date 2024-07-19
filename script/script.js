function validationform(){
    var fname=document.validateform.fname.value;
    var lname=document.validateform.lname.value;
    var city=document.validateform.city.value;
    var phonenumber=document.validateform.phonenumber.value;
    var address=document.validateform.address.value;
    if(fname== null || fname== ""){
        alert("Enter your first name");
        return false;
    }
    else if(lname== null || lname== ""){
        alert("Enter your last name");
        return false;
    }
    else if(city== null || city== ""){
        alert("Enter the city name");
        return false;
    }
    else if(phonenumber== null || phonenumber== "" || phonenumber.length <10){
        alert("Enter your phonenumber in 10 digit");
        return false;
    }
    else if(address== null || address== ""){
        alert("Enter your address");
        return false;
    }
}
function formsub(){
    alert("Your form has been submitted successfully")
}