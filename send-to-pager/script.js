const keyBtnElements = document.querySelectorAll(".app__phone-key-btn")
const resetBtnElem = document.querySelector(".app__phone-reset-btn")
const sendBtnElem = document.querySelector(".app__phone-send-btn")
let phoneInpElem = document.querySelector(".app__phone-inp")
let pagerInpElem = document.querySelector(".app__pager-inp")

window.addEventListener("load", () => {
  phoneInpElem.value = ""
  pagerInpElem.value = ""
})

keyBtnElements.forEach((elem) => {
  elem.addEventListener("click", (ev) => {
    if (phoneInpElem.value.length < 16) {
      phoneInpElem.value += ev.target.innerText
    }
  })
})

resetBtnElem.addEventListener("click", () => {
  phoneInpElem.value = ""
})

sendBtnElem.addEventListener("click", () => {
  if (phoneInpElem.value) {
    setTimeout(sendMessage, 1500)
  }
})

function sendMessage() {
  pagerInpElem.value = phoneInpElem.value
  phoneInpElem.value = ""
  // Playing sound
  let sound = new Audio("assets/pager.wav")
  sound.play()
}
