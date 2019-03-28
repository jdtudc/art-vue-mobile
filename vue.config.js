/**
 * @Author: Created By McChen
 * @Date: 2019/2/14
 * @Mail: chenjiahao@jd.com
 * @Version: V1.0.0
 */

module.exports = {
	// 选项...
	// baseUrl
	publicPath: process.env.NODE_ENV === 'production'
		? './'
		: '/',
	// 关闭文件hash
	filenameHashing: false,
	// babel-loader 转译文件
	transpileDependencies: [],
	// 关闭生产环境sourcemap
	productionSourceMap: false,
	// webpack配置
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			// 为生产环境修改配置...
		} else {
			// 为开发环境修改配置...
		}
		config.entry.app = ['./examples/main.js']
	},
	// webpack-dev-server
	devServer: {
	}
}