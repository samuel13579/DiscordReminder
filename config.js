require('dotenv-flow').config();

module.exports = {
    token : process.env.TOKEN,
    owner: process.env.OWNER,
    prefix: process.env.PREFIX,
    db: process.env.DB
};