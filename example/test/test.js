const spider = require("../../core/spider/spider.js")

spider.NewSpider("test").AddUrlWithHeaderFile("123", "get", "header.json")