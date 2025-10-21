const express = require("express");
const { generateMeta, generateImage } = require("./controllers/openaiController");

const app = express();

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

app.use(express.json());

app.post("/generate-meta", generateMeta);
app.post("/generate-image", generateImage);