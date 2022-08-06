require('dotenv').config();

const config = {
    port: process.env.PORT || 4000,
    mysql_user: process.env.MYSQL_ADDON_USER || 'root',
    mysql_pwd: process.env.MYSQL_ADDON_PASSWORD || '',
    mysql_host: process.env.MYSQL_ADDON_HOST || 'localhost',
    mysql_db: process.env.MYSQL_ADDON_DB || 'db_codigo_g15'
}

module.exports = {config};