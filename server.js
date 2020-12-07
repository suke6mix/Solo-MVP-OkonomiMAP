const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("App listening on port " + port);
});

app.use("/api", (req, res) => {
    res.send("Hello Okonomi-yaki!");
});
