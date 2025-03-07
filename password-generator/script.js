const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const upperLetters = characters.slice(0, characters.indexOf("a"))
const lowerLetters = characters.slice(characters.indexOf("a"), characters.indexOf("0"))
const numbers = characters.slice(characters.indexOf("0"), characters.indexOf("~"))
const specialChars = characters.slice(characters.indexOf("~"))

const noNumsChars = [... upperLetters, ... lowerLetters, ... specialChars]
const onlyNumsChars = [... numbers]
const noSpecialChars = [... upperLetters, ... lowerLetters, ... numbers]
const onlySpecialChars = [... specialChars]
const onlyLettersChars = [... upperLetters, ... lowerLetters]
const noLettersChars = [... numbers, ... specialChars]

let passLength = 0
let currPass = ""

const passBoxes = document.querySelectorAll(".app__password")
const btnElem = document.querySelector(".app__btn")
const lengthElem = document.querySelector("#length")
const inpLabelElem = document.querySelector(".app__inp-label")
const checkNumbersElem = document.querySelector("#numbers")
const checkSpecialCharsElem = document.querySelector("#special-chars")
const checkLettersElem = document.querySelector("#letters")

window.addEventListener("load", () => {
  passLength = lengthElem.value
  inpLabelElem.innerText = lengthElem.value
})

// Copy the password to the clipboard
passBoxes.forEach((item) => {
  item.addEventListener("click", async(e) => {
    if (e.target.value) {
      await navigator.clipboard.writeText(e.target.value);
      alert(`Copied password: ${e.target.value}`);
    }
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

  if (checkNumbersElem.checked && checkSpecialCharsElem.checked && checkLettersElem.checked) {
    generateAllChars()
      
    while(currPass.length < passLength) {
      currPass += characters[Math.floor(Math.random() * characters.length)]
    }
  }
  
  else if (!checkNumbersElem.checked && !checkSpecialCharsElem.checked && checkLettersElem.checked) {
	generateOnlyLettersChars()
	  
	while(currPass.length < passLength) {
	  currPass += onlyLettersChars[Math.floor(Math.random() * onlyLettersChars.length)]
    }  
  }
  
  else if (checkNumbersElem.checked && checkSpecialCharsElem.checked && !checkLettersElem.checked) {
	generateNoLettersChars()
	  
	while(currPass.length < passLength) {
	  currPass += noLettersChars[Math.floor(Math.random() * noLettersChars.length)]
    }  
  }
  
  else if (checkNumbersElem.checked && !checkSpecialCharsElem.checked && !checkLettersElem.checked) {
	generateOnlyNumsChars()
	  
	while(currPass.length < passLength) {
	  currPass += onlyNumsChars[Math.floor(Math.random() * onlyNumsChars.length)]
    }  
  }
  
  else if (!checkNumbersElem.checked && checkSpecialCharsElem.checked && checkLettersElem.checked) {
	generateNoNumsChars()
	  
	while(currPass.length < passLength) {
	  currPass += noNumsChars[Math.floor(Math.random() * noNumsChars.length)]
    }  
  }
  
  else if (!checkNumbersElem.checked && checkSpecialCharsElem.checked && !checkLettersElem.checked) {
	generateOnlySpecialChars()
	  
	while(currPass.length < passLength) {
	  currPass += onlySpecialChars[Math.floor(Math.random() * onlySpecialChars.length)]
    }  
  }
  
  else if (checkNumbersElem.checked && !checkSpecialCharsElem.checked && checkLettersElem.checked) {
	generateNoSpecialChars()
	  
	while(currPass.length < passLength) {
	  currPass += noSpecialChars[Math.floor(Math.random() * noSpecialChars.length)]
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

function generateOnlyLettersChars() {
  currPass += upperLetters[Math.floor(Math.random() * upperLetters.length)]
  currPass += lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
  
  return currPass
}

function generateNoLettersChars() {
  currPass += numbers[Math.floor(Math.random() * numbers.length)]
  currPass += specialChars[Math.floor(Math.random() * specialChars.length)]
  return currPass
}

function generateOnlyNumsChars() {
  currPass += numbers[Math.floor(Math.random() * numbers.length)]
  
  return currPass
}

function generateNoNumsChars() {
  currPass += upperLetters[Math.floor(Math.random() * upperLetters.length)]
  currPass += lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
  currPass += specialChars[Math.floor(Math.random() * specialChars.length)]
  
  return currPass
}

function generateOnlySpecialChars() {
  currPass += specialChars[Math.floor(Math.random() * specialChars.length)]
  
  return currPass
}

function generateNoSpecialChars() {
  currPass += upperLetters[Math.floor(Math.random() * upperLetters.length)]
  currPass += lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
  currPass += numbers[Math.floor(Math.random() * numbers.length)]
  
  return currPass
}
