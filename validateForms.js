var attempt = 3; // Variable to count number of attempts.
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
    return true;
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