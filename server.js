var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var Pool=require('pg').Pool;
var config={
    user:'shweta007',
    database:'shweta007',
    host:'db.imad.hasura-app.io',
    port:'8080',
    password: process.env.db_PASSWORD
    
};



var names=[];
app.get('/comment',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/article-one',function(req,res){
    res.send('this is my article one any where it is getting' );
});

/*app.get('/article-one',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});*/

var pool  = new Pool(config);
app.get('/test-db',function(req,res){
    
    pool.query('SELECT * from test',function(err,result)
    {
        if(err)
        {
            res.status(500).send(err.toString());
            
        }else
        {
            res.send(JSON.stringify(result));
        }
    });
    
});

app.get('/ui/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/registration',
function(req,res)
{
    res.sendFile(path.join(__dirname,'ui','registration.html'));
}
);


app.get('/ui/comment',
function(req,res)
{
    res.sendFile(path.join(__dirname,'ui','comment.html'));
}
);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
