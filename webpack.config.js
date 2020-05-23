const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: env.production ? '[name].css' : '[name]..[hash]css',
        chunkFilename: env.production ? '[id].css' : '[id].[hash].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { esModule: true },
            },
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    devtool: env.production ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true,
    },
  };
};
