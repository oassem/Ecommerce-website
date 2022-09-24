var attempt = 3; // Variable to count number of attempts.
var attemptSignUp=3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validateLogin(e){
    e.preventDefault();
    var errors=[];
    // if(document.readyState){
    //   console.log('hello');
     
    myForm=document.getElementsByTagName('form');
    var Email=document.getElementsByTagName('input')[0];
    var Pass=document.getElementsByTagName('input')[1];
    // console.log(Email.value,Pass.value);

    attempt --;// Decrementing by one.
    alert("You have left "+attempt+" attempt;");
    // Disabling fields after 3 attempts.
    if( attempt == 0){
     Email.disabled = true;
     Pass.disabled=true;
     var attempts=document.getElementById('attempts');
     attempts.style.display='block';
    // return true;
    }
   
    if((Email.value.length== 0) && ( Pass.value.length== 0)){
        errors.push('email and password are empty');
    }else{
       
        
        if((Email.value.length== 0)){
            errors.push('email is empty');
        }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email.value))){
            errors.push('Invalid Email');
        }
    
        if(( Pass.value.length== 0)){
            errors.push('password is empty');
        }else{
            ptrn=/^([a-zA-Z0-9]{8,})$/;
            if(! ( ptrn.test(Pass.value))  ){
            errors.push('Password must be Minimum 8 characters, at least 1 letter and 1 number:');
        }
    }

    
 

}
// }
if(errors.length > 0){
    var ErrorsSection=document.getElementById('errors');
    ErrorsSection.innerText=errors;
    var cont =document.getElementById('cont');
    var warning=document.getElementById('warning');
    warning.textContent='Warning:';
    var warningcont=document.getElementById('warningcont');
    document.warningcont.appendChild(warning);

    document.cont.appendChild(ErrorsSection);


}else{
    form=document.getElementById('myForm');
  
    console.log('submmited');
    var success = document.getElementById("success");
    success.style.display='block';
    flag=true;
    if(flag){
        setInterval(() => {
            // alert('Form Successfully Submitted');
        window.location="index.html";// Redirecting to other page
        }, 2000);
    } 
    return true;
} 
   }
// ----------------------------------------------------------------------------------------------------------------
// Below function Executes on click of SignUp button.

  function validateSignUp(e){
    e.preventDefault();
    var errorsSignUp=[];
    // if(document.readyState){
    //   console.log('hello');
     
    myform=document.getElementById('myform');
    var firstName=document.getElementsByTagName('input')[0];
    var lastName=document.getElementsByTagName('input')[1];
    var email=document.getElementsByTagName('input')[2];
    var password=document.getElementsByTagName('input')[3];
    var ConfirmPassword=document.getElementsByTagName('input')[4];
    var check=document.getElementsByTagName('input')[5];

    // console.log(firstName.value,lastName.value,email.value,password.value,ConfirmPassword.value,check.value);
    // Laila Ibrahim lailaibrahim@gmail.com laila123 laila123 on

    attemptSignUp --;// Decrementing by one.
    alert("You have left "+ attemptSignUp+" attempt;");
    // Disabling fields after 3 attempts.
    if( attemptSignUp == 0){
     firstName.disabled = true;
     lastName.disabled=true;
     email.disabled=true;
     password.disabled=true;
     ConfirmPassword.disabled=true;
     check.disabled=true;

     var attempt_SignUp=document.getElementById('attempt_SignUp');
     attempt_SignUp.style.display='block';
    // return true;
    }
   
    if((firstName.value.length== 0) && ( lastName.value.length== 0) && (email.value.length==0) && (password.value.length==0) &&(ConfirmPassword.value.length==0)){
        errorsSignUp.push('Empty Inputs, Enter Your Inputs!');
    }else{
       
        
        if((email.value.length== 0)){
            errorsSignUp.push('email is empty');
        }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
            errorsSignUp.push('Invalid Email');
        }
    
        if(( password.value.length== 0)){
            errorsSignUp.push('password is empty');
        }else{
            ptrn=/^([a-zA-Z0-9]{8,})$/;
            if(! ( ptrn.test(password.value))  ){
                errorsSignUp.push('Password must be Minimum 8 characters, at least 1 letter & 1 number');
        }
        if((ConfirmPassword.value.length==0)){
          errorsSignUp.push('ConfirmPassword Field Is Empty');
        }else{
            ptrn=/^([a-zA-Z0-9]{8,})$/;
            if(! (ptrn.test(ConfirmPassword.value))){
                errorsSignUp.push('Confirm Password Field must be Minimum 8 characters, at least 1 letter & 1 number');
            }
        }
        if(password.value != ConfirmPassword.value){
           errorsSignUp.push('password and confirm Password Not Equal!!');
        }
        if((firstName.value.length==0)){
           errorsSignUp.push('First Name is empty');
        }else{
            ptrn=/^([a-zA-Z]{3,})$/;
            if(! (ptrn.test(firstName.value))){
               errorsSignUp.push('First Name must be Minimum 3 characters, at least 3 letters');
            }
        }
        if((lastName.value.length==0)){
            errorsSignUp.push('Last Name is empty');
         }else{
             ptrn=/^([a-zA-Z]{3,})$/;
             if(! (ptrn.test(lastName.value))){
                errorsSignUp.push('Last Name must be Minimum 3 characters, at least 3 letters');
             }
         }
         if(check.value != 'on'){
            errorsSignUp.push('please check btn');
         }
    }
}
// }
if(errorsSignUp.length > 0){
    var ErrorsSignUpSection=document.getElementById('errorsSignUp');
    ErrorsSignUpSection.innerText=errorsSignUp;
    var contSignUp =document.getElementById('contSignUp');
    var warningSignUp=document.getElementById('warningSignUp');
    warningSignUp.textContent='Warning:';
    var warningcontSignUp=document.getElementById('warningcontSignUp');
    document.warningcontSignUp.appendChild(warningSignUp);

    document.contSignUp.appendChild(ErrorsSignUpSection);


}else{
    myform=document.getElementById('myform');
  
    console.log('submmited');
    var successSignUp = document.getElementById("successSignUp");
    successSignUp.style.display='block';
    flag=true;
    if(flag){
        setInterval(() => {
            // alert('Form Successfully Submitted');
        window.location="index.html";// Redirecting to other page
        }, 2000);
    } 
    return true;
} 

   }