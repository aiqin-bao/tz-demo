const path = require('path')
const cwd = process.cwd()



const baseConfig = {

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/
			},
			{
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
		]
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			common: path.join(__dirname, './src/common')
		}
  },

}


module.exports = baseConfig