//#region Bat va gui lai tin nhan vs tin nhan dung. gui Gif khi co tin nhan !gif
const randomRepliesExample = [
  //danh sach cac cau tra loi random
  "Cái gì ಠ﹏ಠ",
  "Yêu máy tính bạn như yêu vợ bạn 😁😁",
  "Mình cũng vậy :))",
  "Sao, muốn gì? ╰（‵□′）╯",
];

module.exports = function (msg) {
  console.log(msg.content);
  if (msg.channel.id != process.env.TEST_BOT_CHANNEL_ID) {
    console.log("not ok");
    return;
  } else {
    console.log("ok");
    const index = Math.floor(Math.random() * randomRepliesExample.length); //hàm này trả về 1 số random từ 0 tới length của randomRepliesExample (kết quả trả về có thể sẽ là số thập phân và được làm tròn xuống)
    msg.channel.send(randomRepliesExample[index]);
  }
};
//#endregion
