"use strict";

var placedImages = [];
var content = document.getElementById('content');
var body = document.getElementsByTagName('body')[0];
var images = JSON.parse(content.dataset.images);

content.onclick = function(event) {
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
  img.style.width = "5rem";
  body.appendChild(img);
}

function randomChoice(choices) {
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
