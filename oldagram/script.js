const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const appElem = document.querySelector(".app")
let articleElem = ``

for (let post of posts) {
	articleElem = `
	  <article class="app__post">
            <div class="app__post-top">
              <img src="${post.avatar}" alt="Avatar ${post.name}" class="app__post-avatar">
              <div class="app__post-box">
                <h2 class="app__post-title">${post.name}</h2>
                <h3 class="app__post-subtitle">${post.location}</h3>
              </div>
            </div>
            <img src="${post.post}" alt="${post.name}" class="app__post-image">
            <div class="app__post-body">
              <div class="app__post-icons">
                <img src="images/icon-heart.png" alt="Icon heart" class="app__post-icon icon-heart">
                <img src="images/icon-comment.png" alt="Icon comment" class="app__post-icon icon-comment">
                <img src="images/icon-dm.png" alt="Icon direct message" class="app__post-icon icon-dm">
              </div>
              <div class="app__post-like-count">${post.likes}</div><span class="font-bold"> likes</span>
              <div class="app__post-username-caption">
                <span class="app__post-username">${post.username}</span>
                <span class="app__post-comment">${post.comment}</span>
              </div>
            </div>
          </article>
	`
	
        appElem.insertAdjacentHTML("beforeend", articleElem)
}

const imagePosts = document.querySelectorAll(".app__post-image")
const heartIcons = document.querySelectorAll(".icon-heart")

imagePosts.forEach((elem, index) => {
  elem.addEventListener("dblclick", () => {
    // looking for the .app__post-like-count selector and upadate its text content
    elem.nextElementSibling.children[1].innerText = ++posts[index].likes
  })
})

heartIcons.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    // looking for the .app__post-like-count selector and upadate its text content
    elem.parentNode.nextElementSibling.innerText = ++posts[index].likes
  })
})
