import pythonBotService from '../integration/pythonBotService.js';
import telegramService from '../integration/telegramService.js';

const processIncomingMessage = async (message) => {
  const responseFromPythonBot = await pythonBotService.sendMessageToPythonService(message);
  await telegramService.sendResponseToTelegram(responseFromPythonBot);
};

export default { processIncomingMessage };
