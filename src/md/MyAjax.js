//导入fetch-jsonp模块
var fetchJsonp = require("fetch-jsonp");
/**
 * 如果使用jQuery/zepto请求一些网站数据时，会有跨域提示，此时直接使用fetch-jsonp，则没有这样的限制
 * 如果需要继续使用jQuery/zepto,则可以使用代理服务器，node代理
 */
var MyAjax = {
	/**
	 * jquery、zepto请求数据
	 * option 配置选项
	 * 		type:---请求方式
	 * 		url----请求地址
	 * 		data-----请求的参数
	 * 		dataType----返回数据格式   json/xml/jsonp
	 * 		success ---- 成功请求到数据
	 * callback 成功的回调函数，如果需要可以再加一个errcallback作为失败回调函数
	 */
//	ajax(option,callback){
//		$.ajax({
//			type:option.type,
//			url:option.url,
//			data:option.data,
//			dataType:option.dataType,
//			success:function(data){
//				//使用回调函数将数据处理返回给调用的地方
//				callback(data);
//			}
//			
//		})
//	},
	/*
	 * fetch请求数据
	 * 	核心思想  ES6中的promise
	 * 	典型的函数   then()
	 * 	url---请求的地址，如果有参数，则拼接进去
	 * 	callback --- 成功回调函数
	 * 	errCallback --- 失败回调函数
	 * 	response.json();属于es6中的
	 * 
	 * 	需要了解
	 * 		es6中的数组，字符串新添加的方法
	 * */
	fetch(url,callback,errCallback){
		fetch(url).then(function(response){
			return response.json();
		}).then(function(data){
			//成功的回调函数
			callback(data);
		}).catch(function(err){
			//异常，错误的回调函数
			errCallback(err);
		})
	},
	/**
	 * 处理jsonp格式的数据
	 * 	使用方法和fetch一模一样
	 */
	fetchJsonp(url,callback,errCallback){
		//显示加载图
//		$("#loading").show();
		fetchJsonp(url).then(function(response){
			return response.json();
		}).then(function(data){
			//隐藏加载图
//			$("#loading").hide();
			//成功的回调函数
			callback(data);
		}).catch(function(err){
			//异常，错误的回调函数
			errCallback(err);
		})
	}
}

module.exports = MyAjax;