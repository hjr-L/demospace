
const { Configuration, OpenAIApi } = require("openai");
const tunnel = require("tunnel");
const configuration = new Configuration({
  apiKey: "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",
//   apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports =  async function(messages){
    if (!configuration.apiKey) {
        return Promise.reject('The apikey is empty')
    }
    try {
        const completion = await openai.createCompletion(
            {
              // model: "gpt-3.5-turbo",
              model: "text-davinci-003",
              // prompt: question,
              // messages: messages,
              prompt: messages.map(msg => msg.role + ': ' + msg.content).join('\n'),
              temperature: 0.6,
              max_tokens: 1000,
              // stream:True,//流返回
            },
            {
              httpsAgent: tunnel.httpsOverHttp({
                proxy: {
                  host: "127.0.0.1",
                  port: 33210,
                },
              }),
            }
          );
          return completion.data.choices[0].text;
    } catch (error) {
        console.log(error);
        return Promise.reject(error.message)
    }
}
