import axios from 'axios';

const sendResponseToTelegram = async (response) => {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  await axios.post(url, {
    "chat_id": response.user_id,
    "text": response.content,
  });
};

export default { sendResponseToTelegram };
