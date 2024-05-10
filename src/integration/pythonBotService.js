import axios from 'axios';

const sendMessageToPythonService = async (message) => {
  const response = await axios.post(process.env.PYTHON_BOT_SERVICE_URL, message);
  return response.data;
};

export default { sendMessageToPythonService };
