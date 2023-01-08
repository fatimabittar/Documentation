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

app.listen(4000, () => {
    console.log("Listen on the port 4000...");
});