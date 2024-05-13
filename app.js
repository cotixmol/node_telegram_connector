import express from 'express';
import dotenv from 'dotenv';
import telegramMessageController from './src/controller/telegramMessageController.js';

dotenv.config();

const app = express();

app.use(express.json());

app.post('/webhook/telegram', telegramMessageController.handleIncomingTelegramMessage);

export default app;
