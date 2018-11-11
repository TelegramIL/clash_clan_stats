var startMenu = {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        keyboard: [
    [{
        text: 'Find Card to trade',
    }],
    [{
        text: 'Clan Services',
    }]
    ]
    }), 
};

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

var clanStatsMenu = {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
    keyboard: [
        [{text: 'Israel Top Place',},{ text: 'Clan Members',},{ text: 'Wars Stats',}], 
        [{text: 'Current War Stats',},{ text: 'Home',},{ text: 'Back',}], 
    ]
    }), 
}

module.exports = {
    handleMenuState: handleMenuState = async (currentState) =>
    {
        if (currentState == '/start')
        {
            return {menu: startMenu, text: 'Привет человек из Израиль Рулит!'}
        }
        else if (currentState == 'Find Card to trade')
        {
            return {menu: rarityMenu, text: 'Choose rarity'}
        }
        else if (currentState == 'Clan Services')
        {
            return {menu: clanStatsMenu, text: 'Clan Services'}
        }
        else
        {
            return {menu: startMenu, text: 'Привет человек из Израиль Рулит!'}
        }
    },
        bar: function () {
        // whatever
        }
  };

