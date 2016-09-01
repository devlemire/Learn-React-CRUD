module.exports = {
	entry: {
		main: 'THE FILE PATH TO YOUR REACT APP'
	},
	output: {
		filename: 'bundle.js',
		path: 'THE FILE PATH TO OUTPUT bundle.js'
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
