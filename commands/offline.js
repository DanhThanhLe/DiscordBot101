const {PermissionsBitField} = require("discord.js")

module.exports = function sendGoodBye(msg) {
  //kiem ta nguoi gui co phai admin ko, ko phai thi bot ko tat
  if (
    msg.author.id === msg.guild.ownerId ||
    msg.member.permissions.has(PermissionsBitField.Flags.Administrator)
  ) {
    //neu nguoi gui là chu server hoac la admin role thi ok
    console.log("Dang tat bot");
    msg.channel.send("Bot Offline để fix bug nha :v").then(() => {
      console.log("Offline");
      process.exit(0);
    });
  } else {
    msg.channel.send("Ní ko phải admin, sao tắt đc tui o(*￣︶￣*)o");
  }
};

//#region old
//   client.on("messageCreate", (msg) => {
//     if (msg.author.bot) return;
//     // Kiểm tra nếu người gửi là chủ server
//     console.log(isOwner);
//     // Kiểm tra nếu người gửi có quyền admin
//     const hasAdminPermission = !;
//     console.log(hasAdminPermission);
//     const permissions = msg.member.permissions.toArray(); // Lấy danh sách quyền dưới dạng mảng
//       console.log(`Danh sách quyền của người gửi: ${permissions.join(", ")}`);
//     console.log(`${permissions.join(", ")}`);
//     console.log("-----------------");
//   });
//#endregion
