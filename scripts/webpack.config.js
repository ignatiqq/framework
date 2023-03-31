const path = require('path');

module.exports = {
	entry: {
		bundle: path.resolve(__dirname, '../src/index.js'),
	},
	target: 'web',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../dist'),
		clean: true,
		filename: 'bundle.js',
		publicPath: '/',
	},
	resolve: {
		fallback: {
			'path': false,
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'],
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
	}
};