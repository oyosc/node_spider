const fs = require("fs")
const util = require("util")

class Request{
	constructor(url, respType, method, postData, header, cookies){
		this.url = url;
		this.respType = respType;
		this.method = method;
		this.postData = postData;
		this.header = header;
		this.cookies = cookies;
	}

	NewRequest(url, respType, method, postData, header, cookies){
		return new Request(url, respType, method, postData, header, cookies);
	}

	static async NewRequestWithHeaderFile(url, respType, headerFile){
		console.log("222")
		const stat = util.promisify(fs.stat);
		const stats = await stat('.');
  		console.log(`This directory is owned by ${stats.uid}`);
		// try{
		// 	let stats = util.promisify(fs.stat);
		// 	let isExists = await stats('.');
		// 	console.log(isExists);
		// 	// if isExists{
		// 	// 	readHeaderFromFile(url);
		// 	// }else{
		// 	// 	console.log("配置文件不存在");
		// 	// }
		// } catch(err){
		// 	console.log("223131");
		// 	console.log(err);
		// }
	}

	readHeaderFromFile(headerFile){
		let file = fs.readFileSync(headerFile);
		let result = JSON.parse(file);
		console.log(result);
	}

}

module.exports = {
	NewRequestWithHeaderFile: Request.NewRequestWithHeaderFile
}

