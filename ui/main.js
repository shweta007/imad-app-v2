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
       texts=JSON.parse(texts);
      var span= document.getElementById("holdtext");
      
      span.innerHTML=texts.toString();
      
    }
};
var names= document.getElementById("ctext");
var cname=names.value;
request.open('GET', 'http://shweta007.imad.hasura-app.io/ui/comment?name='+cname , true);
request.send(null);
};