function setFullScreen(target) {
  if (target.requestFullscreen) {
    target.requestFullscreen();
  }
  if (target.webkitRequestFullscreen) {
    target.webkitRequestFullscreen();
  }
  if (target.mozRequestFullScreen) {
    target.mozRequestFullScreen();
  }
  if (target.msRequestFullscreen) {
    target.msRequestFullscreen();
  }
}
