const request = require("../common/request/request.js")

class Spider{
	constructor(taskName, pPageProcesser = null){
		this.taskName = taskName;
		this.pPageProcesser = pPageProcesser;
		this.pScheduler = [];
	}

	static NewSpider(taskName, pPageProcesser){
		return new Spider(taskName, pPageProcesser);
	}

	AddRequest(request){
		if(request == ""){
			console.log("the request is null");
			return this、
		}else if(request.GetUrl() == ""){
			console.log("the request is empty");
			return this;
		}
		this.pScheduler.push(request);
		return this;
	}

	AddRequests(reqs){
		for(let request of reqs){
			this.AddRequest(request);
		}
		return this;
	}



	async AddUrlWithHeaderFile(url, respType, headerFile){
		let req = await request.NewRequestWithHeaderFile("123", "get", headerFile);
		this.AddRequest(req);
		return this;
	}
}


module.exports = {
  NewSpider: Spider.NewSpider
}