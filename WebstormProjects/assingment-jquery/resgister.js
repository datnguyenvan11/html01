
var validator=$('#contactForm').validate({
    rules: {
        firstName: {
            required: true,
            minlength: 5,
            maxlength: 10
        },
        lastName: {
            required: true,
            minlength: 5,
            maxlength: 15
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 15
        },
        confirmpassword: {
            required:true,
            equalTo: '[name = "password"]'
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            maxlength: 10,
            minlength: 10,
        },
        avatar:{
            required:true
        },
        birthday:{
            required:true
        },
        address: {
            required: true,

        },

    },
    messages: {
        firstName: {
            required: '* Vui lòng nhập ten',
            minlength: '* Ten qua ngan, Vui lòng nhập ít nhất {0} kí tự',
            maxlength: '* Ten qua dai, vui long nhap nhieu nhat {0} ki tu ',
        },
        lastName: {
            required: ' * Vui lòng nhập họ',
            minlength: '* Họ quá ngắn, lòng nhập ít nhất {0} kí tự',
            maxlength: '* Họ quá dài, vui lòng nhập nhiều nhất {0} kí tự ',
        },
        password: {
            required: '* Vui lòng nhập mật khẩu',
            minlength: '* Mật khẩu qúa ngắn, Vui lòng nhập ít nhất {0} kí tự',
            maxlength: '* Mật khẩu quá dài, vui lòng nhập nhiều nhất {0} ki tu ',
        },
        email: {
            required: " * vui lòng nhập email",
            email: '* vui lòng nhập email đúng định dạng',


        },
        confirmpassword: {
            equalTo: 'mat khau khong khop'
        },
        phone: {
            required: '* Vui lòng nhập số điện thoại.',
            maxlength: '* Vui lòng nhập đúng {0} số',
            minlength: '* Vui lòng nhập đúng {0} số',
        },
        avatar: {
            required: '* Vui lòng nhập avatar.',
        },
        address: {
            required: '* Vui lòng nhập địa chỉ .',
        },
        birthday:{
            required:'* vui lòng nhập ngày sinh '
        },

    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var senderOject = {
            firstName: $(form["firstName"]).val(),
            lastName: $(form["lastName"]).val(),
            confirmpassword: $(form["confirmpassword"]).val(),
            address : $(form["address"]).val(),
            password: $(form["password"]).val(),

            phone: $(form["phone"]).val(),
            gender: $(form["gender"]).val(),
            email: $(form["email"]).val(),
            avatar: $(form["avatar"]).val(),
            birthday:$(form["birthday"]).val(),
        };
        $.ajax({
            url:REGISTER_API,
            type: 'POST',
            contentType: "application/json; charset = utf-8",
            data: JSON.stringify(senderOject),
            success: function (data, textStatus, jqXHR) {
                localStorage.setItem('my-token',data.token)
                $('#exampleModal2').modal('hide')
                $('#alert2').attr("style",'display.block')


            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('#loi1').attr("style",'display.block')
                $('#loi1').attr("style",'color:red')
            }
        });
        return false;
    }
});



