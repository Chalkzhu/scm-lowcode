const path = require('path');
const CracoLessPlugin = require('craco-less');
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#017eff' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  devServer: {
    port: 9003,
    hot: true,
    historyApiFallback: true,
    compress: true,
    proxy: {
      '/api': {
        target: 'xxx',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
};