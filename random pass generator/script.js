const passwordBox=document.querySelector("#pass");
const length =12;

const uppercase="ABCEFGHIJKLMNOPQRSTUVWXYZ."
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="123456789";
const specials="@#$%&*+";

let allChars=uppercase+lowercase+numbers+specials;

function createPassword(){
    let password="";
    password=password+ uppercase[Math.floor(Math.random()*uppercase.length)];
    password=password+ lowercase[Math.floor(Math.random()*lowercase.length)];
    password=password+ numbers[Math.floor(Math.random()*numbers.length)];
    password=password+ specials[Math.floor(Math.random()*specials.length)];

    while(length>password.length){
        password=password+allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;
}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}
