let homeScoreTotal = 0
let guestScoreTotal = 0

const homeBtns = document.querySelectorAll(".home-btn")
const guestBtns = document.querySelectorAll(".guest-btn")
const homeScoreElem = document.querySelector("#home-score")
const guestScoreElem = document.querySelector("#guest-score")
const resetBtn = document.querySelector(".app__reset-btn")
const arrowRightElem = document.querySelector(".arrow-right")
const arrowLeftElem = document.querySelector(".arrow-left")

homeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    homeScoreTotal += +btn.dataset.homePoints
    homeScoreElem.innerText = homeScoreTotal
    showHideArrows()
  })
})

guestBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    guestScoreTotal += +btn.dataset.guestPoints
    guestScoreElem.innerText = guestScoreTotal
    showHideArrows()
  })
})

resetBtn.addEventListener("click", () => {
  homeScoreTotal = 0
  guestScoreTotal = 0
  guestScoreElem.innerText = guestScoreTotal
  homeScoreElem.innerText = homeScoreTotal
  showHideArrows()
})

function showHideArrows() {
  if (homeScoreTotal > guestScoreTotal) {
    arrowRightElem.style.display = "block"
    arrowLeftElem.style.display = "none"
  }
  
  else if (homeScoreTotal < guestScoreTotal) {
    arrowRightElem.style.display = "none"
    arrowLeftElem.style.display = "block"
  }
  
  else {
    arrowRightElem.style.display = "none"
    arrowLeftElem.style.display = "none"
  }
}