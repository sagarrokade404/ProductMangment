module.exports = function (router) {


    var product_list = require('./controller/product_ctrl');
    router.post('/product/getproducts',  product_list.getproducts);
    router.post('/product/addNewProduct',  product_list.addNewProduct);
    router.post('/product/getListOfCategory',  product_list.getListOfCategory);
    router.post('/product/deleteProduct',  product_list.deleteProduct);
    router.post('/product/addCartToProduct',  product_list.addCartToProduct);
    router.post('/product/getAllCart',  product_list.getAllCart);
    router.post('/product/deleteCartItem',  product_list.deleteCartItem);
    
    return router;
}
