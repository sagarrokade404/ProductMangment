class Products {
    constructor(name, price, id, category) {
        this.products = [];
        this.categorys= [];
        this.cart = [];
    }

    addProduct(id, name, price, category) {
        let product = {id, name, price, category}
        console.log('product',product)
        // if( typeof(id) != 'number') return 'required id to be number';
        if( typeof(name) != 'string') return 'required name to be string';
        if( typeof(category) != 'string') return 'required category to be string';
        if( typeof(price) != 'number') return 'required price to be number';
        
        this.products.push(product);

        if(this.categorys.length != 0) {
            const findcat = this.categorys.find( (catF) => catF == category)
            if(!findcat) {
                this.categorys.push(category)
            }
        }else {
            this.categorys.push(category)
        }
      

        return product
    }

    getCategoryProducts (category) {
        let prods =  this.products.filter( (prudt) => {
            if(prudt.category == category) {
                return prudt
            }
        }) ;
        return prods
    }

    getAllProduct() {
        return [...this.products]
    }
    
    getProduct(id){
        const product = this.products.filter( (product) => product.id === id)
     
        return product[0]
    }

    getListOfCategory() {
        return [...this.categorys]
    }


    deleteProduct(id) {
        const getProductData = this.getProduct(id)
        if(getProductData) {
            console.log('delete getProductData',getProductData);
            const newProducts =   this.products.filter( (product) => product.id != id)
            console.log('newProducts',newProducts);
                this.products = [...newProducts]
                return  getProductData.category;
        }
    
}


}



module.exports = {Products}