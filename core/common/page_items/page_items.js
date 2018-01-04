class PageItems{
    constructor(req = null, items = null, skip = false){
        this.req = req;
        this.items = items;
        this.skip = skip;
    }

    NewPageItems(req, items, skip){
    	return new PageItems(req, items, skip);
    }
}

module.exports = {
	NewPageItems: PageItems.NewPageItems
}
