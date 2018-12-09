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
      rules : [
        {
          test : /\.jsx?/,
          include : SRC_DIR,
          exclude: /node_modules/,
          loader : 'babel-loader',      
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
         }
        },
      ]
    }
  }


