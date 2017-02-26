// var removeUseStrict = require('remove-use-strict');
// module.exports = function(content) {
//     return removeUseStrict(content, {force: true});
// };
module.exports = {
	entry: './main.js',
	output: {
		path: 'build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};