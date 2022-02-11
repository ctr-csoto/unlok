require("dotenv").config();

let config = {
    bd: process.env.BD || false
}

module.exports = {config};