console.log('Loaded!');


/*var paraa=document.getElementById('p1');
paraa.innerHTML ='this is my document';*/


var btn=document.getElementById("btnsubmit");
 btn.onclick=function()
 {

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var text = request.responseText;
      var holdtext= document.getElementById("ctext");
      
      holdtext.innerHTML=text.toString();
      
    }
};
};
xhttp.open("GET", "http://shweta007.imad.hasura-app.io/ui/comment", true);
xhttp.send();