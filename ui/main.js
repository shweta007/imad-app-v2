console.log('Loaded!');


/*var paraa=document.getElementById('p1');
paraa.innerHTML ='this is my document';*/


var btn=document.getElementById("btnsubmit");
 btn.onclick=function()
 {
var request= new XMLHttpRequest();

request.onreadystatechange = function() {
    if (request.readyState == XMLHttpRequest.DONE) {
        
        if(request.status===200){
       // Typical action to be performed when the document is ready:
       var names = request.responseText;
       names=JSON.parse(names);
       //var list='';
      var span= document.getElementById("holdtext");
      
      span.innerHTML=name;
        }
    }
};
var nameInput= document.getElementById("ctext");
var name=nameInput.value;
request.open('GET', 'http://shweta007.imad.hasura-app.io/ui/comment?name='+name , true);
request.send(null);
};