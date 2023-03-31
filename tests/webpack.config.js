/* eslint-disable no-undef */

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		bundle: path.resolve(__dirname, './index.js'),
	},
	target: 'web',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './build'),
		clean: true,
		filename: 'bundle.js',
		publicPath: '.',
	},
	devServer: {
		compress: true,
		port: 9000
	},
	resolve: {
		fallback: {
			'path': false,
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				},
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, './index.html'),
		}),
	],
};