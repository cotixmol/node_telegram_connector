import pythonBotService from '../integration/pythonBotService.js';
import telegramService from '../integration/telegramService.js';

const processIncomingMessage = async (message) => {
  console.log("message in processIncomingMessage ", message)
  let response = await pythonBotService.sendMessageToPythonService(message);
  await telegramService.sendResponseToTelegram(response);
};

export default { processIncomingMessage };
