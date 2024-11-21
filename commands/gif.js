module.exports = async function sendGif(msg, tokens) {
  let keywords = "codingtrain"; //tu khoa mac dinh tim kiem neu khong co tu khoa di kem
  if (tokens.length > 0) {
    //length lon hon 1 nghia la dau vao co keyword de tim kiem
    keywords = tokens.join(" "); //tach keywork ra tu mang tokens bang lenh slide, la tu vi tri 1 toi het mang, join hai phan tu vua lay duoc, cah nhau bang khoang trang
  }
  msg.channel.send("Gif nè");
  msg.channel.send(`Từ khóa gif là: ${keywords}`);
  let curl = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.TENOR_API_KEY}&limit=1&random=true&ContentFilter=medium`;
  let response = await fetch(curl);
  let json = await response.json();
  //console.log(json.results);
  msg.channel.send(json.results[0].url);
};
