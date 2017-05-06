module.exports={
	entry:'./main.js',
	output:{
		// path:__dirname+'/dist',
		filename:'./build.js'
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
				loader:'url-loader?limit=30000'
			}
		]
	}
}