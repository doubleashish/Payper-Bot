const {Client, GatewayIntentBits} = require('discord.js');
require('dotenv').config(); // Load environment variables from .env file (for local development)

const token = process.env.DISCORD_BOT_TOKEN;   // Access the token using process.env

if (!token) {  // Ensure the token exists before proceeding
    console.error('Error: DISCORD_BOT_TOKEN not found in environment variables.');
    process.exit(1);}


const client = new Client({intents: [GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent]});

client.on("messageCreate",(message) => 
    {if (message.author.bot) return; 
        message.reply({content: "Hi from bot"})})

client.on("interactionCreate")
client.login(token)
