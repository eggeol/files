window.addEventListener("load", function(){
  const loader = document.querySelector(".loaders");
  loader.className += " hidden";
})


function info() {
  document.getElementById("inf").style.visibility = "visible";
}

function cim() {
  document.getElementById("inf").style.visibility = "hidden";
}


var clicks = 0;
    function tap() {
        clicks += 1;
        document.getElementById("num").innerHTML = clicks;

        if(clicks > 50 && clicks < 100){
          document.getElementById("jik").innerHTML = "NORMAL";
          document.getElementById("jik").style.color = "white";
        }
        else if(clicks > 100 && clicks < 250){
          document.getElementById("jik").innerHTML = "EXELLENT";
          document.getElementById("jik").style.color = "grey";
        }
        else if(clicks > 250 && clicks < 400){
          document.getElementById("jik").innerHTML = "VETERAN";
          document.getElementById("jik").style.color = "purple";
        }
        else if(clicks > 400 && clicks < 500){
          document.getElementById("jik").innerHTML = "PRO";
          document.getElementById("jik").style.color = "yellowgreen";
        }
        else if(clicks > 500 && clicks < 1000){
          document.getElementById("jik").innerHTML = "ADDICTED";
          document.getElementById("jik").style.color = "red";
        }
        else if(clicks > 1000 && clicks < 2000){
          document.getElementById("jik").innerHTML = "GOD";
          document.getElementById("jik").style.color = "blue";
          document.getElementById("num").style.color = "blue";
        }
        else if(clicks > 2000){
          document.getElementById("jik").innerHTML = "asdfghjkl";
          document.getElementById("jik").style.color = "black";
          document.getElementById("num").style.color = "black";
        }
    };
