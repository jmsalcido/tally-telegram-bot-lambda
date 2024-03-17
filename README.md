# Telegram Telly Lambda

This is a serverless Telegram bot that uses AWS Lambda and API Gateway to send messages to a Telegram chat using the
webhook api from Telly.

Create your Form in the Telly app, deploy this serverless function and set the URL in the Telly app.

https://tally.so

## Usage

1. Create a new bot in Telegram using the BotFather
2. Create a new form in Tally
3. Deploy this serverless function
4. Set the URL of the serverless function in the Tally app
5. Start sending messages to your Telegram chat from Tally responses

## Deployment

1. Install the Serverless Framework
2. Deploy the function

## TL;DR:

```bash
$ npm install -g serverless
$ serverless deploy
```

Copy the URL and be happy.
