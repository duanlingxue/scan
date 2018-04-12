
//扫描ip
module.exports = function scan(host, callback) {
    var net = require('net');
    var Socket = net.Socket;
    var socket = new Socket();
    var port = 80;
    socket.setTimeout(1500)
    socket.on('connect',function () {
        socket.end();
        callback && callback(null,host);
    })
    socket.on('timeout', function() {
        socket.destroy()
        callback && callback(new Error('timeout'), host)
    })
    socket.on('error', function(err) {
        callback && callback(err, host)
    })
    socket.on('close', function(err) {
    })
    socket.connect(port,host);
}
