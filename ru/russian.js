const config = require('../config.json');
const emoji = require('../emoji.json');
const { get } = require('../constructors/sqlite.js')

module.exports = {

    locale: "ru_RU",

    help: {
        description: () => `● Если вам нужна помощь, присоединяйтесь к нашему [серверу поддержки](${config.supportServer}).\n● \`UltraJoins\` разработан \`Ceed#0001\` & \`Txslx#2065\`.\n\n\`🏆\` **Владелец**: \`list\`, \`addbal\`, \`bbal\`, \`del\`, \`blacklist\`, \`whitelist\`, \`remove\`, \`leaveserv\`.\n\`⚒️\` **Администрация**: \`newprefix\`.\n\`💎\` **Общий**: \`help\`, \`invite\`, \`bal\`, \`pay\`, \`check\`, \`info\`, \`buy\`, \`giftcode\`, \`report\`, \`stats\`, \`farm\`.`,
        links: () => `🔗 Ссылки:\n[Поддерживать](${config.supportServer}) ● [Добавь меня](${config.addBot})`
    },

    bal: {
        description: () => `У вас есть \`${data.coins.toFixed(1)}\` монета (ы)\n**Зарабатывайте монеты, бегая** \`+farm\``
    },

    invite: {
        description: () => `Вы можете добавить меня на свой сервер, нажав [Приглашать](${config.addBot}).`
    }
}
