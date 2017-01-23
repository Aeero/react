const ExtractTextPlugin = require('extract-text-webpack-plugin'); // css单独打包

module.exports = {
    devtool: 'eval-source-map',

    entry: __dirname + '/src/entry.js', //唯一入口文件
    output: {
        path: __dirname + '/build', //打包后的文件存放的地方
        filename: 'bundle.js', //打包后输出文件的文件名
        publicPath: '/'
      },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader?{rules:{semi:0}}',
            exclude: /node_modules/,
          },],
        loaders: [{
            test: /\.js[x]?$/,
            loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0',
            include: /src/,
            exclude: /node_modules/,
          }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss'),
          }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
          }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192',
          },],
      },

    postcss: [
        require('autoprefixer'), //调用autoprefixer插件,css3自动补全
    ],


    devServer: {
        // contentBase: './src/views',  //本地服务器所加载的页面所在的目录
        port: 8080,
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true
        // hot: true//实时刷新
      },

    plugins: [
        new ExtractTextPlugin('main.css'),
    ],

  };
