const readline = require("readline");
const { generateMeta } = require("./controllers/openaiController");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("YouTube Video Title: \n", generateMeta);