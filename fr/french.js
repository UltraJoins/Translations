const config = require('../config.json');
const emoji = require('../emoji.json');
const { get } = require('../constructors/sqlite.js')

module.exports = {

    locale: "fr_FR",

    help: {
        description: () => ``,
        links: () => `🔗 Liens:\n[Support](${config.supportServer}) ● [Ajoute Moi](${config.addBot})`
    },

    bal: {
        description: () => `Vous avez \`${data.coins.toFixed(1)}\` coin(s)\n**Gagner plus de coins avec** \`+farm\``
    },

    invite: {
        description: () => `Ajoutez moi en cliquant sur [Invite](${config.addBot}).`
    }
}