"use strict";

let placedImages = [];
let imageContainer = document.getElementById('images');
let toggle = document.getElementById('toggle');
let menu = document.getElementById('menu');

toggle.onclick = function(e) {
  e.preventDefault();
  if (menu.style.display == 'none') {
    menu.style.display = 'block';
    toggle.innerHTML = '&times;';
    toggle.style.color = '#000';
    toggle.style.fontSize = '2rem';
    toggle.style.backgroundColor = "#ffddcb";
  } else {
    menu.style.display = 'none';
    toggle.innerHTML = '&#9776;';
    toggle.style.color = '#fff';
    toggle.style.fontSize = '1.4rem';
    toggle.style.backgroundColor = '#000';
  }
}

if (imageContainer != undefined) {
  let images = JSON.parse(imageContainer.dataset.images);
  imageContainer.onclick = function(event) {
    let imgData = {
      "xPos": event.clientX,
      "yPos": event.clientY,
      "src": randomChoice(images)
    }
    placedImages.push(imgData);
    let img = document.createElement('img');
    img.src = imgData.src;
    img.style.position = "absolute";
    img.style.left = imgData.xPos + "px";
    img.style.top = imgData.yPos + "px";
    img.classList.add('placed');
    this.appendChild(img);
  }
}

function randomChoice(choices) {
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
