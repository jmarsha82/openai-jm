const openai = require("../config/openaiConfig");

const generateMeta = async (title) => {
    const description = await openai.createChatCompletion({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: `Generate a meta description for the following YouTube video title: ${title}`
            }
        ],
        max_tokens: 100
    });

    console.log(description.data.choices[0].message);
}

module.exports = { generateMeta };