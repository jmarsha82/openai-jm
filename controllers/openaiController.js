const openai = require("../config/openaiConfig");

const generateMeta = async (title) => {
    const description = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: `Generate a meta description for the following YouTube video title: ${title}`
            }
        ],
        max_tokens: 100
    });

    console.log(description.choices[0].message);

    const tags = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: `Come up with 10 tags for the following YouTube video title: ${title}`
            }
        ],
        max_tokens: 100
    });

    console.log(tags.choices[0].message);
}

const generateImage = async (desc) => {
    const image = await openai.images.generate({
        prompt: desc,
        n: 1,
        size: "512x512"
    });
    console.log(image.data[0].url);
}

module.exports = { generateMeta, generateImage };