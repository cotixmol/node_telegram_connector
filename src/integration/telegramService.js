import axios from 'axios';

const sendResponseToTelegram = async (response_data) => {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  let responseToTelegram = {
    "chat_id": response_data.message.user_id,
    "text": response_data.message.content,
  }
  await axios.post(url, responseToTelegram);
};

export default { sendResponseToTelegram };
