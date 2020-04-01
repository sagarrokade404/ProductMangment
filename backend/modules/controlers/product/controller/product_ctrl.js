'use strict';
let { Products } = require('./product_class');
let { Carts } = require('./cart_class');

var uniqid = require('uniqid');
let productsClass = new Products();
let carts = new Carts();
module.exports = {
    getproducts,
    addNewProduct,
    getListOfCategory,
    deleteProduct,
    addCartToProduct,
    getAllCart,
    deleteCartItem
}

function getproducts(req,res) {
    async function getproducts_method() {
 
        const {
          category
        } = req.body
        // console.log('category',category)
        if(category != 'all') {
            const products =   productsClass.getCategoryProducts(category);
            console.log(products)
            res.json( {
                msg: `${category} product`,
                data: products
            })
        }else {
            const products =   productsClass.getAllProduct();
            // console.log(products)
            res.json( {
                msg: `${category} product list`,
                data: products
            })
        }
  
    } 



    getproducts_method().then( function(data) {

    })
}



function addNewProduct(req,res) {
    async function addNewProduct_method() {
 
        const {
            productName, productPrice, productCategory
        } = req.body
        const id = uniqid.time() 
    const addprodt   =  productsClass.addProduct( id, productName, productPrice, productCategory)
        // console.log(addprodt)
        res.json( {
            code: 200,
            msg: 'product added',
            data: addprodt
        })
    } 



    addNewProduct_method().then( function(data) {

    })
}

function getListOfCategory(req,res) {
    async function getListOfCategory_method() {
 
       
       
    const categoryList   =  productsClass.getListOfCategory( )
        console.log('categoryList',categoryList)
        res.json( {
            code: 200,
            msg: 'Category List ',
            data: categoryList
        })
    } 



    getListOfCategory_method().then( function(data) {

    })
}

function deleteProduct(req,res) {
    async function deleteProduct_method() {
 
        const {
          id
        } = req.body
        // console.log('category',category)
       
            const productscategory =   productsClass.deleteProduct(id);
            console.log(productscategory)
            res.json( {
                msg: `Product Delete Successfully `,
                data: productscategory
            })
        
  
    } 



    deleteProduct_method().then( function(data) {

    })
}

function addCartToProduct(req,res ){
    async function addCartToProduct_method() {
 
        const {
          id, name, price, category
        } = req.body
        
    const addprodt   =  carts.addCart( id, name, price, category)
        // console.log(addprodt)
        res.json( {
            code: 200,
            msg: 'product added',
            data: addprodt
        })
    } 



    addCartToProduct_method().then( function(data) {

    })
}



function getAllCart(req,res) {
    async function getAllCart_method() {
 
    
        // console.log('category',category)
      
        let totalPrice = 0;
         
            const products =   carts.getAllCart();
            // console.log('getAllCart products',products)
       
            if(products.cartLenth != 0) {
                products.cartData.map( (itemData) => {
                    totalPrice = totalPrice + (itemData.quntity * itemData.price);
                } )
                res.json( {
                    msg: `All Cart Data`,
                    data: products,
                    totalPrice: totalPrice
                })
            } else {
                res.json( {
                    msg: `All Cart Data`,
                    data: products,
                    totalPrice: totalPrice
                })
            }
      
        
  
    } 



    getAllCart_method().then( function(data) {

    })
}


function deleteCartItem(req,res) {
    async function deleteCartItem_method() {
 
        const {
          id
        } = req.body
        // console.log('category',category)
       
            const productscategory =   carts.deleteCart(id);
            console.log(productscategory)
            res.json( {
                msg: `Product Delete Successfully `,
                data: productscategory
            })
        
  
    } 



    deleteCartItem_method().then( function(data) {

    })
}