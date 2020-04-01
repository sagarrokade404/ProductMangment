module.exports = function (express) {
    const router = express.Router();
    
    require('./controlers/product/product_routes')(router);
 
    return router;
}