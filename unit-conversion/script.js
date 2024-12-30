/*
1 meter = 3.2808 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

let inpElemVal = +document.querySelector(".app__convert-input").value
const inpElem = document.querySelector(".app__convert-input")
const btnElem = document.querySelector(".app__convert-btn")
const numVal = document.querySelectorAll(".num-value")
const feet = document.querySelector(".feet")
const meters = document.querySelector(".meters")
const gallons = document.querySelector(".gallons")
const liters = document.querySelector(".liters")
const pounds = document.querySelector(".pounds")
const kilos = document.querySelector(".kilos")

inpElem.addEventListener("input", (e) => {
    inpElemVal = +e.target.value
})

window.addEventListener("load", () => {
  renderNumVal()
  convertAndRenderLength()
  convertAndRenderVolume()
  convertAndRenderMass()
})

btnElem.addEventListener("click", () => {
  renderNumVal()
  convertAndRenderLength()
  convertAndRenderVolume()
  convertAndRenderMass()
})

function renderNumVal() {
  numVal.forEach((elem) => {
    elem.innerText = inpElemVal
  })
}

function convertAndRenderLength() {
  const meterToFeet = (inpElemVal * 3.2808).toFixed(3)
  const feetToMeters = (inpElemVal / 3.2808).toFixed(3)
  
  feet.innerText = meterToFeet
  meters.innerText = feetToMeters
}

function convertAndRenderVolume() {
  const litersToGallons = (inpElemVal * 0.264172).toFixed(3)
  const gallonsToLiters = (inpElemVal / 0.264172).toFixed(3)
  
  gallons.innerText = litersToGallons
  liters.innerText = gallonsToLiters
}

function convertAndRenderMass() {
  const kilosToPounds = (inpElemVal * 2.20462).toFixed(3)
  const poundsToKilos = (inpElemVal / 2.20462).toFixed(3)
  
  pounds.innerText = kilosToPounds
  kilos.innerText = poundsToKilos
}
