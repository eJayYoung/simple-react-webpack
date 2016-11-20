var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry:path.resolve(__dirname,'app/app.js'),
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'bundle.js'
	},
	module:{
		loaders:[
		{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			loader:'babel',
			query:{
				presets:['es2015','react']
			}
		},
		{
			test:/\.(png|jpg|gif)$/,
			loader:'url-loader?limit=8192'//这里的 limit = 8192 表示用 base64 编码 <=8 的图像
		},
		{
			test:/\.css$/,
			loader:'style!css'
		}
		]
	},
	devServer:{
		contentBase:'./build',
		hot:true,
		inline:true,
		progress:true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
}
