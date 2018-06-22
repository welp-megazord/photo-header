const path = require("path");
const SRC_DIR = path.join(__dirname, "/client/src");
const DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: {
    app: `${SRC_DIR}/index.jsx`
  },
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        use: [
          {
            loader: "babel-loader",
            // query: {
            //   presets: ["react", "env"]
            // }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

