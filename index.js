const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById('password-length').value;


function shuffle(array) {
    let passwordEl = document.getElementById('password-length').value;
    array.sort(() => Math.floor(Math.random() - 0.5));
    let password = "";
    for (let i = 0; i < passwordEl; i++){
        password += array[i];
    }
    return password;
}

let passwordOne = ''
let passwordTwo = ''

let pOne = document.getElementById('p-one');
let pTwo = document.getElementById('p-two');

function getPasswordLength(){
    return passwordEl;
}
console.log();

function generatePasswords(){
    passwordOne = shuffle(characters);
    passwordTwo = shuffle(characters);
    
    pOne.textContent = passwordOne;
    pTwo.textContent = passwordTwo;
}

generatePasswords();

function copyPassword1 () {
    let password = document.getElementById('p-one');
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(password);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
}

function copyPassword2 () {
    let password = document.getElementById('p-two');
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(password);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
}