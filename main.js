 function validate(){

    // var emailValid  =   validateEmail;
    // var nameValid 
    if (validateEmail() && validateName()) {
        return true;
    }
    return false;
    }
    

    function validateEmail(){
        mailAddress = document.getElementById('email').value;
        pos1 = mailAddress.indexOf("@");
        pos2 = mailAddress.indexOf(".");

        if (pos1 >= 0 && pos2 >= 0) {
            // alert(mailAddress + "  is a valid e-mail address!");
        
        document.getElementById('emailError').innerHTML = mailAddress + " is a valid email address!";
        return true;
        }
        else
        {
            // alert(mailAddress +" is not a valid address!")
          document.getElementById('emailError').innerHTML = mailAddress + " please enter a valid email address!";  
          return false;
        }
}

function validateName(){
        fullName = document.getElementById('name').value;
        pos1 = fullName.indexOf(" ");
        pos2 = fullName.indexOf("@");
        pos3 = fullName.indexOf(".");

        if (pos1 >= 0 && pos2 < 0 && pos3 < 0 && fullName.length > 2 && !parseInt(fullName)) {

            //alert(fullName + :" is not a valid full name")
        document.getElementById('nameError').innerHTML = fullName + "is a valid name!";
        return true;

        }
        else
        {
           // alert(fullName +" please enter a full Name")
          document.getElementById('nameError').innerHTML = fullName + " please enter a full Name!";  
          return false;
        }
}