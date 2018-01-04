const http = require("http");
const request = require("request");


class Page{
	constructor(isFail = false, errormsg = "", req = null, body = null, cookies = null, docParser = null, jsonMap = null, pItems = null, targetRequests = null ){
		this.isFail = isFail;
		this.errormsg = errormsg;
		this.req = req;
		this.body = body;
		this.cookies = cookies;
		this.docParser = docParser;
		this.jsonMap = jsonMap;
		this.pItems = pItems;
		this.targetRequests = targetRequests;
	}

	NewPage(pItems, req){
		return new Page(pItems = pItems, req = req)
	}
	
}

module.exports = {
	NewPage: Page.NewPage
}