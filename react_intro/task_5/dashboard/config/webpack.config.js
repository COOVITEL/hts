const path = require('path');

module.exports = {
 entry: './src/index.js',
 output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
 },
 mode: 'development',
 devServer: {
    static: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000,
    hot: true,
 },
 module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
 },
};
