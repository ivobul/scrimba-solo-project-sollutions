const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const upperLetters = characters.slice(0, characters.indexOf("a"))
const lowerLetters = characters.slice(characters.indexOf("a"), characters.indexOf("0"))
const numbers = characters.slice(characters.indexOf("0"), characters.indexOf("~"))
const specialChars = characters.slice(characters.indexOf("~"))

const charactersNoNums = [... upperLetters, ... lowerLetters, ... specialChars]
const charactersNoSpecialChars = [... upperLetters, ... lowerLetters, ... numbers]
const charactersOnlyLetters = [... upperLetters, ... lowerLetters]

let passLength = 0
let currPass = ""

const passBoxes = document.querySelectorAll(".app__password")
const btnElem = document.querySelector(".app__btn")
const lengthElem = document.querySelector("#length")
const inpLabelElem = document.querySelector(".app__inp-label")
const checkNumbersElem = document.querySelector("#numbers")
const checkSpecialCharsElem = document.querySelector("#special-chars")

window.addEventListener("load", () => {
  passLength = lengthElem.value
  inpLabelElem.innerText = lengthElem.value
})

// Copy the password to the clipboard
passBoxes.forEach((item) => {
  item.addEventListener("click", async(e) => {
    await navigator.clipboard.writeText(e.target.value);
    alert(`Copied password: ${e.target.value}`);
  })
})


btnElem.addEventListener("click", () => {
  passBoxes.forEach((item) => {
    item.value = generatePass()
  })
})

lengthElem.addEventListener("input", () => {
  passLength = lengthElem.value
  inpLabelElem.innerText = lengthElem.value
})

function generatePass() {
  let newPass = ""

  if (checkNumbersElem.checked && checkSpecialCharsElem.checked) {
    generateAllChars()
      
    while(currPass.length < passLength) {
      currPass += characters[Math.floor(Math.random() * characters.length)]
    }
  }
    
  else if (!checkNumbersElem.checked && !checkSpecialCharsElem.checked) {
    generateOnlyLetters()
      
    while(currPass.length < passLength) {
      currPass += charactersOnlyLetters[Math.floor(Math.random() * charactersOnlyLetters.length)]
    }
  }
    
  else if (!checkNumbersElem.checked) {
    generateNoNumsChars()
      
    while(currPass.length < passLength) {
      currPass += charactersNoNums[Math.floor(Math.random() * charactersNoNums.length)]
    }
  }
    
  else if (!checkSpecialCharsElem.checked) {
    generateNoSpecialChars()
      
    while(currPass.length < passLength) {
      currPass += charactersNoSpecialChars[Math.floor(Math.random() * charactersNoSpecialChars.length)]
    }
  }
  
  newPass = currPass
  currPass = ""
  
  return newPass
}

function generateAllChars() {
  currPass += upperLetters[Math.floor(Math.random() * upperLetters.length)]
  currPass += lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
  currPass += numbers[Math.floor(Math.random() * numbers.length)]
  currPass += specialChars[Math.floor(Math.random() * specialChars.length)]
  
  return currPass
}

function generateOnlyLetters() {
  currPass += upperLetters[Math.floor(Math.random() * upperLetters.length)]
  currPass += lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
  
  return currPass
}

function generateNoNumsChars() {
  currPass += upperLetters[Math.floor(Math.random() * upperLetters.length)]
  currPass += lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
  currPass += specialChars[Math.floor(Math.random() * specialChars.length)]
  
  return currPass
}

function generateNoSpecialChars() {
  currPass += upperLetters[Math.floor(Math.random() * upperLetters.length)]
  currPass += lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
  currPass += numbers[Math.floor(Math.random() * numbers.length)]
  
  return currPass
}