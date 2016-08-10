/**
 * Created by Lightsoo on 2016. 8. 10..
 */

var async = require('async');


exports.test = function (req, res, next) {
    console.log('테스트');
    var data = {
        'code' : 200,
        'msg' : '회원가입 성공'
    }
    res.status(200).json(data);
};
