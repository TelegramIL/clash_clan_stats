var TelegramBot = require('node-telegram-bot-api');
const fetch = require("node-fetch");

<<<<<<< HEAD
const menuHandler = require('./menu_handler');
const cardHandler = require('./cardsHandler');
const memberHandler = require('./handle_clan_memebrs');
=======
const port = process.env.PORT || 3000;
>>>>>>> 420fb5cc69f8020a3e1de1a8ae7b9a3f0d5517f1

// Устанавливаем токен, который выдавал нам бот.
var token = '773065086:AAFHP5-a91QeX0uWHPcJfBMIHtCle5AxIko';
// Включить опрос сервера
var bot = new TelegramBot(token, {polling: true});

var clash_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM1MWExNjZmLTI4ZmQtNDVhZC1iYjUyLWZmNGQ4NDI4NDc5YSIsImlhdCI6MTU0MTg3NTgxOCwic3ViIjoiZGV2ZWxvcGVyLzJmMmRhZTA3LTMxN2EtNmY0Ny01MzEwLWZlYzE4NDBhNTViMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3Ny4xMjQuMTIzLjE2NiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.BFV06SKfHgnLNarsuwP12TrHTPGjkjC3yxp614jEZhVCPpEzmzaeaecyR9QlnL-PbYyEoxqfr7MpDxHu1gP4LQ';

var clan_tag = '#PL8GLLC';


const fetchPlayerInfo = async (mess, clientId) =>
{
    var newUrl = mess.replace('#', '%23');
    var url = 'https://api.clashroyale.com/v1/players/' + newUrl + '/upcomingchests';
    var response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'authorization': 'Bearer ' + clash_token,
         },
      })
    var myJson = await response.json();
        myJson.items.map(item => 
        {
            bot.sendMessage(clientId, item.index + ' ' + item.name);
            //bot.sendMessage(clientId, "text");
        });
}


bot.onText(new RegExp('\/start'), async (message, match) =>
{

<<<<<<< HEAD
    var mOptions = await menuHandler.handleMenuState(message.text);
=======
// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием.)
bot.onText(new RegExp('\/start'), function (message, match) {
cosole.log("start");
    // вытаскиваем id клиента из пришедшего сообщения
>>>>>>> 420fb5cc69f8020a3e1de1a8ae7b9a3f0d5517f1
    var clientId = message.hasOwnProperty('chat') ? message.chat.id : message.from.id;
    bot.sendMessage(clientId, mOptions.text, mOptions.menu);
});

bot.on('callback_query', function (message) {

    var clientId = message.hasOwnProperty('chat') ? message.chat.id : message.from.id;

    if (message.data.search('#') == -1)
    {
        var result = cardHandler.countCardHolders(message.data, clientId, bot);
    }
    else
    {
        fetchPlayerInfo(message.data, clientId);
    }
    
    // То что мы записали в callback_data у кнопок приходит в message.data
    if(message.data === 'fetch_users'){  
        fetchClanInfo(clientId);   
    }
    // else
    // {
    //     fetchPlayerInfo(message.data, clientId);
    //     bot.sendMessage(clientId, "", messageOptions);

    // }
});


function isRarityChoose(mess)
{
    var result = false;
    if (mess == 'Common' || mess == 'Rares' || mess == 'Epic' || mess == 'Legend')
    {
        result = true;
    }
    return result;
}

//catch all request that not command
bot.onText(new RegExp('^(?!/)'),  async (message, match) => {
    var mOptions;
    var clientId = message.hasOwnProperty('chat') ? message.chat.id : message.from.id;
    var isChnageMenu =  isRarityChoose(message.text);
    if (isChnageMenu == true)
    {
        mOptions = cardHandler.handleSearchCard(message.text);
    }
    else if(message.text == 'Clan Members')
    {
        mOptions = await waitForMember();
    }
    else
    {
        mOptions = await menuHandler.handleMenuState(message.text);
    }
    if (mOptions && mOptions.text)
    {
        bot.sendMessage(clientId,  mOptions.text, mOptions.menu);
    }
});

const waitForMember = async () =>
{
    var result = await memberHandler.getMembers();
    return result
}