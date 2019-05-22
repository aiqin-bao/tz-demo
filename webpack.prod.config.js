const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")



const prodConfig = {

	mode: 'production',

	entry: './src/export.js',

	output: {
			path: path.resolve(__dirname, './build'),
			filename: 'index.js', // 输出文件
			libraryTarget: 'umd', 
			library: 'tz-demo1', // 库名称
			libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
		},

		module: {
			rules: [{
					test: /\.s?css$/,
					include: /(node_modules|src)/,
					use: [
							MiniCssExtractPlugin.loader,
							'css-loader',
							'sass-loader',
							'postcss-loader'
					]
			}]
	},

		externals: {
			react: {
				root: "React",
				commonjs2: "react",
				commonjs: "react",
				amd: "react"
			},
			"react-dom": {
				root: "ReactDOM",
				commonjs2: "react-dom",
				commonjs: "react-dom",
				amd: "react-dom"
			}
		},

		plugins: [
			new MiniCssExtractPlugin({
				filename: "index.css" // 提取后的css的文件名
			})
		],
}

module.exports = merge(baseConfig, prodConfig)