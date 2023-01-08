const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("ok");
});

app.listen(4000, () => {
    console.log("Listen on the port 4000...");
});