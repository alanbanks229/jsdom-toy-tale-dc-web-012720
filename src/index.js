let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });
});

function fetchTheToys(){
  fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(json => json.forEach(object => appendToys(object)))
}

function appendToys(object){
  //debugger
  let container = document.querySelector("#toy-collection")
  let card = document.createElement('div')
  let img = document.createElement('img')
  img.style.height = "20rem";
  img.style.width = "13rem";
  let h2 = document.createElement('h2')
  let p_likes = document.createElement('p')
  let likeBtn = document.createElement('button')


  likeBtn.innerHTML = 'like <3'
  h2.innerText = object.name
  p_likes.innerText = object.likes
  img.src = object.image
  likeBtn.addEventListener('click', (event) => increaseLikes(event, p_likes))

  card.classList.add('card')
  card.append(h2, img, p_likes, likeBtn)
  container.append(card)

}

function increaseLikes(event, p_likes){

  let x = parseInt(p_likes.innerText)
  x += 1
  p_likes.innerText = x
  console.log("hello?")
  event.preventDefault()

}

fetchTheToys()