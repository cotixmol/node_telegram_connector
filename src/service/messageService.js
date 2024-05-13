import pythonBotService from '../integration/pythonBotService.js';
import telegramService from '../integration/telegramService.js';

const processIncomingMessage = async (message) => {
  let response = await pythonBotService.sendMessageToPythonService(message);
  await telegramService.sendResponseToTelegram(response.data);
};

export default { processIncomingMessage };
