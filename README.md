# Discord Bot for Console Application Management

This repository contains a Node.js application that manages a console application via a Discord bot. The bot can start, stop, and exit the console application using slash commands in Discord.

## Features

- **Start Console App**: Launches the specified console application (`binmaster-auction-win.exe`).
- **Stop Console App**: Terminates the running console application.
- **Exit Node.js Application**: Gracefully exits the Node.js application and logs out the bot.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Discord Bot Token**: You need a bot token from Discord to use this bot.
- **Discord Webhook URL**: You need a webhook URL to send messages.

## Getting Started

### 1. Set Up Your Discord Bot

1. **Create a Discord Application**:
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications).
   - Click on **New Application** and give it a name.

2. **Create a Bot User**:
   - In your application settings, navigate to the **Bot** tab.
   - Click **Add Bot** and confirm.

3. **Get Your Bot Token**:
   - Under the **Bot** tab, click **Copy** to get your bot token. **Keep this token secret**.

4. **Invite Your Bot to a Server**:
   - In your application settings, navigate to the **OAuth2** tab.
   - Under **OAuth2 URL Generator**, select **bot** under **SCOPES** and choose the necessary permissions under **BOT PERMISSIONS**.
   - Copy the generated URL and paste it into your browser to invite your bot to your Discord server.

### 2. Set Up a Discord Webhook

1. **Create a Webhook**:
   - Go to your Discord server and select the text channel where you want to receive messages.
   - Click the settings icon (⚙️) next to the channel name.
   - Navigate to the **Integrations** tab and click **Create Webhook**.
   - Give your webhook a name and copy the webhook URL.

2. **Use the Webhook URL**:
   - Paste the webhook URL into the `index.js` file where indicated.

### 3. Download the repository
- after you down load extract run this
  
```
npm install
```

This command will read the package.json file and install all the dependencies listed.

5. Configure the Bot
Open index.js in your favorite text editor.

Replace the placeholder values with your actual bot token and webhook URL.

```javascript
const TOKEN = 'YOUR_BOT_TOKEN'; // Replace with your actual bot token
const WEBHOOK_URL = 'YOUR_WEBHOOK_URL'; // Replace with your actual webhook URL
const clientId = 'YOUR_CLIENT_ID'; // Replace with your actual client ID
```
6. Run the Bot
Start the bot using Node.js:
```
node bot.js
```



### Troubleshooting
 - Bot Not Responding: Ensure the bot token is correct and the bot has the necessary permissions in the Discord server.
 - Console Application Issues: Check the path and executable name of the console application. Ensure it's located in the correct directory.
 - Webhook Not Sending Messages: Verify that the webhook URL is correct and that the webhook is properly configured in Discord.
