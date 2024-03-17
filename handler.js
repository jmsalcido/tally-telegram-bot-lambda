const AWS = require('aws-sdk');
const crypto = require('crypto');
const TelegramBot = require('node-telegram-bot-api');

module.exports.webhook = async (event) => {
    const body = JSON.parse(event.body);
    const signature = event.headers['Tally-Signature'];

    const secret = process.env.TALLY_SECRET;

    const hash = crypto.createHmac('sha256', secret)
        .update(JSON.stringify(body))
        .digest('base64');

    if (hash !== signature) {
        console.log('Signature verification failed');

        return {
            statusCode: 403,
            body: JSON.stringify({message: 'Invalid signature'}),
        };
    }

    console.log('Signature verified');

    const botToken = event.headers['X-TG-TOKEN']
        ? event.headers['X-TG-TOKEN']
        : process.env.TELEGRAM_DEFAULT_BOT_TOKEN;

    const chatId = event.headers['X-CHAT-ID']
        ? event.headers['X-CHAT-ID']
        : process.env.TELEGRAM_DEFAULT_CHAT_ID;

    const bot = new TelegramBot(botToken, {polling: false});
    await bot.sendMessage(chatId, 'Webhook received!');

    return {
        statusCode: 200,
        body: JSON.stringify({message: 'Webhook received!'}),
    };
};
