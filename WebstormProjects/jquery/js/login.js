
$('#contactForm').validate({
    rules: {
        password: {
            required: true,
            minlength: 5,
            maxlength: 15
        },
        'confirm-password':{
            equalTo :'[name = "password"]'
        },
        email: {
            required: true,
            email: true
        },
    },
    messages: {
        password: {
            required: 'Vui lòng nhập mật khẩu',
            minlength: 'mat khau qua ngan, Vui lòng nhập ít nhất {0} kí tự',
            maxlength: 'mat khau qua dai, vui long nhap nhieu nhat {0} ki tu ',
        },
        email: {
            required: "vui long nhap email",
            email: 'vui long nhap email dug dinh dang',

        },
    }
});
