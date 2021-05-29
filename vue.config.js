module.exports = {
	publicPath: "./",
	plugins: {
	    autoprefixer: {},
	    "postcss-px2rem": {
	      remUnit: 75 //转换为rem的基准px
	      //其他配置选项自行查文档
	    }
    }
}