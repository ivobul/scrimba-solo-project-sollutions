import { quotes } from "./quotes.js"

//const quoteElem = document.querySelector("#quote")
//const authorElem = document.querySelector("#author")

const bodyElem = document.querySelector(".page")

let randomItem = quotes[Math.floor(Math.random() * quotes.length)]

let content = `
  <a href="https://scrimba.com/the-frontend-developer-career-path-c0j" target="_blank" class="quote__link">
      <main class="quote__box">
        <h1 class="quote__box-title">${randomItem.quote}</h1>
        <h2 class="quote__box-subtitle">- ${randomItem.author}</h2>
      </main>
    </a>
`

bodyElem.insertAdjacentHTML("beforeend", content)


//quoteElem.innerText = randomItem.quote
//authorElem.innerText = randomItem.author
