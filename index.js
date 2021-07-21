const express = require("express");
const getImagesHandler = require("./src/controllers/scrapper");
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => res.send("Home"));

app.get("/image/:food", getImagesHandler);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
