console.log('Loaded!');


/*var paraa=document.getElementById('p1');
paraa.innerHTML ='this is my document';*/


var btn=document.getElementById("submit_btn");
 btn.onclick=function()
 {
var request= new XMLHttpRequest();

request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
        //take action
        if(request.status===200){
            alert("logged in successfully");
        }else if(request.status===403)
        {alert("user name/password is incorrect");
        } else if(request.status===500){
            alert("something went wrong on server");
        }
        }
};
        
        
        
       // Typical action to be performed when the document is ready:
       //var names = request.responseText;
       //names=JSON.parse(names);
// var list;
//var names=['name1','name2'];
   //   for(var i=0; i<names.length;i++)
//
  //    var div= document.getElementById("holdtext");
      
    //  div.innerHTML=names;
      //  }
    //}

//};
//var username= document.getElementById("ctext");
//var name=nameInput.value;
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
console.log(username);
console.log(password);
//request.open('POST', 'http://shweta007.imad.hasura-app.io/create-user' , true);
request.open('POST', 'http://shweta007.imad.hasura-app.io/login' , true);
request.setRequestHeader('Content-Type','application-json');
request.send(JSON.stringify({username:username,password:password})); 
};