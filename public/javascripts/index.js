
$('.port').on('click',function () {
    $.get({
        url:'/api/port',
        success:function (result) {
            var data = result.data.port;
            var timer = result.data.time;
            var dataStr = ''
            for (var i=0;i<data.length;i++){
                dataStr+=data[i]+'<br />'
            }
            $('.content').html(dataStr)
        }
    })
})
$('.host').on('click',function () {
    $.get({
        url:'/api/host',
        success:function (result) {
            console.log(result)
            var data = result.data;
            var dataStr = ''
            for (var i=0;i<data.length;i++){
                dataStr+=data[i]+'<br />'
            }

            $('.content').html(dataStr)
        }
    })
})