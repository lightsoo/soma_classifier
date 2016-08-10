var bodyParser = require('body-parser');
var multer = require('multer');


module.exports = function (app) {

//application/json
    app.use(bodyParser.json());
//urlencoded
    app.use(bodyParser.urlencoded({"extends":false}));
// Favicon. ignore.
    app.use('/favicon.ico', function(){});
    app.use(multer());

};