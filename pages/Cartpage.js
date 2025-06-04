exports.CartPage = class CartPage{

    constructor(page){
        this.page = page;
        this.numofproduct = '//tbody[@id="tbodyid"]//tr//td[2]';
    }

    async checkproductincart(productname) {
        const productincart = await this.page.$$(this.numofproduct)
        for(const product of productincart){
            console.log(await product.textContent())
            if (productname === await product.textContent()) {
                return true;
                break;
            }
        }
        
    }
}