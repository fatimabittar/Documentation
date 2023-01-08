const express = require("express");
const app = express();

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


app.listen(4000, () => {
    console.log("Listen on the port 4000...");
});