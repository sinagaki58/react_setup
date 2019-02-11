import path from 'path'

export default {
  entry: path.resolve(__dirname, 'src/client/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [{
          loader: 'babel-loader'
        },
        {
          loader: 'ts-loader'
        },
      ]
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      "@src": path.resolve(__dirname, 'src')
    }
  },
}