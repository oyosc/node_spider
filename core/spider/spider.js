const request = require("../common/request/request.js")

class Spider{
	constructor(taskName, pPageProcesser = null){
		this.taskName = taskName;
		this.pPageProcesser = pPageProcesser;
	}

	static NewSpider(taskName, pPageProcesser){
		return new Spider(taskName, pPageProcesser)
	}

	AddUrlWithHeaderFile(url, respType, headerFile){
		request.NewRequestWithHeaderFile("123", "get", headerFile)
	}
}


module.exports = {
	NewSpider: Spider.NewSpider
}