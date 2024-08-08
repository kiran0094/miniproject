const axios = require('axios');

export const handleSubmit = async (prompt) => {
  prompt="give me a linked in post for"+prompt;
  try {
    const response = await axios.post('/api/data', {    
      "prompt": prompt.trim()
    });
    return response.data.response.result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};