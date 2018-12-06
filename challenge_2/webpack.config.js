const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');
const OUT_DIR = path.join(__dirname, '/public');

module.exports = {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
      filename: 'bundle.js',
      path: OUT_DIR
    },
    module : {
      loaders : [
        {
          test : /\.jsx?/,
          include : SRC_DIR,
          loader : 'babel-loader',      
          query: {
            presets: ['react', 'es2015']
         }
        }
      ]
    },
  }
5 

