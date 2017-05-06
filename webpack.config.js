var HtmlwebpackPlugin=require('html-webpack-plugin')
module.exports={
	entry:'./src/main.js',
	output:{
		// path:__dirname+'/dist',
		filename:'builds.js'
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!autoprefixer-loader!less-loader'
			},
			{
				test:/\.(png|jpg|ttf)$/,
				loader:'url-loader?limit=20000'
			}
		]
	},
	plugins:[
		new HtmlwebpackPlugin({
			title:'index',
			filename:'index.html',
			template:'index1.html'
		})
	]
}