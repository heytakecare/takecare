
function ImagePlacer() {
  this.data = [];
}

ImagePlacer.prototype.clickListen = function(tagname) {
  let element = document.getElementsByTagName(tagname)[0];
  element.addEventListener('click', function(e) {
    var coords = {
      "xPos": e.clientX,
      "yPos": e.clientY
    }
    this.data.push(coords)
  })
}
