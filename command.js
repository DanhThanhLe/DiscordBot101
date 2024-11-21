const sayHi = require("./commands/sayHi.js");
const sendGif = require("./commands/gif.js");
const offline = require("./commands/offline.js");

const commandsList = {
  hi: sayHi,
  gif: sendGif,
  off: offline,
};

module.exports = async function gotMessage(msg) {
  if (msg.channel.id != process.env.TEST_BOT_CHANNEL_ID) {
    return;
  } else {
    let tokens = msg.content.split(" "); //tach message thanh 1 mang de xu ly
    let command = tokens.shift(); //lay thong tin command o index thu 0
    if (command.charAt(0) === "!") {
      //kiem tra tinh hop le cua command (dieu kien:  co ! o dau)
      command = command.substring(1);
      commandsList[command](msg, tokens); //goi ham xu li tuong ung
      //can nang cap thanh ban tot hon -> kiem tra xem lenh co dc ho tro ko -> kiem tra lenh co trong danh sach khong
    }
  }
  //&& msg.member.permissions.has('ADMINISTRATOR'
};

//#region old

//==============
// //console.log(msg.member.roles);
// let tokens = msg.content.split(" ");
// if(msg.content === 'Hi'){
//   const index = Math.floor(Math.random() * randomRepliesExample.length);//hàm này trả về 1 số random từ 0 tới length của randomRepliesExample (kết quả trả về có thể sẽ là số thập phân và được làm tròn xuống)
//   msg.channel.send(randomRepliesExample[index]);
// }
// if(tokens[0] == '!gif'){
//   let keyworks = "codingtrain";//tu khoa mac dinh tim kiem neu khong co tu khoa di kem
//   if(tokens.length > 1){ //length lon hon 1 nghia la dau vao co keyword de tim kiem
//     keyworks = tokens.slice(1, tokens.length).join(" ");//tach keywork ra tu mang tokens bang lenh slide, la tu vi tri 1 toi het mang, join hai phan tu vua lay duoc, cah nhau bang khoang trang
//   }
//   msg.channel.send('Gif nè');
//   let curl = `https://tenor.googleapis.com/v2/search?q=${keyworks}&key=${process.env.TENOR_API_KEY}&limit=1&random=true&ContentFilter=medium`;
//   let response = await fetch(curl);
//   let json = await response.json();
//   //console.log(json.results);
//   msg.channel.send(json.results[0].url);
// }

// if(msg.content === '!off'){
//   console.log(msg.member.guild.flags);
//   console.log('=========================================================================================');
//   //console.log(msg.)
//   //sendGoodBye();
// }
// } //&& msg.member.permissions.has('ADMINISTRATOR'

//#endregion
