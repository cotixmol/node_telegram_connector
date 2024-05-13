import messageService from '../service/messageService.js';

const handleIncomingTelegramMessage = async (req, res) => {
  try {
    let { message } = req.body;
    await messageService.processIncomingMessage(message);
    res.status(200).send('Message processed');
  } catch (error) {
    console.error('Error in messageController:', error);
    res.status(500).send('Error processing message');
  }
};

export default { handleIncomingTelegramMessage };
