function man() {
 var nar = document.getElementById("ngaran").value;
 var nas = document.getElementById("pass").value;

 const name = [ "eujan", "jake", "lance", "austin", "kent", "nathaniel", "matthew", "lloyd", "cameron", "junivie"];
 const password = ["admin05", "admin02", "admin01", "admin04", "admin03", "admin06", "admin07", "admin08", "admin09", "admin10"];

 for(let i = 0; i < name.length; i++){
   if( nar === name[i] ){
       if( nas === password[i] )
       window.location.href = "oregano.html";
     }
 }
}
