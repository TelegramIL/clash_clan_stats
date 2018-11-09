var TelegramBot = require('node-telegram-bot-api');
const fetch = require("node-fetch");

const port = process.env.PORT || 3000;

// Устанавливаем токен, который выдавал нам бот.
var token = '773065086:AAFHP5-a91QeX0uWHPcJfBMIHtCle5AxIko';
// Включить опрос сервера
var bot = new TelegramBot(token, {polling: true});

var clan_tag = '#PL8GLLC';

var messageOptions2 = {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        inline_keyboard: [[{
            text: 'Израиль Рулит',
            callback_data: 'fetch_users'
        },
        {
            text: 'Найти карту',
            callback_data: 'find_card'
        },
    ]],
    keyboard: [
        [{
        text: 'Обычные',
        callback_data: 'common_cards'
        },
        {
        text: 'Редкие',
        callback_data: 'rare_cards'
        }
        ], 
        [{
        text: 'Эпичиские',
        callback_data: 'epic_cards'
        },
        {
        text: 'Легендарные',
        callback_data: 'legend_cards'
        }
        ], 
        [{
        text: 'Назад',
        callback_data: 'back'
        },
        {
        text: 'Домой',
        callback_data: 'home'
        }
        ], 
]
    }), 
}

var messageOptions = {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        keyboard: [[{
        text: 'Израиль Рулит',
        callback_data: 'fetch_users',
        id: 0
    }]]
    }), 
}


function fetchClanInfo(clientId)
{
    fetch('https://api.clashroyale.com/v1/clans/%23PL8GLLC', {
                    method: 'GET',
                    headers: {
                      'Accept': 'application/json',
                      'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNhZTI4NDNmLWQxNmItNGEyMy05ZWIzLTFmZGVkOTUzOGY0ZSIsImlhdCI6MTU0MTc2NTAzOSwic3ViIjoiZGV2ZWxvcGVyLzJmMmRhZTA3LTMxN2EtNmY0Ny01MzEwLWZlYzE4NDBhNTViMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI4My4xMzAuMTQ1LjE5MiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.Y_W9kyVhFkS50tgVLXAj6XjrlpR_EmfJrLbwCNw_gE7g2YETDVpWDd2sGWa-wA6B-Fd8coAICdiyWpgRgrIdNg',
                    },
                  }).then(function(response) {
                    return response.json();
                  })
                  .then(function(myJson) {
                    var clanDescription = myJson.description;
                    var members = myJson.memberList.map(member => ([{text: member.name + " " + member.trophies, callback_data: member.tag}]));
                    var messageOptionsNew = {
                        parse_mode: "HTML",
                        disable_web_page_preview: false,
                        reply_markup: JSON.stringify({
                            inline_keyboard: members
                        })
                    }
                    bot.sendMessage(clientId, clanDescription, messageOptionsNew);
                  });
}

function fetchPlayerInfo(mess, clientId)
{
    var newUrl = mess.replace('#', '%23');
    var url = 'https://api.clashroyale.com/v1/players/' + newUrl;
    fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNhZTI4NDNmLWQxNmItNGEyMy05ZWIzLTFmZGVkOTUzOGY0ZSIsImlhdCI6MTU0MTc2NTAzOSwic3ViIjoiZGV2ZWxvcGVyLzJmMmRhZTA3LTMxN2EtNmY0Ny01MzEwLWZlYzE4NDBhNTViMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI4My4xMzAuMTQ1LjE5MiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.Y_W9kyVhFkS50tgVLXAj6XjrlpR_EmfJrLbwCNw_gE7g2YETDVpWDd2sGWa-wA6B-Fd8coAICdiyWpgRgrIdNg',
        },
      }).then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        myJson.cards.map(card => 
        {
            bot.sendPhoto(clientId, card.iconUrls.medium, {caption: card.count});
            //bot.sendMessage(clientId, "text");
        });
      });
}



// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием.)
bot.onText(new RegExp('\/start'), function (message, match) {
cosole.log("start");
    // вытаскиваем id клиента из пришедшего сообщения
    var clientId = message.hasOwnProperty('chat') ? message.chat.id : message.from.id;
    
    // посылаем ответное сообщение
    bot.sendMessage(clientId, 'Бойцы', messageOptions);
});

bot.on('callback_query', function (message) {
    var clientId = message.hasOwnProperty('chat') ? message.chat.id : message.from.id;
    // То что мы записали в callback_data у кнопок приходит в message.data
    if(message.data === 'fetch_users'){  
        fetchClanInfo(clientId);   
    }
    else
    {
        fetchPlayerInfo(message.data, clientId);
        bot.sendMessage(clientId, "", messageOptions);

    }
});

bot.onText(new RegExp(''), function (message, match) {

    var clientId = message.hasOwnProperty('chat') ? message.chat.id : message.from.id;
    // посылаем ответное сообщение
    
    bot.sendMessage(clientId,'Редкость', messageOptions2);
});
