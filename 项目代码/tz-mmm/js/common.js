pixel()
function pixel() {
  var pixelRatio = 1/window.devicePixelRatio;
  document.write('<meta name="viewport"' +
    'content="width=device-width, ' +
    'user-scalable=no,' +
    'initial-scale='+pixelRatio+
    ',maximum-scale='+pixelRatio+
    ',minimum-scale='+pixelRatio+'">');
  var html = document.getElementsByTagName('html')[0];
  var pageWidth = html.getBoundingClientRect().width;
  html.style.fontSize = pageWidth/16 + 'px';
}

