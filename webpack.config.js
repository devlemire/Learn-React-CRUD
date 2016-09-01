module.exports = {
	entry: {
		main: './public/app/reactApp.js'
	},
	output: {
		filename: 'bundle.js',
		path: './public/script'
	},
	devtool: 'sourcemap',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'css'
			}
		]
	}
};
