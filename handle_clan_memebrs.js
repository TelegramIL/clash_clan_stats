const fetch = require("node-fetch");


var clash_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM1MWExNjZmLTI4ZmQtNDVhZC1iYjUyLWZmNGQ4NDI4NDc5YSIsImlhdCI6MTU0MTg3NTgxOCwic3ViIjoiZGV2ZWxvcGVyLzJmMmRhZTA3LTMxN2EtNmY0Ny01MzEwLWZlYzE4NDBhNTViMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3Ny4xMjQuMTIzLjE2NiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.BFV06SKfHgnLNarsuwP12TrHTPGjkjC3yxp614jEZhVCPpEzmzaeaecyR9QlnL-PbYyEoxqfr7MpDxHu1gP4LQ';

var globalclientId;
var globalTeleBot;


module.exports = {
    getMembers: function getMembers(clientId, bot)
    {
        globalclientId = clientId;
        globalTeleBot = bot;
        return getMemberList();
    },
    bar: function () {
    // whatever
    }
};


  const getMemberList = async () =>
  { console.log("getMemberList START")
    var response = await fetch('https://api.clashroyale.com/v1/clans/%23PL8GLLC', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'authorization': 'Bearer ' + clash_token,
        },
      }).catch(function(error) {
        console.log(error);
    });
      var myJson = await response.json();
        var clanDescription = myJson.description;
        var members = myJson.memberList.map(member => ([{text: member.name + ':   '  + member.trophies + ' 👑 ' + '                     ' , callback_data: member.tag}]));
        var inlineUsers = {
            parse_mode: "HTML",
            disable_web_page_preview: false,
            reply_markup: JSON.stringify({
                inline_keyboard: members
            })
        }
        return {menu: inlineUsers, text: 'Израиль рулит memebers'}
       // bot.sendMessage(clientId, clanDescription, messageOptionsNew);
  }