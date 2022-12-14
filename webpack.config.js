const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
	mode = 'production';
	target = 'browserslist';
}
module.exports = {
	mode,
	target,
	output : {
		path                : path.resolve(__dirname, 'dist'),
		assetModuleFilename : 'images/[hash][ext][query]',
	},
	module : {
		rules : [
			{
				test : /\.(png|jpe?g|gif|svg)$/i,
				type : 'asset',
			},
			{
				test : /\.(s[ac]|c)ss$/i,
				use  : [
					{
						loader  : MiniCssExtractPlugin.loader,
						options : { publicPath : '' },
					},
					'css-loader',
					'sass-loader',
					'postcss-loader',
				],
			},
			{
				test    : /\.jsx?$/,
				exclude : /node_modules/,
				use     : {
					loader : 'babel-loader',
				},
			},
		],
	},
	plugins : [
		new ESLintPlugin(),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template : './src/index.html',
		}),
	],
	resolve : {
		extensions : ['.js', '.jsx'],
	},
	devtool   : 'source-map',
	devServer : {
		static : './dist',
		hot    : true,
		port   : 8000,
		open   : true,
	},
};
