 function pans() {
   var name = document.getElementById("given").value;

   if (name == "eujan" || name == "jake" || name == "austin" ) {
     window.location.href = "welcome.html";
   }
   else if (name == "junivie" || name == "cameron" || name == "kent" ) {
     window.location.href = "welcome.html";
   } else {
     alert("invalid name")
   }
 }
