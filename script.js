let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function (){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}

function copyToClickBoard(){
    var content = document.getElementById('container-password').innerHTML;

    navigator.clipboard.writeText(novaSenha)
        .then(() => {
        console.log("Senha copiada!")
    })
        .catch(err => {
        console.log('Algo deu errado', err);
        alert("Copiado!");
    })
    
}

