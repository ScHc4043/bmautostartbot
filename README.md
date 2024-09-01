# Binmaster Auto start discord bot
## Features

- **Start Console App**: Launches the specified console application (`binmaster-auction-win.exe`).
- **Stop Console App**: Terminates the running console application.
- **Exit Node.js Application**: Gracefully exits the Node.js application and logs out the bot.
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
