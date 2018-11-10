var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtname = document.forms["register-form"]["name"];
        var msgname = txtname.nextElementSibling;
        if (txtname == null || txtname.value.length == 0) {
            msgname.innerHTML = "* vui lòng nhập họ tên đầy đủ ";
            msgname.classList.remove("hidden-text");
        } else if (txtname.value.length < 50) {
            msgname.innerHTML = "*bắt buộc 50 kí ";
            msgname.classList.remove("hidden-text");
        }

        else {
            msgname.innerHTML = " tên hợp  ";
            msgname.classList.remove("hidden-text");
            msgname.classList.remove("danger-text");
            msgname.classList.add("success-text");
        }
        var mail = document.forms["register-form"]["email"];
        var msgmail = mail.nextElementSibling;
        var n = mail.value.includes("@");
        if (mail == null || mail.value.length == 0) {
            msgmail.innerHTML = "*vui lòng nhập email";
            msgmail.classList.remove("hidden-text");
        }
        else if (n == false) {
            msgmail.innerHTML = " Email không hợp lệ .";
            msgmail.classList.remove("hidden-text");
        }
        else {
            msgmail.innerHTML = " Email hợp lệ .";
            msgmail.classList.remove("hidden-text");
            msgmail.classList.remove("danger-text");
            msgmail.classList.add("success-text");
        }

        var muberphone = document.forms["register-form"]["phone"];
        var msphone = muberphone.nextElementSibling;
        if (muberphone == null || muberphone.value.length == 0) {
            msphone.innerHTML = "* vui lòng nhập số điện thoại  ";
            msphone.classList.remove("hidden-text");
        }
        else {
            msphone.innerHTML = " số điện thoại hợp lệ ";
            msphone.classList.remove("hidden-text");
            msphone.classList.remove("danger-text");
            msphone.classList.add("success-text");
        }

        var checked = document.forms["register-form"]["gender"];
        var smgchecked = checked.nextElementSibling;
        if (checked == null&&checked.value.length==0) {
            smgchecked.innerHTML = "* vui long chon gioi tinh ";
            smgchecked.classList.remove("hidden-text");
        } else {
            smgchecked.innerHTML = " ";
            smgchecked.classList.remove("hidden-text");
            smgchecked.classList.remove("danger-text");
            smgchecked.classList.add("success-text");
        }

    }

}
