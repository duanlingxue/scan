
//扫描端口
module.exports = function scan(host, start, end, callback) {
    console.log('scan--time',host)
    var net = require('net');
    var count = end - start;
    var result = [];
    for(var i=start;i<count;i++){
        var server = net.connect(
            {
                host:host,
                port:i,
            },
            function (i) {
                return function () {
                    result.push(i);
                    this.destroy();
                }
            }(i)
        );
        server.on('error', function(err) {
            if (err.errno == 'ECONNREFUSED') {
                this.destroy();
            }
        });
        server.on('close', function() {
            count--;
            if (!count) {
                callback(result);
            }
        });
    }
}
