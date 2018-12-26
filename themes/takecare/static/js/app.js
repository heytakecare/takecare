"use strict";

var placedImages = [];
var imageContainer = document.getElementById('images');
var toggle = document.getElementById('toggle');

function createCloseIcon() {
  var close_icon = document.createElement('span');
  close_icon.id = "close";
  close_icon.innerHtml = "&times;";
  return close_icon;
}

if (imageContainer != undefined) {
  var images = JSON.parse(imageContainer.dataset.images);
  imageContainer.onclick = function(event) {
    let imgData = {
      "xPos": event.clientX,
      "yPos": event.clientY,
      "src": randomChoice(images)
    }
    placedImages.push(imgData);
    var img = document.createElement('img');
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
