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
    port:'5432',
    password: 'db-shweta007-4023'
    
};



var names=[];
app.get('/comment',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});


var articles={
    
'article-one':{
                title:'Article One',
                heading:'Article One',
                date:'Feb 5,2017',
                content:`
                <p>
                this is my first article .this is my first article .this is my first article .this is my first article .this is my first article . .
                </p>
                <p>
                this is my first article .this is my first article .this is my first article .this is my first article .this is my first article . .
                </p>
                <p>
                this is my first article .this is my first article .this is my first article .this is my first article .this is my first article . .
                </p>`
    
    
},
'article-two':{
                title:'Article Two',
                heading:'Article Two',
                date:'Feb 5,2017',
                content:`
                <p>
                this is my second article  . .
                </p>`
    
},
'article-three':{
                title:'Article Three',
                heading:'Article Three',
                date:'Feb 5,2017',
                content:`
                <p>
                this is my third article  . .
                </p>`
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1 "/>
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
    <div class="container">
        <div>
        <a href="/">Home</a>   
        </div>
        <div>
        <h3>
        ${heading}
        </h3>
        </div>
        <div>
        ${date.toDateString()}
        </div>
        
        <div>
        ${content}
        </div>
    
    </div>
     </body>
</html>

    
`;
return htmlTemplate;
}

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/articles/:articleName',function(req,res)
{
    pool.query("SELECT * FROM article1 WHERE title=$1" ,[req.params.articleName],function(err,result){
        
        if(err){
            res.status(500).send(err.toString());
        }else {
            if(result.rows.length===0){
                res.status(404).send('article not found');
            } else{
                var articleData=result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
    });
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
            res.send(JSON.stringify(result.rows));
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
