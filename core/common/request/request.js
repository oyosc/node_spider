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

	GetUrl(){
		return this.url;
	}

	static NewRequest(url, respType, method, postData, header, cookies){
		return new Request(url, respType, method, postData, header, cookies);
	}

	static async NewRequestWithHeaderFile(url, respType, headerFile){
		try{
			let stat = util.promisify(fs.stat);
			let stats = await stat('.');
			if(stats["size"] > 0){
				let h = this.readHeaderFromFile(headerFile);
				let req = await this.NewRequest(url, respType, "GET", "", h, "");
				return req;
			}
		} catch(err){
			return this.NewRequest(url, respType, "GET", "", "", "");
		}
	}

	static readHeaderFromFile(headerFile){
		let file = fs.readFileSync(headerFile);
		let result = JSON.parse(file);
		let header = {};
		for(let key in result){
			if(key == "User-Agent" || key == "Referer" || key == "Cookie"){
				header[key] = result[key];
			}
			header["Cache-Control"] = "max-age = 0";
			header["Connection"] = "keep-alive";
		}
		return header;
	}

}

module.exports = {
	NewRequestWithHeaderFile: Request.NewRequestWithHeaderFile,
	readHeaderFromFile: Request.readHeaderFromFile,
	NewRequest: Request.NewRequest
}

