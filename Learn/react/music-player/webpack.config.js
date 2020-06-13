const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/Index.js'
    ],
    module: {
        rules: [
            {
                loaders: [ 'babel?presets[]=react,presets[]=es2015' ],
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
    contentBase: './dist',
      hot: true
  }
};