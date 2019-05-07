const keys = {
  fbKeys : {
      clientID : process.env.clientID,
      clientSecret : process.env.clientSecret,
  },

  cookieKeys : {
      keys : process.env.cookieKeys
  },
  mongoURL : {
      connect : process.env.mongoURL
  }
}

module.exports = keys;

