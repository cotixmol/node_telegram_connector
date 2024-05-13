import axios from 'axios';

const sendMessageToPythonService = async (message) => {
  let formattedMessage = {
    "user_id": message.message.chat.id,
    "text": message.message.text,
    "first_name": message.message.chat.first_name,
    "last_name": message.message.chat.last_name
  };
  
  let response  = await axios.post(`${process.env.PYTHON_BOT_SERVICE_URL}/process_message`, formattedMessage );

  return response;
};

export default { sendMessageToPythonService };
