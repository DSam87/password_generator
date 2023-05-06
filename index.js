const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const passwordItems = document.querySelectorAll(".password-item");
const buttonGen = document.querySelector(".gen-pass-btn")

function getRandomChar(){
    return Math.floor(Math.random()* characters.length)
}

function clearPasswordItems(){
    passwordItems.forEach(element => {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    });

}

function createPassword(lengthOfPassword = 15){
    let stringArray = [];
    for(let i = 0; i < 15; i++){
        stringArray[i] = characters[getRandomChar()];
    }
    return stringArray.join("");
}

function createParElement(){
    let pElement = document.createElement("p");
    pElement.classList.add("password-input");
    pElement.textContent = createPassword();
    return pElement;
}


function inputPasswordsInDom(){
    passwordItems.forEach(el=> {
        el.appendChild(createParElement());
    });
}


buttonGen.addEventListener("click", ()=>{
    clearPasswordItems();
    inputPasswordsInDom();

})

