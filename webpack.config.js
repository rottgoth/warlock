module.exports = {
  entry: "./app/App.js",
  // output: {
  //   filename: "public/bundle.js"
  // },
  output: {
    path: __dirname + '/__build__',
    filename: 'bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}