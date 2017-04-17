import Fs from 'fs'
import Path from 'path'

import ExtractTextPlugin from 'extract-text-webpack-plugin'
import Webpack from 'webpack'
import Copy from 'copy-webpack-plugin'

import manifest from './dll/vendor-manifest.json'

const local = {}
if (Fs.existsSync('./webpack.local.js')) {
  Object.assign(local, require('./webpack.local').default)
}

export default {
  context: Path.resolve(__dirname, 'src'),
  watch: true,
  devtool: 'eval-source-map',
  entry: {
    index: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './index.js',
    ],
  },
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    alias: {
      config: Path.join(__dirname, 'config', process.env.NODE_ENV || 'development'),
      common: Path.join(__dirname, 'src', 'common'),
    },
    modules: ['node_modules'],
  },
  devServer: {
    contentBase: Path.resolve(__dirname, 'dist'),
    host: local.host || 'localhost',
    port: local.port || 8080,
    compress: local.compress || false,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: false,
          plugins: [
            'transform-regenerator',
            ['react-intl', {
              'messagesDir': './dist/messages/',
            }],
          ],
          presets: [
            'react',
            ['es2015', { modules: false }],
            'stage-0',
          ],
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?sourceMap!sass-loader?sourceMap',
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?sourceMap!sass-loader?sourceMap',
        }),
      },
    ],
  },
  plugins: [
    new Webpack.DllReferencePlugin({
      context: Path.resolve(__dirname, 'src'),
      manifest: manifest,
    }),
    new Copy([
      { from: '**/*.html' },
      { from: '**/*.ico' },
    ]),
    new ExtractTextPlugin('style.css'),
    new Webpack.NamedModulesPlugin(),
    // new Webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks (module) {
    //     return module.context && module.context.indexOf('node_modules') !== -1
    //   },
    // }),
  ],
}
