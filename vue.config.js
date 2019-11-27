const webpack = require('webpack')
module.exports = {
  //...
  baseUrl: './',
  pluginOptions:{
    entry:{
      app:["babel-polyfill","./src/main.js"]
    }
  },

    
     
};
