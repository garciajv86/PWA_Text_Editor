const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      // TODO: Add and configure HtmlWebpackPlugin
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        chunks: ["main"],
      }),
      // TODO: Add and configure WebpackPwaManifest
      new WebpackPwaManifest({
        name: "Your PWA Name",
        short_name: "Short Name",
        description: "Your PWA Description",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: path.resolve("src/assets/icon.png"),
            sizes: [96, 128, 192, 256, 384, 512],
          },
        ],
      }),
      // TODO: Add and configure InjectManifest for Workbox
      new InjectManifest({
        swSrc: "./src/service-worker.js",
      }),
    ],

    module: {
      rules: [
        // TODO: Add CSS loader
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },

        // TODO: Add Babel loader
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };
};
