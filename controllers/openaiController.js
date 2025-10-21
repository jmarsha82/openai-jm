const openai = require("../config/openaiConfig");

const generateMeta = async (req, res) => {
    const { title } = req.body;
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

    res.json({ description: description.choices[0].message, tags: tags.choices[0].message });
}

const generateImage = async (req, res) => {
    const image = await openai.images.generate({
        prompt: req.body.prompt,
        n: 1,
        size: "512x512"
    });
    res.json({ image: image.data[0].url });
}

module.exports = { generateMeta, generateImage };