const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'index.bundle.js'
	},
	mode: process.env.NODE_ENV || 'development',
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		}, {
			test: /\.(css|scss)$/,
			use: ['style-loader', // creates style nodes from JS strings
				'css-loader', // translates CSS into CommonJS
				'sass-loader' // compiles Sass to CSS, using Node Sass by default
			]
		},{
			test: /\.(jpe?g|png|gif|svg)$/,
			use: [
			{
					loader: 'url-loader',
					options: { limit: 40000 }
			},
			'image-webpack-loader'
			]
		}] 
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules']
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		historyApiFallback: true,
		port: 8080,
	},
	plugins: [new HtmlWebpackPlugin({
		template: path.join(__dirname, 'src', 'index.html')
	})]
}
