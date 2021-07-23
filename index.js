const express = require("express");
const cors = require("cors");
const getImagesHandler = require("./src/controllers/scrapper");
const PORT = process.env.PORT || 5000;

// INIT
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.static("public"));

// ROUTES
app.get("/", (req, res) => res.send("Home"));
app.get("/image/:query/:quantity?", getImagesHandler);

// START
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
