const page = require("./common/page/page.js")

class HttpDownloader{
	func Download(req){
		let p = page.NewPage(req);
		mtype = req.GetResponceType();
		switch(mtype){
			case "html":
				return 0;
				break;
			case "json":
				return 1;
				break;
			case "jsonp":
				return 2;
				break;
			case "text":
				return 3;
				break;
			default:
				console.log("error request type");
		}
		return p;
	}

	func downloadHtml(p, req){


	}

	func connectByHttpProxy(page, in_req){

	}

	func downloadFile(p, req){
		let urlStr = req.GetUrl();
		if(urlStr.length == 0){
			console.log("url is empty");
			return {p, ""};
		}

		let proxystr = req.GetProxyHost();
		let respResult;
		if(len(proxystr)!=0){
			respResult = connectByHttpProxy(p, req);
		}else{
			respResult = connectByHttp(p, req);
		}
	}
}