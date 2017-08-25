module.exports = {
  host     : 'localhost',
  user     : 'root',
  password : process.env.HELLHELP_DB_PASS || '',
  port     : 3306,
  database : 'hell_help'
};