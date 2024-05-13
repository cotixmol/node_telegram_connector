import express from 'express';
import dotenv from 'dotenv';
import telegramMessageController from './src/controller/telegramMessageController.js';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/message_sample', (req, res) => {
  let message = req.body;
  console.log(message);
  res.status(200).send('Message received');
});


app.post('/webhook/telegram', telegramMessageController.handleIncomingTelegramMessage);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
