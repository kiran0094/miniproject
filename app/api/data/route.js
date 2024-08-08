import OpenAI from "openai";

export async function POST(request) {
  const axios = require('axios');
  const rapidAPIKey = process.env.APIKEY;
  const rapidAPIHost = 'chatgpt-42.p.rapidapi.com';
  const chatGPTUrl = 'https://chatgpt-42.p.rapidapi.com/gpt4';

  try {
    const requestData = await request.json();
    const prompt = requestData.prompt;

    if (!prompt) {
      return new Response(JSON.stringify({ error: { message: "Invalid prompt" } }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const options = {
      method: 'POST',
      url: chatGPTUrl,
      headers: {
        'x-rapidapi-key': rapidAPIKey,
        'x-rapidapi-host': rapidAPIHost,
        'Content-Type': 'application/json'
      },
      data: {
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        web_access: false
      }
    };

    const response = await axios.request(options);
    console.log(response.data);

    return new Response(JSON.stringify({ response: response.data }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    console.error('Error occurred:', error);
    return new Response(JSON.stringify({ error: { message: "An error occurred" } }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
