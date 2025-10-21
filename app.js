const readline = require("readline");
const { generateMeta, generateImage } = require("./controllers/openaiController");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// r1.question("YouTube Video Title: \n", generateMeta);
r1.question("Description: \n", generateImage);