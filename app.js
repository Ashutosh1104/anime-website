var express    = require('express'),
    anime      = require('anime-scrapper'),
    bodyParser = require('body-parser')
    app        = express();

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get('/',function(req,res){
    Promise.all([anime.getTop100('week'),anime.getTopCharacters(15,'loved')]).then((values)=>{
        anime.getSeasonal('').then(result=>{
            anime.getTopCharacters(15,'hated').then(hated=>{
                //res.send(values)
                res.render('templates/landing',{animes:values[0],Characters:values[1],hated:hated,seasonalAnime:result.anime.slice(0,15),seasonalMovies:result.movies})
            })
        })
    })
})

app.get('/:type/:name',function(req,res){
    a=req.params.name
    b=req.params.type
    anime.getallbyName(a,b).then((result)=>{
        res.render('templates/show',{anime:result.details,characters:result.characters,staffs:result.staff,similars:result.similar})
    })  
})

app.get('/nav',function(req,res){
    res.render('partials/navbar')
})



app.listen('3000',function(){
    console.log('server started')
})