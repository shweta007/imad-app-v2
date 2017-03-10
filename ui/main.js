console.log('Loaded!');


/*var paraa=document.getElementById('p1');
paraa.innerHTML ='this is my document';*/
var nameInput= document.getElementById("ctext");
var name=nameInput.value;

var btn=document.getElementById("btnsubmit");
 btn.onclick=function()
 {
//var request= new XMLHttpRequest();

//request.onreadystatechange = function() {
    //if (request.readyState == XMLHttpRequest.DONE) {
        
       // if(request.status===200){
       // Typical action to be performed when the document is ready:
      // var names = request.responseText;
      // names=JSON.parse(names);
       var list='';
       
       for(var i=0; i<names.length;i++)
       {
          list += '<li>' + names[i] + '</li>';
       }
      var ul= document.getElementById("holdtext");
      
      ul.innerHTML=list;
    //    }
   // }



//request.open('GET', 'http://shweta007.imad.hasura-app.io/ui/comment?name='+name , true);
//request.send(null);
};