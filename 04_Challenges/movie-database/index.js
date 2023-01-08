const express = require("express");
const app = express();
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

app.get("/", (req, res) => {
    res.status(200).send("ok");
});

app.get("/test", (req, res) => {
    res.json({status:200, message:"ok"});
});

app.get("/time", (req, res) => {
    const date = new Date();
    res.json({status:200, message: date.getHours() + ':' + date.getMinutes()});
});
//in get method you use queiries and params, params are inside the url directly (without using ?), queries are used within a question mark inside a url also 
//there is no body in get unlike post method(no queries in post)
app.get("/hello/:id", (req, res) => {
    res.json({status:200, message:"Hello, "+ req.params.id});
});

app.get("/search", (req, res) => {
    const search= req.query.s;
    if(search){
        res.json({status:200, message:"ok", data: search});
    }
    else{
        res.status(500).json({status:500, error:true, message:"you have to provide a search"});
    }
});

//Movies
app.get("/movies/create", (req, res) => {
    res.json({status:200, message:"ok"});
});
app.get("/movies/read", (req, res) => {
    res.json({status:200, data: movies});
});
app.get("/movies/update", (req, res) => {
    res.json({status:200, message:"ok"});
});
app.get("/movies/delete", (req, res) => {
    res.json({status:200, message:"ok"});
});

app.get("/movies/read/by-date", (req, res) => {
    const byDate = movies.sort((a,b) => {return a.year - b.year});

    res.json({status:200, data: byDate});
});
app.get("/movies/read/by-rating", (req, res) => {
    const byRating = movies.sort((a,b) => {return a.rating - b.rating});
    res.json({status:200, data: byRating});
});
app.get("/movies/read/by-title", (req, res) => {

    const byTitle = movies.sort((a,b) => {return a.title.localeCompare(b.title)});
    res.json({status:200, data: byTitle});
});




app.listen(4000, () => {
    console.log("Listen on the port 4000...");
});