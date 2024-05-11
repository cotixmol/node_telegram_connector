import axios from 'axios';

const sendMessageToPythonService = async (message) => {

  const formattedMessage = {
    user_id: message.chat.id,
    text: message.text,
    first_name: message.chat.first_name,
    last_name: message.chat.last_name
  };

  // await axios.post(process.env.PYTHON_BOT_SERVICE_URL, formattedMessage);
  return {"message":formattedMessage};
};

export default { sendMessageToPythonService };
