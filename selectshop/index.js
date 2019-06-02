// 當文件已經全載入至記憶體時，開始執行程式
$(document).ready(function() {

    // 清空 product-list
    $('#product-list').empty();
    $('#page').hide()

    var items = null
    var pageCount = 20
    var currentPage = 1

    $.get('https://js.kchen.club/B04704090/query', function(response) {
        if (response) {
            // 伺服器有回傳資料
            if (response.result) {
                $('#product-list').empty();
                // 資料庫有回傳資料
                items = response.items

                // for (var i = 0; i < items.length; i++) {
                //     newItem(items[i])
                // }

                // 加了分頁效果，預設顯示第一頁
                showItems(1)

                // 顯示分頁和設定分頁的函式
                $('#page').show()
                newPage(items.length)

            } else {
                $('#message').text('查無相關資料')
                $('#dialog').modal('show')
            }
        } else {
            $('#message').text('伺服器出錯')
            $('#dialog').modal('show')
        }

        console.log(response)
    }, "json")

    var showItems = (page) => {
        if (items == null) return
        var start = (page - 1) * pageCount
        var end = start + pageCount - 1
        $('#product-list').empty();
        for (var i = start; i <= end; i++) {
            newItem(items[i])
        }
    }

    var newItem = (item) => {
        $img = $('<img>').attr('class', 'image').attr('src', item.image)
        $h3 = $('<h3>').attr('class', 'name').text(item.name)
        $p = $('<p>').attr('class', 'price').text('NT$ ' + item.price)

        $item = $('<div>').attr('class', 'item').append($img).append($h3).append($p)
        $col = $('<div>').attr('class', 'col-*').append($item)

        $('#product-list').append($col)
    }

    var newPage = (n) => {
        var pageNum = n / 20
        pageNum = (n % 20 != 0) ? pageNum + 1 : pageNum

        $('#page-number').empty()

        $la = $('<a>').attr('class', 'page-link').attr('href', '#').attr('tabindex', '-1').text('«')
            //修改
        $la.on('click', function() {
            var i = $('#page-number').find("li[class='page-item active']").index()
            if (Number(i) > 1) {
                $('#page-number').find("li[class='page-item active']").attr('class', 'page-item')
                $('#page-number').find('li').eq(Number(i) - 1).attr('class', 'page-item active')
                showItems(Number(i) - 1)
            }
        })
        $lli = $('<li>').attr('class', 'page-item').append($la) //.addClass('disabled').append($la)

        $('#page-number').append($lli)

        // 插入分頁數字
        for (var i = 1; i <= pageNum; i++) {
            $a = $('<a>').attr('class', 'page-link').attr('href', '#').text(i)

            $a.on('click', function() {
                var i = $(this).text()
                    //showItems(Number(i))
                    // 修改在這裡
                $('#page-number').find("li[class='page-item active']").attr('class', 'page-item')
                $('#page-number').find('li').eq(Number(i)).attr('class', 'page-item active')
                showItems(Number(i))
            })

            var strActive = ((i == currentPage) ? ' active' : '')
            $li = $('<li>').attr('class', 'page-item' + strActive).append($a)
            $('#page-number').append($li)
        }

        $ra = $('<a>').attr('class', 'page-link').attr('href', '#').text('»')
            //修改
        $ra.on('click', function() {
            var i = $('#page-number').find("li[class='page-item active']").index()
            if (Number(i) < pageNum - 1) {
                $('#page-number').find("li[class='page-item active']").attr('class', 'page-item')
                $('#page-number').find('li').eq(Number(i) + 1).attr('class', 'page-item active')
                showItems(Number(i) + 1)
            }
        })
        $rli = $('<li>').attr('class', 'page-item').append($ra)
        $('#page-number').append($rli)
    }

})


// 當文件已經全載入至記憶體時，開始執行程式
$(() => {

    $('#insert').on('click', function() {

        // 取得商品資料
        var data = {
            item: {
                name: $('#inputProductName').val(),
                price: Number($('#inputProductPrice').val()),
                count: +$('#inputProductCount').val(),
                image: $('#inputProductImage').val(),
            }
        }

        // 新增商品
        $.post('https://js.kchen.club/B04704090/insert', data, function(response) {
            if (response) {
                // 伺服器有回傳資料
                if (response.result) {
                    $('#message').text('新增成功')
                    console.log(response.item)
                    $('#dialog').modal('show')
                } else {
                    $('#message').text('新增失敗')
                    console.log(response.message)
                    $('#dialog').modal('show')
                }
            } else {
                $('#message').text('伺服器出錯')
                $('#dialog').modal('show')
            }
        })
    })
})