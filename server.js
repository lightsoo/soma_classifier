var express = require('express');
var app = express();
var ip = require('ip');

// Bootstrap application settings
require('./config/express')(app);

// Bootstrap routes
require('./config/routes')(app);


//// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});
//
//app.use(function (err, req, res, next) {
//    console.log('========== Server Error =============');
//    res.status(err.status || 500);
//    res.json({
//        message: err.message,
//        error: {}
//    });
//});

app.listen(3000, function(err){
    if(err){
        console.log('err : ', err);
    }else{
        console.log('server start');
        console.log(ip.address());
    }
});