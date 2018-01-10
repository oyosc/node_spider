const spider = require("../../core/spider/spider.js")

let requ = spider.NewSpider("test").AddUrlWithHeaderFile("123", "get", "header.json");
requ.then((result)=>{
    console.log(result);
});