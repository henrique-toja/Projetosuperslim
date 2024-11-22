const path = require('path');

module.exports = {
  entry: './src/index.js',  // Arquivo principal de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // Arquivo final do bundle
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aplica Babel em arquivos .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Carrega arquivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,  // Porta para desenvolvimento
  },
};