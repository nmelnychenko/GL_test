const path = require("path")

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: "./",
    historyApiFallback: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.s?css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g)$/,
        loader: "url-loader"
      }
    ]
  }
}