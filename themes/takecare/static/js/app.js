
function ImagePlacer(data) {
  this.data = data;
}

ImagePlacer.prototype.place = function(tagname) {
  let element = document.getElementsByTagName(tagname)[0];
  element.addEventListener('click', function(e) {
    var imgObj = {
      "xPos": e.clientX,
      "yPos": e.clientY,
    }
  })
  imgObj.img = this.randomChoice(this.data)
  this.data.push(imgObj)
}

ImagePlacer.prototype.randomChoice = function(choices) {
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
