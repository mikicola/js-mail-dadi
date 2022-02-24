let allowedEmail = [
"miki@gmail.com","giovanna@gmail.com",
"donato@gmail.com","davide@gmail.com",
"gina@gmail.com","pina@gmail.com",
"dina@gmail.com","nina@gmail.com",
"gino@gmail.com","pino@gmail.com",
"dino@gmail.com","nino@gmail.com"];

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
