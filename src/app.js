import express from 'express';
import dotenv from 'dotenv';
import telegramMessageController from './controller/telegramMessageController.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook/telegram', telegramMessageController.handleIncomingTelegramMessage);

app.post('/webhook/telegramtest', (req, res) => {
  const { message } = req.body;
  console.log('Received message:', message);
  res.status(200).send('Received');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

