const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors());

app.get("/api", (req, res) => {
res.json({dogs: ["husky", "alaskanMalamute", "GermanShepherd", "LeonBerger", "Poodle"]})

});

app.listen(8080, () => {
    console.log("server is running")
});
