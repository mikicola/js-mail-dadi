// your email ----> valid ---> message OK    
//             ---> invalid--> message RIPROVA



let allowedEmail = ["miki@bo.com","banana@bo.com"];

let email = document.getElementById("email");
let btnCheck = document.getElementById("btnCheck");
let message = document.getElementById("message");

btnCheck.addEventListener("click", function(){
    let allowed = false;
    for(let i = 0; i < allowedEmail.length; i++){
        if(allowedEmail[i] == email.value){
            allowed = true;
        }
        else if(allowed){
            message.innerHTML = "Access allowed."
        }
        else{
            message.innerHTML = "Access denied, try again."
        }
    }
});
