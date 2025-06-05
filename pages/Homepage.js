exports.Homepage = class Homepage{

    constructor(page){
        this.page = page;
        this.productlist = '//a[@class="hrefch"]';
        this.addtocartbton = '//a[@class="btn btn-success btn-lg"]';
        this.cart = '//a[@id="cartur"]';
    }

    async addproducttocart(productnames) {
        const productlists = await this.page.$$(this.productlist);
        for(const products of productlists){
            if(productnames === await products.textContent()) {
                await products.click()
                break;
            }
        }
        await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('Product added.')) {
                await dialog.accept();
            }
        })
        await this.page.locator(this.addtocartbton).click();
    }
    
    async gotocart() {
        await this.page.locator(this.cart).click();        
    }
}