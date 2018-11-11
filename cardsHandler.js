const fetch = require("node-fetch");


var clash_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMzNTExY2UyLTEwZmEtNDNmZS1hMjI4LTNlNTAxYzYzOTM4ZCIsImlhdCI6MTU0MTk3MDQ3OCwic3ViIjoiZGV2ZWxvcGVyLzJmMmRhZTA3LTMxN2EtNmY0Ny01MzEwLWZlYzE4NDBhNTViMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIwLjAuMC4wIl0sInR5cGUiOiJjbGllbnQifV19.ih0gRp7jNwkXle05RQ8xuCpQd0Ag4dIiWHpIqyTIcgSHh-_ov097MdsijDPoY60Bn2o9HYfbWRBoFWGMMttCKQ';

var commonCardsChoose = {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        inline_keyboard: [
        [{ text: 'Minions', callback_data: 'Minions',}, { text: 'Archers', callback_data: 'Archers',}, { text: 'Knight', callback_data: 'Knight',}],
        [{ text: 'Spear Goblins', callback_data: 'Spear Goblins',}, { text: 'Goblins', callback_data: 'Goblins',}, { text: 'Bomber', callback_data: 'Bomber',}],
        [{ text: 'Skeletons', callback_data: 'Skeletons',}, { text: 'Barbarians', callback_data: 'Barbarians',}, { text: 'Minion Horde', callback_data: 'Minion Horde',}],
        [{ text: 'Bats', callback_data: 'Bats',}, { text: 'Fire Spirits', callback_data: 'Fire Spirits',}, { text: 'Skeleton Barrel', callback_data: 'Skeleton Barrel',}],
        [{ text: 'Royal Recruits', callback_data: 'Royal Recruits',}, { text: 'Royal Giant', callback_data: 'Royal Giant',}, { text: 'Ice Spirit', callback_data: 'Ice Spirit',}],
        [{ text: 'Rascals', callback_data: 'Rascals',}, { text: 'Goblin Gang', callback_data: 'Goblin Gang',}, { text: 'Elite Barbarians', callback_data: 'Elite Barbarians',}],
        [{ text: 'Arrows', callback_data: 'Arrows',}, { text: 'Zap', callback_data: 'Zap',}, { text: 'Giant Snowball', callback_data: 'Giant Snowball',}]
]
    }), 
}

var rareCardsChoose = {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        inline_keyboard: [
        [{ text: 'Mini P.E.K.K.A.', callback_data: 'Mini P.E.K.K.A.',}, { text: 'Musketeer', callback_data: 'Musketeer',}, { text: 'Giant', callback_data: 'Giant',}],
        [{ text: 'Hog Rider', callback_data: 'Hog Rider',}, { text: 'Valkyrie', callback_data: 'Valkyrie',}, { text: 'Battle Ram', callback_data: 'Battle Ram',}],
        [{ text: 'Mega Minion', callback_data: 'Mega Minion',}, { text: 'Wizard', callback_data: 'Wizard',}, { text: 'Flying Machine', callback_data: 'Flying Machine',}],
        [{ text: 'Three Musketeers', callback_data: 'Three Musketeers',}, { text: 'Ice Golem', callback_data: 'Ice Golem',}, { text: 'Dart Goblin', callback_data: 'Dart Goblin',}],
        [{ text: 'Royal Hogs', callback_data: 'Royal Hogs',}, { text: 'Zappies', callback_data: 'Zappies',}, { text: 'Fireball', callback_data: 'Fireball',}],
        [{ text: 'Rocket', callback_data: 'Rocket',}, { text: 'Heal', callback_data: 'Heal',}]
]
    }), 
}

var epicCardsChoose = {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        inline_keyboard: [
        [{ text: 'Prince', callback_data: 'Prince',}, { text: 'Baby Dragon', callback_data: 'Baby Dragon',}, { text: 'Skeleton Army', callback_data: 'Skeleton Army',}],
        [{ text: 'Witch', callback_data: 'Witch',}, { text: 'Hunter', callback_data: 'Hunter',}, { text: 'Giant Skeleton', callback_data: 'Giant Skeleton',}],
        [{ text: 'Balloon', callback_data: 'Balloon',}, { text: 'Golem', callback_data: 'Golem',}, { text: 'P.E.K.K.A.', callback_data: 'P.E.K.K.A.',}],
        [{ text: 'Cannon Cart', callback_data: 'Cannon Cart',}, { text: 'Dark Prince', callback_data: 'Dark Prince',}, { text: 'Guards', callback_data: 'Guards',}],
        [{ text: 'Bowler', callback_data: 'Bowler',}, { text: 'Goblin Giant', callback_data: 'Goblin Giant',}, { text: 'Electro Dragon', callback_data: 'Electro Dragon',}],
        [{ text: 'Executioner', callback_data: 'Executioner',}, { text: 'Goblin Barrel', callback_data: 'Goblin Barrel',}, { text: 'Barbarian Barrel', callback_data: 'Barbarian Barrel',}],
        [{ text: 'Lightning', callback_data: 'Lightning',}, { text: 'Poison', callback_data: 'Poison',}, { text: 'Freeze', callback_data: 'Freeze',}],
        [{ text: 'Mirror', callback_data: 'Mirror',}]
]
    }), 
}

var legCardsChoose = {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        inline_keyboard: [
        [{ text: 'Miner', callback_data: 'Miner',}, { text: 'Lava Hound', callback_data: 'Lava Hound',}, { text: 'Night Witch', callback_data: 'Night Witch',}],
        [{ text: 'Inferno Dragon', callback_data: 'Inferno Dragon',}, { text: 'Royal Ghost', callback_data: 'Royal Ghost',}, { text: 'Princess', callback_data: 'Princess',}],
        [{ text: 'Lumberjack', callback_data: 'Lumberjack',}, { text: 'Ice Wizard', callback_data: 'Ice Wizard',}, { text: 'Bandit', callback_data: 'Bandit',}],
        [{ text: 'Magic Archer', callback_data: 'Magic Archer',}, { text: 'Mega Knight', callback_data: 'Mega Knight',}, { text: 'Electro Wizard', callback_data: 'Electro Wizard',}],
        [{ text: 'Sparky', callback_data: 'Sparky',}, { text: 'Graveyard', callback_data: 'Graveyard',}, { text: 'The Log', callback_data: 'The Log',}]
]
    }), 
}

var rarityMenu = {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
    keyboard: [
        [{
        text: 'Common',
        },
        {
        text: 'Rares',
        }
        ], 
        [{
        text: 'Epic',
        },
        {
        text: 'Legend',
        }
        ], 
        [{
        text: 'Назад',
        },
        {
        text: 'Домой',
        }
        ], 
]
    }), 
}


var globalCardName = '';
var globalclientId;
var globalTeleBot;

module.exports = {
    handleSearchCard: function handleSearchCard(cardRarity)
    {
        if (cardRarity == 'Common')
        {
            return {menu: commonCardsChoose, text: 'Common Cards'}
        }
        else if (cardRarity == 'Rares')
        {
            return {menu: rareCardsChoose, text: 'Rare Cards'}
        }
        else if (cardRarity == 'Epic')
        {
            return {menu: epicCardsChoose, text: 'Epic Cards'}
        }
        else if (cardRarity == 'Legend')
        {
            return {menu: legCardsChoose, text: 'Legendary Cards'}
        }
    },
        countCardHolders: function countCardHolders(cardName, clientId, bot) 
        {
            globalCardName = cardName;
            globalclientId = clientId;
            globalTeleBot = bot;
            var cardStat = sendCardStat(cardName)
        }
  };


  function sendCardStat(cardName)
  {
    fetchClanMemberTags();
  }


  const fetchClanMemberTags = async () => 
  {
    var response = await fetch('https://api.clashroyale.com/v1/clans/%23PL8GLLC/members', {
                    method: 'GET',
                    headers: {
                      'Accept': 'application/json',
                      'authorization': 'Bearer ' + clash_token
                    },
                  });
    var myJson = await response.json();
    var memberTags = myJson.items.map( member => [{memberTag: member.tag}]);
    calculateCardCount(memberTags);
}

  function calculateCardCount(memberTags)
  {
    var cardsResult = memberTags.map(singleCardDescr);
  }


const singleCardDescr = async (mTag) =>
{

    // Check to see if the counter has been initialized
    if ( typeof singleCardDescr.isPhotoSent == 'undefined' ) {
        // It has not... perform the initilization
        singleCardDescr.isPhotoSent = false;
    }

    var newUrl = mTag[0].memberTag.replace('#', '%23');
    var url = 'https://api.clashroyale.com/v1/players/' + newUrl;
    var response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'authorization': 'Bearer ' + clash_token,
        },
      })
    var  myJson =  await response.json();
    var searchedCard = await myJson.cards.find(findCard);
    if (searchedCard != null && searchedCard.count > 0)
    {
        if (singleCardDescr.isPhotoSent == false)
        {
            globalTeleBot.sendPhoto(globalclientId, searchedCard.iconUrls.medium, {caption: searchedCard.name});
            singleCardDescr.isPhotoSent = true;
        }
        globalTeleBot.sendMessage(globalclientId, myJson.name + ': ' + searchedCard.count, rarityMenu);
    }
}

  function findCard(card)
  {
    if (card.name == globalCardName)
    {
        return true;
    }
    else
    {
        return false;
    }
  }