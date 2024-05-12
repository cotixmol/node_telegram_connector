import express from 'express';
import dotenv from 'dotenv';
import telegramMessageController from './src/controller/telegramMessageController.js';

dotenv.config();

const app = express();

app.use(express.json());

app.post('/webhook/telegram', telegramMessageController.handleIncomingTelegramMessage);

app.post('/webhook/telegramtest', (req, res) => {
  const { message } = req.body;
  console.log('Received message:', message);
  res.status(200).send('Received');
});

export default app;
