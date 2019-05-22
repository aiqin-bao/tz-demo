const path = require('path')
const baseConfig = require('./webpack.base.config')
const htmlWebpackPlugin = require('html-webpack-plugin')
const Merge = require('webpack-merge')


module.exports = Merge(baseConfig, {
	mode: 'development',
	entry: path.join(__dirname, 'src/index.js'),

	output: {
		filename: '[name].js',
		path: path.join(__dirname, './build'),
		publicPath: '/'
	},


	plugins: [
		new htmlWebpackPlugin({
			template: 'demo/index.html',
			inject: true
		})
	],


	devServer: { // 该字段用于配置webpack-dev-server
    contentBase: path.join(__dirname, '../demo'),
    compress: true,
    port: 9000, // 端口9000
    open: true // 自动打开浏览器
  },

})