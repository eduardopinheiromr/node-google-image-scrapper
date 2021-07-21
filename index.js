const express = require("express");
const getImagesHandler = require("./src/controllers/scrapper");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Home"));

app.get("/image/:query/:quantity?", getImagesHandler);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
