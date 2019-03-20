const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: {
    index: path.join(__dirname, "src", "index.jsx")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.(ttf)$/,
        use: ["url-loader?limit=100000"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host: "0.0.0.0",
    port: 3030,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "index.html"
    }),
    new Dotenv(),
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: "src/pwa/",
        to: "pwa",
        force: true
      }
    ])
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 100000,
      maxSize: 500000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
