import axios from 'axios';

const sendMessageToPythonService = async (message) => {

  if (message.text=="/start"){
    return {"chat_id":message.chat.id,"message":"Great, what expenses do you want to save?"}
  }

  let formattedMessage = {
    "user_id": message.chat.id,
    "text": message.text,
    "first_name": message.chat.first_name,
    "last_name": message.chat.last_name
  };

  let response  = await axios.post(`${process.env.PYTHON_BOT_SERVICE_URL}/process_message`, formattedMessage );

  return response.data;
};

export default { sendMessageToPythonService };
