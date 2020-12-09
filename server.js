const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist"));

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("App listening on port " + port);
});

app.use("/api", (req, res) => {
    res.send("Hello Okonomi-yaki!!");
});

/*
app.get("/api/hiroshima", async (req, res) => {

    const shopData = [];

    const gnaviParams = {
        baseUrl: "https://api.gnavi.co.jp/RestSearchAPI/v3/?",
        id: process.env.API_KEY_gurunavi,
        pref: "PREF13", // 東京都でフィルター
        genre: "お好み焼き",
        style: "広島", // 広島 or 大阪
        hitPerPage: "10",
    }

    let url = gnaviParams.baseUrl
        + "keyid=" + gnaviParams.id
        + "&pref=" + gnaviParams.pref
        + "&freeword=" + gnaviParams.genre
        + "&freeword=" + gnaviParams.style
        + "&hit_per_page=" + gnaviParams.hitPerPage;
    
    const gnaviResponse = await axios.get(url);

    res.gnaviResponse.data;
    
});
*/