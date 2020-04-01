class Carts {
    constructor(id,name, price,category,quntity) {
        this.carts = [];
     
    }

    addCart(id, name, price, category) {
        const    quntity = 1; 
        let cart = {id, name, price, category, quntity}
        console.log('cart',cart)
        // if( typeof(id) != 'number') return 'required id to be number';
        if( typeof(name) != 'string') return 'required name to be string';
        if( typeof(category) != 'string') return 'required category to be string';
        if( typeof(price) != 'number') return 'required price to be number';
        
        // this.carts.push(cart);

        if(this.carts.length != 0) {
            const findcat = this.carts.find( (catF) =>catF.id == id )
            if(findcat) {
                this.carts.find((catF) => {
                    if(catF.id == id ) {
                        catF.quntity = 1 + catF.quntity;
                    }
                   
                } )
                console.log('totalupdateed',this.carts)
                return this.carts
            }else {
                this.carts.push(cart)
                console.log('total cart data',this.carts)
                return this.carts
            }
            
        }else {
            this.carts.push(cart)
            console.log('total cart data',this.carts)
            return cart
        }
      

       
    }

    getCategoryCarts (category) {
        let prods =  this.carts.filter( (prudt) => {
            if(prudt.category == category) {
                return prudt
            }
        }) ;
        return prods
    }

    getAllCart() {
        const sedObj = {  cartLenth : this.carts.length, cartData: [...this.carts]};

        return sedObj
    }
    
    getCart(id){
        const cart = this.carts.filter( (cart) => cart.id === id)
     
        return cart[0]
    }

    getListOfCategory() {
        return [...this.categorys]
    }


    deleteCart(id) {
        const getCartData = this.getCart(id)
        if(getCartData) {
            console.log('delete getCartData',getCartData);
            const newCarts =   this.carts.filter( (cart) => cart.id != id)
            console.log('newCarts',newCarts);
                this.carts = [...newCarts]
                return  getCartData.category;
        }
    
}


}



module.exports = {Carts}