console.log('Loaded!');


/*var paraa=document.getElementById('p1');
paraa.innerHTML ='this is my document';*/


var btn=document.getElementById("btnsubmit");
 btn.onclick=function()
 {
var request= new XMLHttpRequest();

request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
       // Typical action to be performed when the document is ready:
       var texts = request.responseText;
      var holdtext= document.getElementById("ctext");
      
      holdtext.innerHTML=texts.toString();
      
    }
};

request.open('GET', 'http://shweta007.imad.hasura-app.io/ui/comment', true);
request.send(null);
};