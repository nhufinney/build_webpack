module.exports = {
	entry: './src/main.js',
	output: {
		path: 'build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};
//Run webpack in terminal, move to inside the start directory
//Run $ ./node_modules/.bin/webpack