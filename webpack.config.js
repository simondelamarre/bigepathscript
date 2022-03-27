const path = require('path');
const { webpack } = require('webpack');
module.exports = env => {
  return {
    entry: ['./src/executePathSetup.ts'],
    mode: "production",
    devtool: false, // 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'css/[name].css',
              }
            },
            {
              loader: 'extract-loader'
            },
            {
              loader: 'css-loader?-url'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      modules: ['node_modules', path.join(__dirname, 'src'), 'assets'],
    },
    output: {
      filename: 'executePathSetupV8.min.js',
      path: path.resolve(__dirname, 'dist'),
      library: "pathScript",
      libraryTarget: "umd"
    },
    target: 'web',
  }
};