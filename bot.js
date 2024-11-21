console.log("Bot 101 Starting");

//#region Khai bao cac thu vien tham chieu
require("dotenv").config(); //cach khai báo cho CommonJS
//const fetch = require('node-fetch'); đay la khai bao fetch cho phien ban node cu hon ban 18x. từ bản 18x tro đi khong Fetch da đuoc tich hop san trong bo thu vien của node nen khong can install nua
require("./commands/sayHi");
//#endregion

let guild;
let testBotChannel;

//#region Qua trinh tao cac tham so client, khai bao thao tac cho bot va đang nhap bot thong qua token
//tao hang Discord
//const Discord = require('discord.js'); //phien ban cu
const {
  Client,
  Events,
  GatewayIntentBits,
  //PermissionsBitField, cai nay ko can nua vi da đc khai bao trong file offline can thiet
} = require("discord.js");
//tao hang cilent (bot)
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
//token cua bot
const TOKEN = process.env.DISCORD_TOKEN;
//cho bot đang nhap discord thong qua token
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
// Log in to Discord with your client's token
client.login(TOKEN);
//#endregion

//#region Qua trinh kiem tra va lay thong tin guild, test bot channel. say hello khi bot moi bat lai
client.on("ready", readyDiscord);
function readyDiscord() {
  //ham nay se vua lay thong tin guild cung nhu nhan tin hello
  guild = client.guilds.cache.first();
  if (!guild) {
    console.log("BOT not in any server right now");
    return;
  }
  //Gui Hello toi kenh chat test bot
  testBotChannel = guild.channels.cache.find(
    (channel) => channel.id == process.env.TEST_BOT_CHANNEL_ID
  );
  if (!testBotChannel) {
    console.log("Bot does not found test-bot channel to say hi");
    return;
  }
  testBotChannel.send("Boss đã trở lại rồi đây. Ai nhớ Boss không nào?");
  console.log("Login👌");
}
//#endregion

//#region gui tin nhan chao tam biet
//process.on("SIGINT", sendGoodBye);

//#endregion

//#region Gui thong bao chao mung nguoi  moi trong kenh general
client.on("guildMemberAdd", welcomeNewbie);
function welcomeNewbie(newMember) {
  const generalChannel = newMember.guild.systemChannel; //hằng trong hàm, kênh general để chào mừng
  if (!generalChannel) return;
  generalChannel.send(
    `Adu, ${newMember.user.username} vừa vào Server này! 👌👍🙌. Vào kênh test-bot để chơi vs bé nha 😁😸🤖👾`
  );
}
//#endregion

const commandHandler = require("./command");

client.on("messageCreate", commandHandler);

// if (isOwner && hasAdminPermission) {
//   msg.channel.send("Bạn là chủ server. va admin");
// } else if (hasAdminPermission) {
//   msg.channel.send("Bạn có quyền admin.");
// } else {
//   msg.channel.send("Bạn không phải là chủ server hoặc admin.");
// }

// console.log(msg);
// if(msg.mentions.has(client.user)){
//   msg.reply("test gọi bot");
// }
