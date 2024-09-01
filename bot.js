const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
const { exec, execSync, spawn } = require('child_process');
const axios = require('axios');
require('child_process').execSync('hide.exe', {stdio: 'inherit'});

const TOKEN = 'YOUR BOT TOKEN';
const WEBHOOK_URL = 'A WEBHOOK';
const clientId = 'YOUR BOTS CLIENT ID';

let consoleProcess;


const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});


async function sendWebhookMessage(message) {
    try {
        await axios.post(WEBHOOK_URL, {
            content: message
        });
    } catch (error) {
        console.error('Error sending webhook message:', error);
    }
}

// Function to clean the console output
function cleanConsoleOutput(data) {

    return data.replace(/\x1b\[.*?m/g, '');
}


function startConsoleApp() {
    if (consoleProcess) {
        console.log('Console app is already running.');
        return;
    }

    consoleProcess = exec('binmaster-auction-win.exe', {
        windowsHide: true  // Hide the console window
    });

    consoleProcess.stdout.on('data', (data) => {
        const cleanedData = cleanConsoleOutput(data.toString());
        console.log(`stdout: ${cleanedData}`);
        sendWebhookMessage(cleanedData);
    });

    consoleProcess.stderr.on('data', (data) => {
        const cleanedData = cleanConsoleOutput(data.toString());
        console.error(`stderr: ${cleanedData}`);
        sendWebhookMessage(`Error: ${cleanedData}`);
    });

    consoleProcess.on('close', (code) => {
        console.log(`Console app exited with code ${code}`);
        sendWebhookMessage(`Console app exited with code ${code}`);
        consoleProcess = null;
    });
}


function stopConsoleApp() {
    if (consoleProcess) {
        try {
            execSync(`taskkill /PID ${consoleProcess.pid} /T /F`);
            console.log('Console app stopped.');
            sendWebhookMessage('Console app stopped.');
        } catch (error) {
            console.error('Failed to stop the console app:', error);
            sendWebhookMessage('Failed to stop the console app.');
        } finally {
            consoleProcess = null;
        }
    } else {
        console.log('Console app is not running.');
    }
}


(async () => {
    const rest = new REST({ version: '10' }).setToken(TOKEN);

    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: [
                {
                    name: 'start',
                    description: 'Start the console app'
                },
                {
                    name: 'stop',
                    description: 'Stop the console app'
                },
                {
                    name: 'exit',
                    description: 'Exit the Node.js application'
                }
            ] }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'start') {
        startConsoleApp();
        await interaction.reply('Starting the console app...');
    } else if (commandName === 'stop') {
        stopConsoleApp();
        await interaction.reply('Stopping the console app...');
    } else if (commandName === 'exit') {
        await interaction.reply('Exiting the application...');
        process.exit(0);
    }
});

client.login(TOKEN);
