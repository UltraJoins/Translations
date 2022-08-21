const config = require('../config.json');
const emoji = require('../emoji.json');
const { get } = require('../constructors/sqlite.js')

module.exports = {

    locale: "en_US",

    help: {
        description: () => `● If you need help, join our [support server](${config.supportServer}).\n● \`UltraJoins\` dev by \`Ceed#0001\` & \`Txslx#2065\`.\n\n\`🏆\` **Owner**: \`list\`, \`addbal\`, \`bbal\`, \`del\`, \`blacklist\`, \`whitelist\`, \`remove\`, \`leaveserv\`.\n\`⚒️\` **Administration**: \`newprefix\`.\n\`💎\` **General**: \`help\`, \`invite\`, \`bal\`, \`pay\`, \`check\`, \`info\`, \`buy\`, \`giftcode\`, \`report\`, \`stats\`, \`farm\`.`,
        links: () => `🔗 Links:\n[Support](${config.supportServer}) ● [Add Me](${config.addBot})`
    },

    bal: {
        description: () => `You have \`${data.coins.toFixed(1)}\` coin(s)\n**Earn coins by running** \`+farm\``
    },

    invite: {
        description: () => `You can add me to your server by clicking [Invite](${config.addBot}).`
    }
}
