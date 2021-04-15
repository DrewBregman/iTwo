module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
              // name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        },
      ]
    }
  };