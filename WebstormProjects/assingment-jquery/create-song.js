
var validater = $('#createSong').validate({
    rules: {
        name: {
            required: true,
            minlength: 2,
            maxlength: 35
        },
        singer: {
            required: true,
            minlength: 2,
            maxlength: 35
        },
        description: {
            required: true,
            minlength: 2,
        },
        author: {
            required: true,
            minlength: 2,
        },
        thumbnail: {
            required: true,
            minlength: 2,
        },
        Link: {
            required: true,
            minlength: 2,

        },
    },
    messages: {
        name: {
            required: 'Vui lòng nhập tên bài hát của bạn',
            minlength: 'Tên quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Tên quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        singer: {
            required: 'Vui lòng nhập singer của bạn.',
            minlength: 'singer quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'singer quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        description: {
            required: 'Vui lòng nhập description của bạn.',
            minlength: 'description quá ngắn, vui lòng nhập ít nhất {0} ký tự',
        },
        author: {
            required: 'Vui lòng nhập author của bạn.',
            minlength: 'author quá ngắn, vui lòng nhập ít nhất {0} ký tự',
        },
        thumbnail: {
            required: 'Vui lòng nhập thumbnail của bạn.',
            minlength: 'thumbnail quá ngắn, vui lòng nhập ít nhất {0} ký tự',
        },

        Link: {
            required: 'Vui lòng nhập link của bạn.',
            minlength: 'link quá ngắn, vui lòng nhập ít nhất {0} ký tự',
        },
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var senderObject = {
            name: $(form['name']).val(),
            singer: $(form['singer']).val(),
            description: $(form['description']).val(),
            author: $(form['author']).val(),
            thumbnail: $(form['thumbnail']).val(),
            link: $(form['Link']).val(),
        };
        $.ajax({
            url: CREATE_SONG_API,
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(senderObject),
            headers: {'authorization': "Basic " + localStorage.getItem('my-token')},
            success: function (data, textStatus, jqXHR) {
                alert("thêm thành công:"+data.name)
                $('#exampleModal3').modal('hide')
                $('#loi2').attr("style",'display.block')
                window.location='index.html'
                $('#alert3').attr("style",'display.block')


            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('#loi2').attr("style",'display.block')

            }
        });
        return false;
    }
})


