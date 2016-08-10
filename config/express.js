var bodyParser = require('body-parser');
var multer = require('multer');
var morgan = require('morgan');

module.exports = function (app) {

//application/json
    app.use(bodyParser.json());
//urlencoded
    app.use(bodyParser.urlencoded({"extends":false}));
    app.use(morgan('dev'));
// Favicon. ignore.
    app.use('/favicon.ico', function(){});
    app.use(multer());

};