const form=document.getElementById('form');
const UserName=document.getElementById('userName');
const Email=document.getElementById('email');
const Password=document.getElementById('password');
const Password2=document.getElementById('password2');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
   const UserNameValue= UserName.value.trim();
    const EmailValue=Email.value.trim();
   const passwordValue= Password.value.trim();
    const password2Value=Password2.value.trim();

    if(UserNameValue==='')
    {
        setErrorFor(UserName,"UserName Cannot be blank");
    }
    else{
        setSuccessFor(UserName);
    }
    if(EmailValue==='')
    {
        setErrorFor(Email,"Email Cannot be blank");
    }else if(!isMail(EmailValue)){
        setErrorFor(Email,"Email is not Valid");
    }
    else{
        setSuccessFor(Email);
    }
    if(passwordValue==='')
    {
        setErrorFor(Password,"Password Cannot be blank");
    }
    else{
        setSuccessFor(Password);
    }
    if(password2Value==='')
    {
        setErrorFor(Password2,"Re-Type Password Cannot be blank");
    }
    else if(passwordValue!=password2Value){
        setErrorFor(Password2,"Password does not Match");

    }else{
        setSuccessFor(Password2);
    }
}
function setErrorFor(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    small.innerText=message;
    formControl.className="form-control error";
}
function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className="form-control success";

}
function isMail(e){
    var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return emailPattern.test(e); 
}