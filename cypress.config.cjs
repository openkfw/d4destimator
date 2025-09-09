const { defineConfig } = require('cypress');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: {
        resolve: {
          alias: {
            '@site': path.resolve(__dirname),
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@theme': path.resolve(__dirname, 'src/theme'),
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          modules: ['node_modules', path.resolve(__dirname, 'node_modules')],
        },
        module: {
          rules: [
            {
              test: /\.(js|jsx|ts|tsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                },
              },
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(png|jpe?g|gif|svg)$/i,
              type: 'asset/resource',
            },
          ],
        },
      },
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
});
