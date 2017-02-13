var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");

var devtool = process.argv.indexOf('-p') !== -1 ?
	"eval" : "source-map";

var env = process.argv.indexOf('-p') !== -1 ?
	"production" : "development";

var plugins = [new webpack.DefinePlugin({"process.env": {
	NODE_ENV: JSON.stringify("production"),
	ENV: JSON.stringify(env)
}})];
if(process.argv.indexOf('-p') !== -1) {
	plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = [
	{
		entry: __dirname + "/scripts/index.tsx",
		output: {
			path: __dirname + "/dist",
			filename: "script.js"
		},
		resolve: {
			extensions: [".tsx", ".ts", ".js"]
		},
		devtool: devtool,
		module: {
			rules: [{
				test: /\.tsx?$/,
				use: "ts-loader"
			}]
		},
		plugins: plugins
	},
	{
		entry: __dirname + "/styles/style.scss",
		output: {
			path: __dirname + "/dist",
			filename: "style.css"
		},
		resolve: {
			extensions: [".scss", ".css"]
		},
		devtool: devtool,
		module: {
			rules: [{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?minimize&sourceMap!postcss-loader!sass-loader"
				})
			}]
		},
		plugins: [
			new webpack.LoaderOptionsPlugin({
				options: {
					context: "/",
					postcss: [
						autoprefixer({browsers: [
							"last 2 versions",
							"ie >= 10",
							"Android >= 4",
							"ios_saf >= 9"
						]})
					]
				}
			}),
			new ExtractTextPlugin("style.css")
		]
	}
];
