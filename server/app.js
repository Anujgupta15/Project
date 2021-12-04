const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static("public"));

const DB='mongodb+srv://projectone:projectone135@cluster0.ghwx9.mongodb.net/projectone?retryWrites=true&w=majority';
mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
    

}).then(() =>{
    console.log(`Connection successful`);

}).catch((err) => console.log(err));


const articleSchema = {

    end_year:String, 
    intensity:String ,
     sector:String ,
     topic:String, 
    insight:String ,
     url:String, 
    region:String ,
     start_year:String ,
     impact:String ,
     added:String, 
    published:String ,
     country:String, 
    relevance:Number ,
     pestle:String ,
     source:String ,
     title:String ,
    likelihood:String


}

const Article = mongoose.model("Article", articleSchema);

app.get("/articles",function(req,res){

    Article.find(function(err, foundArticles){

        if(!err){
            var data_filter = foundArticles.filter(element => element.topic =="gas")
            


            res.send(data_filter);
        } else {
            res.send(err);
        }

    })

})

app.get("/",function(req,res){

    Article.find(function(err, foundArticles){

        if(!err){
            var data_filter = foundArticles.filter(element => element.topic =="gas")
            


            res.send(data_filter);
        } else {
            res.send(err);
        }

    })

})


// app.route("/articles/:articleRelevance")
// .get(function(req, res){
//     Article.filter({relevance: req.params.articleRelevance}, function(err,foundArticle){

//         if(foundArticle){
//             res.send(foundArticle);
//         }

//         else{
//             res.send("No articles matching");
//         }
//     });
// });

// app.route("/articles/:articleRelevance")
// .get(function(req, res){
//     Article.find(function(err,foundArticles){

//         var data_filter = foundArticles.filter(function(i,n){
//             return n.topic===req.params.articleRelevance;
//         })
    
//         console.log(data_filter);
//     });
   


// var result=Article.filter(obj=> obj.relevance == req.params.articleRelevance );
// console.log(result);

// console.log(Article);

// });


app.listen(5000, function() {
  console.log("Server started on port 5000");
});