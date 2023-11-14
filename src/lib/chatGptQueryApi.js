import openai from "./chatgpt";

const openAiQuery = async(prompt, chatId, model) => {
    
    const res = await openai.chat.completions.create(
        {
            prompt,
            model,
            temperature: 0.9,
            top_p: 0.1,
            max_tokens: 1000,
            frequency_penalty: 0,
            presence_penalty: 0,

        }
    ).then((res)=>{
        return res.data.choices[0].text
    }).catch((err)=> {
        return `Chatgpt is unable to find the answer for that. Error(${err.message})`
    })
    return res;

}

export default openAiQuery