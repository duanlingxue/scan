var express = require('express');
var router = express.Router();
var net = require('../utils/net')
var ipscan = require('../utils/ipscan')


/* port listenning. */
router.get('/port', function(req, res, next) {
    var startTime= new Date().getTime();
    var data = []
    net('www.bilibili.tv', 0, 65536, function(result) {
        console.log('耗时：',new Date().getTime() - startTime+'ms')
        for (var i = 0; i < result.length; i++) {
            console.log('端口:' + result[i]);
            data.push('可用端口:' + result[i])
        }
        res.send({
            code:200,
            message:'成功',
            data:{
                port:data,
                time:new Date().getTime() - startTime+'ms'
            },
        });
    });
});

router.get('/host', function(req, res, next) {
    var startTime= new Date().getTime();
    var data = []


    for(var i = 1; i <= 255; i++ ){
        var ip = '119.75.217'+'.'+i;
        ipscan(ip, function(err, host) {
            if (err) {return}
            console.log("Found: ", host)
            data.push('可用网段:'+host)
        })
    }

    setTimeout(function(){
        res.send({
            code:200,
            message:'成功',
            data:data,
        })
    },2000)

});

module.exports = router;
