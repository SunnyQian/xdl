var clientWidth = 375
var fontSize = 20
window.onload = function () {
  var html = document.documentElement
  var nowClientWidth = html.clientWidth
  var newFontSize = nowClientWidth * fontSize / clientWidth
  html.style.fontSize = newFontSize + 'px'
}
