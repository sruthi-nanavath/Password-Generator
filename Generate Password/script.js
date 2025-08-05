const passwordBox=document.getElementById("password")
const display=document.getElementById("displayed")
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXY"
const loweCase="abcdefghijklmnopqrstuvwxyz"
const numbers="0123456789"
const symbols="/~!@#$%^&*()<>.|\+_-"

const allChar=upperCase+loweCase+numbers+symbols

function GeneratePassword(){
    let password=""
    password+=upperCase[Math.floor(Math.random()*upperCase.length)]
    password+=loweCase[Math.floor(Math.random()*loweCase.length)]
    password+=numbers[Math.floor(Math.random()*numbers.length)]
    password+=symbols[Math.floor(Math.random()*symbols.length)]
    
    
    
    while(length>password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)]
    }
    passwordBox.value=password;
}

function copyTab(){
    navigator.clipboard.writeText(passwordBox.value).then(() => {
        // Remove old copied message if it exists
        const oldMsg = document.querySelector('.copied');
        if (oldMsg) oldMsg.remove();

        const copied = document.createElement('p');
        copied.className = "copied";
        copied.innerHTML=`<i class="fa-solid fa-check"></i>`
        copied.style.fontSize="30px";
        display.appendChild(copied);

        // Optionally remove after 2s
        setTimeout(() => copied.remove(), 3000);
    });
}