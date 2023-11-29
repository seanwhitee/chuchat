import openai from "./chatgpt";

const openAiQuery = async (prompt, chatId, model) => {
  const res = await openai.chat.completions
    .create({
      messages: [
        {
          role: "system",
          content:
            "You are a Chatbot named chatgpt. You are assertive, confident and never apologize. All the response you provide should be markdown format.",
        },
        { role: "user", content: prompt },
      ],
      model,
      temperature: 0.9,
      top_p: 0.1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => {
      return res["choices"][0]["message"]["content"];
    })
    .catch((err) => {
      return `Chatgpt is unable to find the answer for that. Error(${err.message})`;
    });
  return res;
};

export default openAiQuery;
