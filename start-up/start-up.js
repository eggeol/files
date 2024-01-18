var song = document.getElementById("song");
var button = document.getElementById("dahyun");

button.onclick = function() {
  if(song.paused){
    song.play();
    button.src = "bimbim.jpg"
  }else{
    song.pause();
    button.src = "dahyun.jpg"
  }
}
