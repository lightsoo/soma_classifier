/**
 * Route middlewares
 */


var classify = require('../app/controllers/classify');

module.exports = function (app) {
    //rest api 는 http://서버주소:포트/classify?name=상품명&img=상품이미지주소 형식으로 호출이 가능해야함


    app.get('/classify', classify.test);

}
