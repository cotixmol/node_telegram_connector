import axios from 'axios';

const sendResponseToTelegram = async (responseFromPythonBot) => {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  await axios.post(url, {
    chat_id: responseFromPythonBot.chat_id,
    text: responseFromPythonBot.message,
  });
};

export default { sendResponseToTelegram };
