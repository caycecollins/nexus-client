import Path from 'path'

import ExtractTextPlugin from 'extract-text-webpack-plugin'
import Webpack from 'webpack'
import Copy from 'copy-webpack-plugin'

import manifest from './dll/vendor-manifest.json'

export default {
  context: Path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
    perimeter: './perimeter.js',
  },
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    alias: {
      config: Path.join(__dirname, 'config', process.env.NODE_ENV || 'production'),
    },
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true, // important for performance
          plugins: [
            'transform-regenerator',
            [require.resolve('babel-plugin-react-intl'), { messageDir: './dist/messages', enforceDescriptions: false }],
          ],
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      {
        test: /\.scss$/,
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
    ]),
    new ExtractTextPlugin('style.css'),
    // new Webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks (module) {
    //     return module.context && module.context.indexOf('node_modules') !== -1
    //   },
    // }),
  ],
}
